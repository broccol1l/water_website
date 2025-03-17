from sqlalchemy.orm import Session
from db.models import Product
from sqlalchemy.orm import joinedload
from db import get_db

def create_product_db(product_name_ru, product_name_en, product_name_uz,
                       product_description_ru, product_description_en, product_description_uz):
    with next(get_db()) as db:
        product = Product(
            product_name_ru=product_name_ru, product_name_en=product_name_en, product_name_uz=product_name_uz,
            product_description_ru=product_description_ru, product_description_en=product_description_en,
            product_description_uz=product_description_uz
        )
        db.add(product)
        db.commit()
        db.refresh(product)
        return product


def get_all_products_db():
    with next(get_db()) as db:
        return db.query(Product).options(joinedload(Product.photos)).all()

def get_product_by_id_db(product_id: int):
    with next(get_db()) as db:
        return db.query(Product).options(joinedload(Product.photos)).filter_by(id=product_id).first()

def update_product_name_db(product_id: int, new_name: str, lang: str):
    with next(get_db()) as db:
        product = db.query(Product).filter_by(id=product_id).first()
        if product:
            field_name = f"product_name_{lang}"
            if hasattr(product, field_name):  # Проверяем, существует ли поле
                setattr(product, field_name, new_name)
                db.commit()
                db.refresh(product)
                return product
        return None  # Вернем None, если продукт не найден или язык неверный

def update_prod_description_name_db(product_id: int, new_desc_name: str, lang: str):
    with next(get_db()) as db:
        product = db.query(Product).filter_by(id=product_id).first()
        if product:
            field_name = f"product_description_{lang}"
            if hasattr(product, field_name):  # Проверяем, существует ли поле
                setattr(product, field_name, new_desc_name)
                db.commit()
                db.refresh(product)
                return product
        return None  # Вернем None, если продукт не найден или язык неверный

def delete_product_db(product_id: int):
    with next(get_db()) as db:
        product = db.query(Product).filter_by(id=product_id).first()
        if product:
            db.delete(product)
            db.commit()
            return True
        return False
