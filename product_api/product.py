from fastapi import APIRouter, HTTPException
from db.productservice import *
from typing import Optional
product_router = APIRouter(prefix="/product", tags=['Продукты'])


@product_router.post('/add_product')
async def create_product_api(product_name: str, product_description: Optional[str]):
    product = create_product_db(product_name=product_name, product_description=product_description)
    if product:
        return {"message": "Продукт успешно добавлен", "product": product}
    raise HTTPException(status_code=400, detail="Ошибка при добавлении продукта")

@product_router.get('/get_all_products')
async def get_all_products_api():
    return get_all_products_db()

@product_router.get('/get_product_by_id/{product_id}')
async def get_product_by_id_api(product_id: int):
    product = get_product_by_id_db(product_id)
    if product:
        return product
    raise HTTPException(status_code=404, detail="Продукт не найден")

@product_router.patch('/update_product_name/{product_id}')
async def update_product_name_api(product_id: int, new_name: str):
    product = update_product_name_db(product_id, new_name)
    if product:
        return {"message": "Название обновлено", "product": product}
    raise HTTPException(status_code=404, detail="Продукт не найден")

@product_router.patch('/update_product_description_name/{product_id}')
async def update_product_desc_name_api(product_id: int, new_desc_name: str):
    product = update_prod_description_name_db(product_id, new_desc_name)
    if product:
        return {"message": "Описание обновлено", "product": product}
    raise HTTPException(status_code=404, detail="Продукт не найден")

@product_router.delete('/delete_product/{product_id}')
async def delete_product_api(product_id: int):
    if delete_product_db(product_id):
        return {"message": "Продукт удален"}
    raise HTTPException(status_code=404, detail="Продукт не найден")