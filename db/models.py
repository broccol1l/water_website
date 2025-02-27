from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from db import Base

class Visitor(Base):
    __tablename__ = "visitors"

    id = Column(Integer, autoincrement=True, primary_key=True)
    ip_address = Column(String, unique=True, nullable=False)
    visit_count = Column(Integer, default=1)
    last_visit = Column(DateTime, default=func.now(), onupdate=func.now())

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, autoincrement=True, primary_key=True)
    product_name = Column(String, nullable=False)

    product_photos_fk = relationship("ProductPhoto", cascade="all, delete-orphan", lazy="subquery")


class ProductPhoto(Base):
    __tablename__ = "product_photos"

    id = Column(Integer, autoincrement=True, primary_key=True)
    product_id = Column(Integer, ForeignKey("products.id", ondelete="CASCADE"))  # Связь с товаром
    product_photo_url = Column(String, nullable=False)

    product_fk = relationship(Product, lazy="subquery")

class Accessory(Base):
    __tablename__ = "accessories"

    id = Column(Integer, autoincrement=True, primary_key=True)
    accessory_name = Column(String, nullable=False)

    accessory_photos_fk = relationship("AccessoryPhoto", cascade="all, delete-orphan", lazy="subquery")

class AccessoryPhoto(Base):
    __tablename__ = "accessory_photos"

    id = Column(Integer, autoincrement=True, primary_key=True)
    accessory_id = Column(Integer, ForeignKey("accessories.id", ondelete="CASCADE"))  # Связь с товаром
    accessory_photo_url = Column(String, nullable=False)

    accessory_fk = relationship(Accessory, lazy="subquery")

