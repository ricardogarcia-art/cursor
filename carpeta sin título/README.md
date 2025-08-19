# Limon.website — Landing Page lista para desplegar

Sitio estático minimalista y moderno, sin dependencias ni build. Incluye: Hero, Servicios (Landing Pages, Apps, Herramientas), Beneficios, CTA y Contacto, además de `gracias.html` para confirmación.

## Archivos

- `index.html`: página principal.
- `styles.css`: estilos globales y animaciones.
- `script.js`: interacciones y envío del formulario vía `fetch`.
- `gracias.html`: confirmación del formulario.
- `README.md`: este documento.

## Despliegue inmediato (sin editar nada)

- Vercel: crea un nuevo proyecto e importa esta carpeta (o el repo). Framework: None / Other. Build command: none. Output: raíz del proyecto.
- Netlify: botón “Add new site” → “Deploy manually” y arrastra esta carpeta; o conecta el repo (Build command: none, Publish directory: raíz).

No es necesario modificar archivos antes de subir.

## Edición en línea post-despliegue (Vercel/Netlify)

1) Abre tu proyecto en el panel de Vercel o Netlify.
2) Entra al editor de archivos en línea (integración del repositorio o la UI de edición que provea tu plataforma).
3) Busca y reemplaza los siguientes marcadores de posición:

- WhatsApp: en `index.html`, enlaces con `https://api.whatsapp.com/send?phone=TU_NUMERO_DE_TELEFONO`. Sustituye `TU_NUMERO_DE_TELEFONO` por tu número en formato internacional, sin `+` ni espacios. Ej: `5491122334455`.
- Formulario: en `index.html`, atributo `action` del formulario: `https://submit-form.com/TU_ENDPOINT_AQUI`. Cambia `TU_ENDPOINT_AQUI` por el ID/slug de tu servicio (Formspark/Formbold/Submit-Form, etc.).
- Facebook: en el `footer` de `index.html`, `https://www.facebook.com/TU_NOMBRE_DE_USUARIO`. Cambia `TU_NOMBRE_DE_USUARIO` por tu usuario o página.

4) Guarda los cambios en el editor. La plataforma hará el deploy automático y verás el sitio actualizado en minutos.

## Personalización adicional (opcional)

- Colores: variables en `styles.css` dentro de `:root` (`--accent-*`, `--bg-*`).
- Tipografía: cambia el `<link>` de Google Fonts en `index.html`.
- Textos y secciones: edita títulos y párrafos en `index.html`. Puedes duplicar tarjetas `article` en Servicios/Beneficios.

## Prueba local (opcional)

Puedes abrir `index.html` directamente en el navegador o servirlo estáticamente:

```bash
# Python 3
python3 -m http.server 5173

# Node (npx)
npx serve . -l 5173 --single
```

Visita `http://localhost:5173`.

## Notas de accesibilidad y rendimiento

- Respeta `prefers-reduced-motion` para limitar animaciones.
- Diseño responsive (revisa media queries en `styles.css`).

## Soporte

Si necesitas ayuda para personalizar o desplegar, edita este README con tus datos de contacto o crea un issue en tu repositorio.


