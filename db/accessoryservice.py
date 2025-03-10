from db.models import Accessory
from db import get_db
from sqlalchemy.orm import joinedload


def create_accessory_db(accessory_name_ru, accessory_name_en, accessory_name_uz, accessory_description_ru,
                        accessory_description_en, accessory_description_uz):
    with next(get_db()) as db:
        accessory = Accessory(accessory_name_ru=accessory_name_ru, accessory_name_en=accessory_name_en,
                              accessory_name_uz=accessory_name_uz, accessory_description_ru=accessory_description_ru,
                              accessory_description_en=accessory_description_en,
                              accessory_description_uz=accessory_description_uz)
        db.add(accessory)
        db.commit()
        return True

def get_all_accessories_db():
    with next(get_db()) as db:
        return db.query(Accessory).options(joinedload(Accessory.photos)).all()

def get_accessory_by_id_db(accessory_id: int):
    with next(get_db()) as db:
        return db.query(Accessory).options(joinedload(Accessory.photos)).filter_by(id=accessory_id).first()

def update_accessory_name_db(accessory_id: int, new_name: str, lang: str):
    with next(get_db()) as db:
        accessory = db.query(Accessory).filter_by(id=accessory_id).first()
        if accessory:
            field_name = f"accessory_name_{lang}"
            if hasattr(accessory, field_name):  # Проверяем, существует ли поле
                setattr(accessory, field_name, new_name)
                db.commit()
                db.refresh(accessory)
                return accessory
        return None  # Вернем None, если продукт не найден или язык неверный

def update_acc_description_name_db(accessory_id: int, new_desc_name: str, lang: str):
    with next(get_db()) as db:
        accessory = db.query(Accessory).filter_by(id=accessory_id).first()
        if accessory:
            field_name = f"accessory_description_{lang}"
            if hasattr(accessory, field_name):  # Проверяем, существует ли поле
                setattr(accessory, field_name, new_desc_name)
                db.commit()
                db.refresh(accessory)
                return accessory
        return None  # Вернем None, если продукт не найден или язык неверный

def delete_accessory_db(accessory_id: int):
    with next(get_db()) as db:
        accessory = db.query(Accessory).filter_by(id=accessory_id).first()
        if accessory:
            db.delete(accessory)
            db.commit()
            return True
        return False