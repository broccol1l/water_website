from sqlalchemy.orm import Session
from db.models import Product
from sqlalchemy.orm import joinedload
from db import get_db

def create_product_db(product_name):
    with next(get_db()) as db:
        product = Product(product_name=product_name)
        db.add(product)
        db.commit()
        return True

def get_all_products_db():
    with next(get_db()) as db:
        return db.query(Product).options(joinedload(Product.photos)).all()

def get_product_by_id_db(product_id: int):
    with next(get_db()) as db:
        return db.query(Product).options(joinedload(Product.photos)).filter_by(id=product_id).first()

def update_product_name_db(product_id: int, new_name: str):
    with next(get_db()) as db:
        product = db.query(Product).filter_by(id=product_id).first()
        if product:
            product.product_name = new_name
            db.commit()
            db.refresh(product)
        return product

def delete_product_db(product_id: int):
    with next(get_db()) as db:
        product = db.query(Product).filter_by(id=product_id).first()
        if product:
            db.delete(product)
            db.commit()
            return True
        return False
