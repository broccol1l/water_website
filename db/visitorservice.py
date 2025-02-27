from sqlalchemy.orm import Session
from db.models import Visitor
from sqlalchemy import func



def track_visitor(db: Session, ip_address: str):
    """Добавляет новый IP-адрес или игнорирует, если он уже есть."""
    visitor = db.query(Visitor).filter(Visitor.ip_address == ip_address).first()

    if not visitor:
        visitor = Visitor(ip_address=ip_address)
        db.add(visitor)
        db.commit()
        db.refresh(visitor)


def get_unique_visitor_count(db: Session):
    """Возвращает количество уникальных посетителей."""
    return db.query(func.count(Visitor.id)).scalar()


def clear_visitors(db: Session):
    """Очищает все записи о посетителях."""
    db.query(Visitor).delete()
    db.commit()