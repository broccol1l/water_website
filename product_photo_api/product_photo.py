from fastapi import APIRouter, UploadFile, File, HTTPException
import uuid
import os
import glob

product_photo_router = APIRouter(prefix='/photo', tags=['Фото'])

PHOTO_DIR = "db/photos"
os.makedirs(PHOTO_DIR, exist_ok=True)

@product_photo_router.post('/add_photo')
async def add_product_photo_api(product_id: int, photo_file: UploadFile = File(...)):
    allowed_types = {"image/jpeg", "image/png", "image/jpg"}

    if photo_file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Недопустимый формат файла")

    file_ext = photo_file.filename.split(".")[-1]
    file_id = uuid.uuid4()
    file_path = f"{PHOTO_DIR}/photo_{file_id}_{product_id}.{file_ext}"

    with open(file_path, "wb") as photo:
        photo.write(await photo_file.read())

    return {"status": 1, "message": "Файл успешно загружен", "file_path": file_path}

@product_photo_router.delete('/delete_photo')
async def delete_product_photo_api(product_id: int):
    files_to_delete = glob.glob(f"{PHOTO_DIR}/photo_*_{product_id}.*")  # Ищем фото

    if not files_to_delete:
        raise HTTPException(status_code=404, detail="Фото не найдено")

    for file in files_to_delete:
        os.remove(file)

    return {"status": 1, "message": "Фото успешно удалено"}
