# Svelte SSR
Want a deep dive into Svelte SSR *without SvelteKit* ?

FastAPI (+ PHP) bindings to Svelte. Both using InertiaJS and Okami-forgive-what SSR script.

## InertiaJS
Just some FastAPI bindings from inspired the Django port. 

## SSR

First time init :
```
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt

cd ssr_cache/svelte
pnpm i
```

Build the template cache (SSR) : 

```
cd ssr_cache/svelte
pnpm run cache
```

Build the frontend JS (hydratation) : 

```
cd ssr_cache/svelte
pnpm run build
```

Run the FastAPI :
Build the template cache (SSR) : 

```
cd ~/path/to/this-project
python -m uvicorn main:app --reload
```

And then open http://127.0.0.1:8000/ssr/

