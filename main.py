from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from uvicorn import run
from fastapi.templating import Jinja2Templates

from inertia import InertiaMiddleware, InertiaResponse
from fastapi.middleware.gzip import GZipMiddleware

import mimetypes
mimetypes.init()

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/cache", StaticFiles(directory="ssr_cache/dist"), name="static")
templates = Jinja2Templates(directory="templates")
templates_ssr = Jinja2Templates(directory="ssr_cache")

inertia_app = FastAPI(root_path="/in")
inertia_app.add_middleware(InertiaMiddleware, asset_version=None, modules=["/static/dist/main.js"], styles=["/static/dist/style.css"])

ssr_app = FastAPI(root_path="/ssr")

@app.get("/")
async def root():
    return {"message": "Hello World"}

@inertia_app.get("/")
async def intertia_test():
    mimetypes.add_type('application/javascript', '.js')
    mimetypes.add_type('text/css', '.css')
    mimetypes.add_type('image/svg+xml', '.svg')

    return InertiaResponse({"name": "fastapi inertia_app", "count": 42}, component="Index")

@inertia_app.get("/items")
async def intertia_items():
    mimetypes.add_type('application/javascript', '.js')
    mimetypes.add_type('text/css', '.css')
    mimetypes.add_type('image/svg+xml', '.svg')

    items = [
        "one", "two", "3 !", "four"
    ]

    return InertiaResponse({"name": "Stonks Item", "items": items}, component="Items")


@ssr_app.get("/", response_class=HTMLResponse)
async def ssr_index(request: Request):
    return templates_ssr.TemplateResponse("index.html", {"request": request, "name": "jinja"})


@app.get("/items", response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse("items.html", {"request": request})

app.mount('/in', inertia_app)
app.mount('/ssr', ssr_app)

if __name__ == '__main__':
    run(app)