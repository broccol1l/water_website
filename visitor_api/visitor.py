from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from db import get_db
from db.visitorservice import track_visitor, get_unique_visitor_count, clear_visitors

visitor_router = APIRouter()


@visitor_router.get("/track-visitor")
async def track_visitor_endpoint(request: Request, db: Session = Depends(get_db)):
    ip_address = request.client.host  # Получаем IP
    track_visitor(db, ip_address)
    return {"message": "Visitor tracked successfully"}


@visitor_router.get("/visitor-count")
async def visitor_count(db: Session = Depends(get_db)):
    count = get_unique_visitor_count(db)
    return {"unique_visitors": count}


@visitor_router.delete("/clear-visitors")
async def clear_visitors_endpoint(db: Session = Depends(get_db)):
    clear_visitors(db)
    return {"message": "All visitor records have been deleted"}