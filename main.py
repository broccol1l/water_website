import logging
import re

from fastapi import FastAPI, Request, Response

from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.middleware.cors import CORSMiddleware

from fastapi.templating import Jinja2Templates

from fastapi.staticfiles import StaticFiles

from product_api.product import product_router, get_all_products_api
from product_photo_api.product_photo import product_photo_router
from accessory_api.accessory import accessory_router, get_all_accessories_api
from accessory_photo_api.accessory_photo import accessory_photo_router

from db import Base, engine

Base.metadata.create_all(engine)
app = FastAPI()

templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/db", StaticFiles(directory="db"), name="db")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
logger = logging.getLogger("uvicorn.access")


class EndpointFilter(logging.Filter):
    def filter(self, record):
        return "/hybridaction/zybTrackerStatisticsAction" not in record.getMessage()


logger.addFilter(EndpointFilter())


@app.get("/hybridaction/zybTrackerStatisticsAction")
async def ignored_endpoint():
    return Response(status_code=404)


app.include_router(product_router)
app.include_router(product_photo_router)
app.include_router(accessory_router)
app.include_router(accessory_photo_router)


@app.get("/", response_class=RedirectResponse)
async def root():
    return RedirectResponse(url="/index")


@app.get("/index", response_class=HTMLResponse)
async def index(request: Request):
    products = await get_all_products_api()
    accessories = await get_all_accessories_api()

    # Filter out only water products and sort them
    water_products = []
    other_products = []

    for product in products:
        product_name = product.get('product_name_ru', '')
        if product_name.startswith('Вода '):
            # Use regex to extract the volume
            match = re.search(r'Вода (\d+[.,]?\d*) л', product_name)
            if match:
                volume_str = match.group(1).replace(',', '.')
                try:
                    volume = float(volume_str)
                    product['volume'] = volume  # Store the volume for sorting
                    water_products.append(product)
                    continue
                except ValueError:
                    pass
        # If not a water product or couldn't extract volume
        other_products.append(product)

    # Sort water products by volume
    sorted_water_products = sorted(water_products, key=lambda x: x.get('volume', float('inf')))

    # Combine sorted water products with other products
    sorted_products = sorted_water_products + other_products

    return templates.TemplateResponse(
        "index.html",
        {"request": request, "products": sorted_products, "accessories": accessories}
    )




