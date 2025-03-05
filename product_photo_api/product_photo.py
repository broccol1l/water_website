from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
import uuid
import os
import glob
from sqlalchemy.orm import Session
from db import get_db
from db.models import ProductPhoto, Product

product_photo_router = APIRouter(prefix='/photo', tags=['Фото'])

PHOTO_DIR = "db/photos"
os.makedirs(PHOTO_DIR, exist_ok=True)

@product_photo_router.post('/add_photo')
async def add_product_photo_api(product_id: int, photo_file: UploadFile = File(...), db: Session = Depends(get_db)):
    # Проверяем, существует ли продукт
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Продукт не найден")

    allowed_types = {"image/jpeg", "image/png", "image/jpg"}
    if photo_file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Недопустимый формат файла")

    # Генерируем имя файла
    file_ext = photo_file.filename.split(".")[-1]
    file_id = uuid.uuid4()
    file_path = f"{PHOTO_DIR}/photo_{file_id}_{product_id}.{file_ext}"

    # Сохраняем файл
    with open(file_path, "wb") as photo:
        photo.write(await photo_file.read())

    # ✅ Добавляем запись в БД
    new_photo = ProductPhoto(product_id=product_id, product_photo_url=file_path)
    db.add(new_photo)
    db.commit()

    return {"status": 1, "message": "Файл успешно загружен", "file_path": file_path}

@product_photo_router.get('/get_photos/{product_id}')
def get_product_photos(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Продукт не найден")

    photos = db.query(ProductPhoto).filter(ProductPhoto.product_id == product_id).all()

    return {
        "product_name": product.product_name,
        "id": product.id,
        "photos": [{"id": photo.id, "product_id": photo.product_id, "product_photo_url": photo.product_photo_url} for
                   photo in photos]
    }


@product_photo_router.delete('/delete_photo')
async def delete_product_photo_api(product_id: int, db: Session = Depends(get_db)):
    # Находим фото в БД
    photos = db.query(ProductPhoto).filter(ProductPhoto.product_id == product_id).all()
    if not photos:
        raise HTTPException(status_code=404, detail="Фото не найдено")

    # Удаляем файлы
    for photo in photos:
        if os.path.exists(photo.product_photo_url):
            os.remove(photo.product_photo_url)

    # Удаляем из БД
    db.query(ProductPhoto).filter(ProductPhoto.product_id == product_id).delete()
    db.commit()

    return {"status": 1, "message": "Фото успешно удалено"}

