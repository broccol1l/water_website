from fastapi import APIRouter, HTTPException
from db.accessoryservice import *
from typing import Optional
accessory_router = APIRouter(prefix="/accessory", tags=['Аксессуары'])


@accessory_router.post('/add_accessory')
async def create_accessory_api(accessory_name: str, accessory_description: Optional[str] = ""):
    accessory = create_accessory_db(accessory_name=accessory_name, accessory_description=accessory_description)
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
async def update_accessory_name_api(accessory_id: int, new_name: str):
    accessory = update_accessory_name_db(accessory_id, new_name)
    if accessory:
        return {"message": "Название обновлено", "accessory": accessory}
    raise HTTPException(status_code=404, detail="Аксессуар не найден")

@accessory_router.patch('/update_accessory_description_name/{accessory_id}')
async def update_acc_description_name_api(accessory_id: int, new_desc_name: str):
    accessory = update_acc_description_name_db(accessory_id, new_desc_name)
    if accessory:
        return {"message": "Описание обновлено", "accessory": accessory}
    raise HTTPException(status_code=404, detail="Аксессуар не найден")

@accessory_router.delete('/delete_accessory/{accessory_id}')
async def delete_accessory_api(accessory_id: int):
    if delete_accessory_db(accessory_id):
        return {"message": "Аксессуар удален"}
    raise HTTPException(status_code=404, detail="Аксессуар не найден")