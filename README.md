# Portfolio de Díaz

Portfolio personal de **Daniel Díaz Canosa** — estudiante de Desarrollo de Aplicaciones Web (DAW). Sitio estático hecho con HTML5, CSS3 y JavaScript vanilla: **sin frameworks, sin librerías y sin build**.

**En vivo:** https://soydiaz.pages.dev/
**Repositorio:** https://github.com/diaz827/portafolio

---

## Características

### i18n en 3 idiomas (ES · EN · PT)
- Todo el texto de la web está externalizado con claves `data-i18n` (98 nodos traducidos, ~90 claves únicas).
- Los diccionarios de traducción viven en `script/script.js` (3 objetos: ES, EN y PT).
- Botón de idioma en la cabecera que **cicla español → inglés → portugués** (con bandera).
- El idioma elegido se guarda en `localStorage` (`lang`) y se sincroniza entre pestañas abiertas (`storage` event).
- El idioma también cambia el `lang` del `<html>` y el botón de descarga del currículum.

### Tema oscuro / claro
- Tema **oscuro por defecto** con botón de alternar en la cabecera (`aria-pressed`).
- Se aplica con el atributo `data-theme="dark|light"` en `<html>` y variables CSS (`--bg`, `--text`, `--accent`…).
- Persistencia en `localStorage` (`theme`) y sincronización del `meta theme-color` con el navegador.

### Filtros de proyectos
- Tres filtros: **Todos · Web · Java**, con `aria-pressed` para accesibilidad.
- Las 5 tarjetas se muestran/ocultan sin recargar; el último proyecto impar se estira a todo el ancho (imagen a la izquierda, información a la derecha).

### Accesibilidad (a11y) y HTML5 semántico
- Estructura semántica: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
- Foco visible con `:focus-visible` (web y minijuego).
- Menú móvil accesible: `aria-controls`, cierre con `Escape` o clic fuera, estado al pasar a escritorio.
- Animaciones desactivadas con `prefers-reduced-motion` y contenido visible sin JS mediante `<noscript>`.

### SEO y redes sociales
- Open Graph + Twitter Card, canonical, `robots.txt` y `sitemap.xml`.
- Meta description propias en la portada y en la página del juego.

### Formulario de contacto
- Servido por [FormSubmit](https://formsubmit.co) — **sin backend propio ni registro**.
- Endpoint enmascarado (tu correo no aparece en el HTML) + campo oculto antispam (`_honey`).
- Traducido a los 3 idiomas y con redirección a la portada tras enviar.

### Minijuego
- Flappy Bird propio en `pages/juego.html`: CSS y JS **inline** (página autónoma, no hereda `styles.css` ni `script.js`), controles táctiles, teclado y botón, velocidad adaptativa según tamaño de pantalla.

---

## Estructura

```
portfolio-diaz/
├── index.html              # Estructura y contenido de la portada
├── stiles/
│   └── styles.css          # Diseño responsive, temas, animaciones y componentes
├── script/
│   └── script.js           # Menú móvil, scroll reveal, i18n (3 idiomas), tema y filtros
├── pages/
│   └── juego.html          # Minijuego autónomo (CSS/JS inline)
├── img/                    # Fotos, imágenes de proyectos y favicon
├── archivos/               # PDFs descargables
│   ├── CV_Daniel_Diaz.pdf              # Currículum
│   ├── certificadoCredits.pdf          # Certificado Credits
│   ├── diplomaCamaraComercio.pdf       # Diploma Cámara de Comercio
│   ├── FormacionDixital.pdf            # Formación Dixital
│   └── Generative_AI_Foundations.pdf   # Generative AI Foundations
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## Ejecución en local

No hay dependencias ni build. Dos opciones:

1. **Directa:** abre `index.html` con doble clic en el navegador.
2. **Con servidor local** (recomendado para probar con las mismas condiciones que en producción):

```bash
git clone https://github.com/diaz827/portafolio.git
cd portafolio

# con Python
python -m http.server 8000
# o con Node
npx serve .
```

Luego entra en http://localhost:8000

---

## Despliegue

- Plataforma: **[Cloudflare Pages](https://pages.cloudflare.com/)**
- Origen: rama `main` del repositorio, con **deploy automático en cada push** (build command: ninguno, output: raíz del repo).
- Producción: **https://soydiaz.pages.dev/**

---

## Cómo añadir una traducción

1. Añade el nodo al HTML con la clave: `<h2 data-i18n="mi.clave">Texto por defecto</h2>`
2. Registra `mi.clave` en los **tres** diccionarios de `script/script.js` (ES, EN y PT).
3. Si es un atributo (p. ej. `aria-label`): `data-i18n-attr="aria-label|mi.clave"`.

---

## Stack

HTML5 · CSS3 · JavaScript (ES6+) — 100% vanilla

---

## Contacto

- Email: [canosadiaz6@gmail.com](mailto:canosadiaz6@gmail.com)
- LinkedIn: [dani-díaz-canosa](https://www.linkedin.com/in/dani-d%C3%ADaz-canosa-4465793b2/)
- GitHub: [diaz827](https://github.com/diaz827)
