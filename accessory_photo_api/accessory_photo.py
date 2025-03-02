from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
import uuid
import os
import glob
from sqlalchemy.orm import Session
from db import get_db
from db.models import Accessory, AccessoryPhoto

accessory_photo_router = APIRouter(prefix='/accessory_photo', tags=['Фото'])

PHOTO_DIR = "db/accessory_photos"
os.makedirs(PHOTO_DIR, exist_ok=True)

@accessory_photo_router.post('/add_accessory_photo')
async def add_accessory_photo_api(accessory_id: int, photo_file: UploadFile = File(...), db: Session = Depends(get_db)):
    accessory = db.query(Accessory).filter(Accessory.id == accessory_id).first()
    if not accessory:
        raise HTTPException(status_code=404, detail="Аксессуар не найден")

    allowed_types = {"image/jpeg", "image/png", "image/jpg"}
    if photo_file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Недопустимый формат файла")

    file_ext = photo_file.filename.split(".")[-1]
    file_id = uuid.uuid4()
    file_path = f"{PHOTO_DIR}/photo_{file_id}_{accessory_id}.{file_ext}"

    with open(file_path, "wb") as photo:
        photo.write(await photo_file.read())

    new_photo = AccessoryPhoto(accessory_id=accessory_id, accessory_photo_url=file_path)
    db.add(new_photo)
    db.commit()

    return {"status": 1, "message": "Файл успешно загружен", "file_path": file_path}


@accessory_photo_router.delete('/delete_accessory_photo')
async def delete_accessory_photo_api(accessory_id: int, db: Session = Depends(get_db)):
    accessory_photos = db.query(AccessoryPhoto).filter(AccessoryPhoto.accessory_id == accessory_id).all()
    if not accessory_photos:
        raise HTTPException(status_code=404, detail="Фото не найдено")

    for photo in accessory_photos:
        if os.path.exists(photo.accessory_photo_url):
            os.remove(photo.accessory_photo_url)

    db.query(AccessoryPhoto).filter(AccessoryPhoto.accessory_id == accessory_id).delete()
    db.commit()

    return {"status": 1, "message": "Фото успешно удалено"}