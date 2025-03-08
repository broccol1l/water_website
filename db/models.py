from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from db import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, autoincrement=True, primary_key=True)
    product_name = Column(String, nullable=False)
    product_description = Column(String, nullable=True)

    photos = relationship("ProductPhoto", back_populates="product", cascade="all, delete-orphan")


class ProductPhoto(Base):
    __tablename__ = "product_photos"

    id = Column(Integer, autoincrement=True, primary_key=True)
    product_id = Column(Integer, ForeignKey("products.id", ondelete="CASCADE"))  # Связь с товаром
    product_photo_url = Column(String, nullable=False)

    product = relationship("Product", back_populates="photos", lazy="joined")


class Accessory(Base):
    __tablename__ = "accessories"

    id = Column(Integer, autoincrement=True, primary_key=True)
    accessory_name = Column(String, nullable=False)
    accessory_description = Column(String, nullable=True)

    photos = relationship("AccessoryPhoto", back_populates="accessory", cascade="all, delete-orphan")


class AccessoryPhoto(Base):
    __tablename__ = "accessory_photos"

    id = Column(Integer, autoincrement=True, primary_key=True)
    accessory_id = Column(Integer, ForeignKey("accessories.id", ondelete="CASCADE"))  # Связь с товаром
    accessory_photo_url = Column(String, nullable=False)

    accessory = relationship("Accessory", back_populates="photos", lazy="joined")

