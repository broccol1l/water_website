# Backend (FastAPI)
FROM python:3.13-slim AS backend

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

EXPOSE 8000
CMD ["python", "main.py"]

# Frontend (Nginx)
FROM nginx:stable-alpine AS frontend

WORKDIR /usr/share/nginx/html
COPY templates/index.html .
COPY static/styles/ styles/
COPY static/scripts/ scripts/
COPY static/images/ images/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
