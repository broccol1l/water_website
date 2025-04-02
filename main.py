import logging

import secrets

from fastapi import FastAPI, Request, Response, Depends, HTTPException, Form, Cookie


from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.middleware.cors import CORSMiddleware

from fastapi.templating import Jinja2Templates

from fastapi.staticfiles import StaticFiles

from product_api.product import product_router, get_all_products_api
from product_photo_api.product_photo import product_photo_router
from accessory_api.accessory import accessory_router, get_all_accessories_api
from accessory_photo_api.accessory_photo import accessory_photo_router

from db import Base, engine

from starlette.middleware.base import BaseHTTPMiddleware

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

active_sessions = set()


USERNAME = "admin"
PASSWORD = "password123"

class DocsProtectionMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        if request.url.path == "/docs":
            session_token = request.cookies.get("session_token")
            if not session_token or session_token not in active_sessions:
                return RedirectResponse(url="/serobadmin")

        response = await call_next(request)
        return response

app.add_middleware(DocsProtectionMiddleware)

@app.get("/serobadmin", response_class=HTMLResponse)
async def login_page(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.post("/serobadmin")
async def login(username: str = Form(...), password: str = Form(...)):
    if username != USERNAME or password != PASSWORD:
        raise HTTPException(status_code=401, detail="Incorrect username or password")

    session_token = secrets.token_hex(16)
    active_sessions.add(session_token)

    response = RedirectResponse(url="/docs", status_code=303)
    response.set_cookie(
        key="session_token",
        value=session_token,
        httponly=True,
        max_age=30*24*60*60
    )

    return response


@app.get("/logout")
async def logout(response: Response, session_token: str = Cookie(None)):
    if session_token and session_token in active_sessions:
        active_sessions.remove(session_token)

    response = RedirectResponse(url="/serobadmin")
    response.delete_cookie(key="session_token")

    return response

@app.get("/docs", response_class=HTMLResponse)
async def custom_swagger_ui_html(request: Request):
    return templates.TemplateResponse("swagger.html", {"request": request})

@app.get("/", response_class=RedirectResponse)
async def root():
    return RedirectResponse(url="/index")


@app.get("/index", response_class=HTMLResponse)
async def index(request: Request):
    products = await get_all_products_api()
    accessories = await get_all_accessories_api()

    return templates.TemplateResponse(
        "index.html",
        {"request": request, "products": products, "accessories": accessories}
    )




