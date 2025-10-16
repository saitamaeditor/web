
# SaitamaEditor — Web estática para GitHub Pages

Sitio de 3 páginas para ofrecer servicios de edición de vídeo: **Inicio**, **Servicios** y **Contacto** (con botón directo a WhatsApp).

## Estructura
```
/
├─ index.html
├─ servicios.html
├─ contacto.html
└─ assets/
   ├─ style.css
   ├─ site.js
   └─ favicon.svg
```

## Publicación en GitHub Pages
1. Crea un repositorio (por ejemplo, `saitamaeditor-web`) y sube estos archivos.
2. Ve a **Settings → Pages**.
   - **Source**: *Deploy from a branch*.
   - **Branch**: `main` y carpeta `/ (root)`.
3. Guarda. Tu web quedará en:
   - **User site**: `https://TU-USUARIO.github.io/`
   - **Project site**: `https://TU-USUARIO.github.io/saitamaeditor-web/`

> Los enlaces son **relativos**, así que funcionará en ambos casos.

## Cambiar el número de WhatsApp
Edita el archivo `contacto.html` y sustituye en el enlace:
```
https://wa.me/34600111222?text=Hola%20SaitamaEditor%2C%20quiero%20informaci%C3%B3n%20sobre%20un%20encargo
```
por tu número real en formato internacional (sin `+`), por ejemplo `346XXXXXXXX`.

## Vista previa local
Abre `index.html` en tu navegador. No requiere servidor ni build.

## Consejos extra
- Añade un archivo vacío llamado `.nojekyll` en la raíz si usas carpetas o nombres que Jekyll podría ignorar.
- Para un dominio propio, configura **Settings → Pages → Custom domain** y apunta tu DNS con un registro **CNAME**.
- Optimiza imágenes y sube tu propio favicon en `assets/favicon.svg` si lo deseas.
