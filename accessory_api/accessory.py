from fastapi import APIRouter, HTTPException
from db.accessoryservice import *
from typing import Optional
accessory_router = APIRouter(prefix="/accessory", tags=['Аксессуары'])


@accessory_router.post('/add_accessory')
async def create_accessory_api(accessory_name_ru: str, accessory_name_en: str, accessory_name_uz: str,
                               accessory_description_ru: Optional[str] = None,
                               accessory_description_en: Optional[str] = None,
                               accessory_description_uz: Optional[str] = None):
    accessory = create_accessory_db(accessory_name_ru=accessory_name_ru, accessory_name_en=accessory_name_en,
                              accessory_name_uz=accessory_name_uz, accessory_description_ru=accessory_description_ru,
                              accessory_description_en=accessory_description_en,
                              accessory_description_uz=accessory_description_uz)
    if accessory:
        return {"message": "Аксессуар успешно добавлен", "accessory": accessory}
    raise HTTPException(status_code=400, detail="Ошибка при добавлении аксессуара")

@accessory_router.get('/get_all_accessories')
async def get_all_accessories_api():
    return get_all_accessories_db()

@accessory_router.get('/get_accessory_by_id/{accessory_id}')
async def get_accessory_by_id_api(accessory_id: int):
    accessory = get_accessory_by_id_db(accessory_id)
    if accessory:
        return accessory
    raise HTTPException(status_code=404, detail="Аксессуар не найден")

@accessory_router.patch('/update_accessory_name/{accessory_id}')
async def update_accessory_name_api(accessory_id: int, new_name: str, lang: str):
    accessory = update_accessory_name_db(accessory_id, new_name, lang)
    if accessory:
        return {"message": f"Название аксессуара на {lang} обновлено", "product": accessory}
    raise HTTPException(status_code=404, detail="Продукт не найден или язык не поддерживается")

@accessory_router.patch('/update_accessory_description_name/{accessory_id}')
async def update_acc_description_name_api(accessory_id: int, new_desc_name: str, lang: str):
    accessory = update_acc_description_name_db(accessory_id, new_desc_name, lang)
    if accessory:
        return {"message": f"Описание аксессуара на {lang} обновлено", "product": accessory}
    raise HTTPException(status_code=404, detail="Продукт не найден или язык не поддерживается")

@accessory_router.delete('/delete_accessory/{accessory_id}')
async def delete_accessory_api(accessory_id: int):
    if delete_accessory_db(accessory_id):
        return {"message": "Аксессуар удален"}
    raise HTTPException(status_code=404, detail="Аксессуар не найден")