from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException, status

from product_api.product import product_router
from product_photo_api.product_photo import product_photo_router
from accessory_api.accessory import accessory_router
from accessory_photo_api.accessory_photo import accessory_photo_router

from db import Base, engine

Base.metadata.create_all(engine)
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(product_router)
app.include_router(product_photo_router)
app.include_router(accessory_router)
app.include_router(accessory_photo_router)

