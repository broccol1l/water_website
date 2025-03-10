from fastapi import APIRouter, HTTPException
from db.productservice import *
from typing import Optional
product_router = APIRouter(prefix="/product", tags=['Продукты'])


@product_router.post('/add_product')
async def create_product_api(product_name_ru: str, product_name_en: str, product_name_uz: str,
                             product_description_ru: Optional[str] = None, product_description_en: Optional[str] = None,
                             product_description_uz: Optional[str] = None):
    product = create_product_db(product_name_ru=product_name_ru, product_name_en=product_name_en,
                                product_name_uz=product_name_uz, product_description_ru=product_description_ru,
                                product_description_en=product_description_en,
                                product_description_uz=product_description_uz)
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
async def update_product_name_api(product_id: int, new_name: str, lang: str):
    product = update_product_name_db(product_id, new_name, lang)
    if product:
        return {"message": f"Название продукта на {lang} обновлено", "product": product}
    raise HTTPException(status_code=404, detail="Продукт не найден или язык не поддерживается")


@product_router.patch('/update_product_description_name/{product_id}')
async def update_product_desc_name_api(product_id: int, new_desc_name: str, lang: str):
    product = update_prod_description_name_db(product_id, new_desc_name, lang)
    if product:
        return {"message": f"Описание продукта на {lang} обновлено", "product": product}
    raise HTTPException(status_code=404, detail="Продукт не найден или язык не поддерживается")

@product_router.delete('/delete_product/{product_id}')
async def delete_product_api(product_id: int):
    if delete_product_db(product_id):
        return {"message": "Продукт удален"}
    raise HTTPException(status_code=404, detail="Продукт не найден")