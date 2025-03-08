from db.models import Accessory
from db import get_db
from sqlalchemy.orm import joinedload


def create_accessory_db(accessory_name, accessory_description):
    with next(get_db()) as db:
        accessory = Accessory(accessory_name=accessory_name, accessory_description=accessory_description)
        db.add(accessory)
        db.commit()
        return True

def get_all_accessories_db():
    with next(get_db()) as db:
        return db.query(Accessory).options(joinedload(Accessory.photos)).all()

def get_accessory_by_id_db(accessory_id: int):
    with next(get_db()) as db:
        return db.query(Accessory).options(joinedload(Accessory.photos)).filter_by(id=accessory_id).first()

def update_accessory_name_db(accessory_id: int, new_name: str):
    with next(get_db()) as db:
        accessory = db.query(Accessory).filter_by(id=accessory_id).first()
        if accessory:
            accessory.accessory_name = new_name
            db.commit()
            db.refresh(accessory)
        return accessory

def update_acc_description_name_db(accessory_id: int, new_desc_name: str):
    with next(get_db()) as db:
        accessory = db.query(Accessory).filter_by(id=accessory_id).first()
        if accessory:
            accessory.accessory_description = new_desc_name
            db.commit()
            db.refresh(accessory)
        return accessory

def delete_accessory_db(accessory_id: int):
    with next(get_db()) as db:
        accessory = db.query(Accessory).filter_by(id=accessory_id).first()
        if accessory:
            db.delete(accessory)
            db.commit()
            return True
        return False