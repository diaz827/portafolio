# Prompt: generar un portfolio web profesional a partir de un Curriculum Vitae (cualquier sector)

## Instrucción principal

A continuación te entrego mi Curriculum Vitae (al final de este documento, entre `<<< INICIO CV >>>` y `<<< FIN CV >>>`). Trabaja en **dos fases**:

- **Fase 1 — Web demo:** con el CV solo, genera YA una primera versión completa del portfolio (código íntegro) usando todo lo que puedas extraer. Donde falte dato, inventa uno verosímil, ponle un comentario `<!-- EDITAR: ... -->` y recógelo en la entrevista de la Fase 2.
- **Fase 2 — Entrevista por apartados:** después de entregar la demo, ve preguntando **apartado por apartado** (identidad, sobre mí, proyectos, experiencia, formación…) solo las cosas que **no puedas sacar del CV** o que necesiten decisión. Una sección de preguntas cada vez, con opciones propuestas; espera mi respuesta antes de continuar y luego reescribe los archivos afectados.
- No hagas preguntas cuya respuesta ya esté en el CV. No entregues código a medias ni resumido: sin `...`, sin bloques omitidos. Todo debe poder copiarse y ejecutarse.

---

## 1. Objetivo y tono (válido para cualquier sector)

- Portfolio personal para **cualquier perfil profesional**: técnico, creativo, sanitario, comercial, hostelería, logística, administración, oposición, artesanal, deportivo… El CV manda.
- Tono: cercano, directo y profesional. Nada corporativo frío, nada humilde excesivo. Mostrar motivación, capacidades y personalidad.
- El CV es la **única fuente de verdad inicial**: experiencia, formación, certificaciones, idiomas, habilidades y contacto se extraen de él y se reorganizan en secciones de portfolio.

## 2. Qué extraer automáticamente del CV (sin preguntar)

| Dato del CV | Sección del portfolio |
|---|---|
| Nombre y apellidos | Título, marca de la cabecera, footer, `title`/OG/JSON-LD |
| Puesto actual / objetivo profesional | Hero (subtítulo y titular) |
| Teléfono, email, ciudad, LinkedIn/GitHub/web | Contacto + iconos del hero |
| Puestos de trabajo (empresa, fechas, lugar, tareas) | Experiencia (timeline) |
| Formación y centros | Educación (timeline) |
| Cursos, certificados, carnés, idiomas | Certificaciones / Idiomas |
| Habilidades técnicas y blandas | Stack o "Habilidades" + ticker |
| Proyectos, obras, trabajos destacados | Proyectos (tarjetas) |
| Datos personales con gancho (viajes, deporte, hobbies) | Sobre mí |

## 3. Fase 1 — Web demo (generar solo con el CV)

- Entrega el **portfolio completo y funcional** con las secciones de la §5, usando los datos del CV. Lo que no esté:
  - Inventa contenido coherente con el sector y márcalo: `<!-- EDITAR: confirmar -->`.
  - Añade un bloque final "Pendientes de la entrevista" con la lista de huecos detectados (será el borrador de la Fase 2).

## 4. Fase 2 — Entrevista por apartados (preguntar lo que falte)

Pregunta **de uno en uno, en este orden**, agrupando como mucho un apartado por mensaje. Formato de cada bloque: primero "Lo que he sacado del CV" (resumen en 3-4 bullets), después "Lo que me falta" (preguntas concretas numeradas y con opciones A/B/C cuando haya elección). Al recibir mis respuestas, reescribe solo los archivos afectados y pasa al siguiente apartado.

**A. Identidad y objetivo (hero)**
1. ¿Cómo quieres que aparezcas? (p. ej. "Técnico de mantenimiento", "Diseñadora gráfica", "Estudiante de DAW"…)
2. ¿Disponibilidad real? (fechas, tipo de contrato: prácticas, freelance, fijo, temporal…)
3. ¿Ciudad y disposición a moverte / teletrabajo?
4. ¿Frase de gancho de 1 línea para el titular?

**B. Sobre mí**
5. ¿Qué 2-3 datos personales quieres destacar que NO estén en el CV (hobby, historia, curiosidad)?
6. ¿Qué te hace diferente en tu sector? (una frase)

**C. Portafolio / proyectos** *(si el CV no trae proyectos)*
7. ¿Qué trabajos, prácticas, piezas o casos puedes enseñar? (aunque sean de clase, voluntarios o personales)
8. ¿Tienen enlace vivo (web, vídeo, PDF, repositorio) o solo imagen?
9. Categorías de los filtros: ¿qué grupos tienen sentido para tu sector? (p. ej. Web/Java, o Interiorismo/Reformas, o Cardiología/Urgencias…)

**D. Experiencia**
10. ¿Quieres mostrar también los trabajos más antiguos o solo los 3-4 últimos?
11. ¿Alguna responsabilidad o logro medible que añadir? (nº de personas, %, clientes…)

**E. Formación y certificaciones**
12. ¿Qué certificaciones enlazar con PDF/verificación oficial y cuáles solo mencionar?
13. ¿Añadimos idiomas con nivel (marco europeo)?

**F. Habilidades**
14. ¿Cómo agrupamos? (p. ej. Técnicas / Programas / Idiomas / Blandas) y cuáles van en el ticker animado.

**G. Contacto**
15. ¿Qué datos publicamos realmente? (¿teléfono también o solo email?)
16. ¿Formulario de contacto sí/no? Si sí: activar FormSubmit con mi correo (explicar el paso del hash que llega por correo).
17. ¿Añadimos botón de descarga del CV en PDF? (ruta `archivos/CV_...pdf`)

**H. Diseño y extras**
18. ¿Tema oscuro por defecto (recomendado) o claro?
19. ¿Idiomas del sitio? (1 solo / 2 / 3 — si son ≥2 se monta el sistema i18n completo)
20. ¿Foto tuya disponible? (nombre de archivo y carpeta `img/`)
21. ¿Sección extra deseada? (testimonios, precios, galería, blog, minijuego, timeline de vida…)

**I. Publicación**
22. ¿Dominio final (pages.dev, GitHub Pages, propio)? → para canonical/OG/sitemap.

Reglas de la entrevista: **no repitas preguntas ya respondidas**, si un dato da igual para ti, elige tú y dilo; máximo 6-8 preguntas por mensaje; al cerrar cada apartado, muestra el diff resumido de lo que has cambiado.

## 5. Estructura de la portada (`index.html`) — secciones obligatorias

1. **Cabecera/nav**: marca a la izquierda (inicial + apellido + punto de acento), menú con las secciones que apliquen (Sobre mí, Portafolio/Proyectos, Experiencia, Formación, Habilidades, Certificaciones, Contacto), botón de idioma (si ≥2 idiomas), botón de tema oscuro/claro (sol/luna SVG) y hamburguesa en móvil. **En móvil, dentro del menú desplegable, botón "Descargar CV" a todo el ancho** (solo si hay PDF). Accesibilidad: `aria-label`, `aria-expanded`, `aria-controls`, cierre con `Escape` y clic fuera, reset al pasar a escritorio (`min-width: 901px`).
2. **Hero**: badge con punto pulsante (disponibilidad), H1 con nombre + apellido en `<em>` acento, subtítulo con el puesto objetivo, CTA (ver portafolio / contacto) + iconos circulares (email, LinkedIn…), foto circular con borde acento e indicador de scroll.
3. **Ticker**: banda animada con las palabras clave (habilidades/tecnologías del CV); copia duplicada en `aria-hidden`; pausa con `prefers-reduced-motion`.
4. **Sobre mí** (nº 01): *lead* + 2-3 párrafos con la trayectoria y personalidad; foto lateral con *glow*.
5. **Portafolio/Proyectos** (nº 02): filtros con `aria-pressed` (categorías según §4.C); tarjetas con imagen o ícono, *chips*, título, descripción y enlaces (↗ `target="_blank" rel="noopener"`). Retícula de 2 columnas en escritorio; la última impar ocupa 2 columnas (visual izq / info der); 1 columna en móvil; fondos de sección alternando.
6. **Habilidades/Stack** (nº 03): *chips* con color oficial solo si son tecnologías (`--badge-color`), si no, chips neutros agrupados por categoría; hover con elevación.
7. **Educación** (nº 04) y **Experiencia** (nº 05): *timeline* con fechas en mayúsculas color acento a la izquierda; a la derecha título, centro/empresa, `<small>` ubicación y *chips* de competencias. Fechas siempre traducidas (§6).
8. **Certificaciones/Idiomas** (nº 06): entradas con "Ver más ↗" (verificación oficial) y "Ver certificado ↗" (PDF en `archivos/`).
9. **Contacto**: titular grande con `<em>` acento ("¿Hablamos?" / "¿Construimos algo juntos?"), texto de disponibilidad, **formulario con FormSubmit** y columna derecha con foto (ancho completo, ~400px, alineada al titular), botón "Descargar CV" a todo el ancho y **botones-caja del email / GitHub / LinkedIn** (fondo *surface*, borde, radio 12px, hover naranja con elevación).
10. **Footer**: © año dinámico con *fallback* en HTML, lema y "Volver arriba ↑".

**Formulario (genérico, sin backend):**

```html
<form class="contact-form" action="https://formsubmit.co/TU_CODIGO_HASH" method="POST">
  <input type="hidden" name="_subject" value="Nuevo mensaje desde tu portfolio">
  <input type="hidden" name="_next" value="https://TU-DOMINIO/">
  <input type="hidden" name="_captcha" value="false">
  <input type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
  <!-- Nombre, Email, Mensaje (required, autocomplete, labels visibles) + botón + nota -->
</form>
```

> FormSubmit envía un correo de activación en el primer envío: hay que sustituir el email del `action` por el **hash** que indica ese correo. El `_honey` se oculta con `display:none`.

## 6. Diseño visual (mismo estilo)

- Estética **etiqueta / minimalista** con acento cálido. **Oscuro por defecto** (o según respuesta 18).
- Paleta:
  - Oscuro: fondo `#000000` con degradados radiales del acento `rgba(217,119,87,.08)` y textura *noise* (SVG inline, `opacity:.035`).
  - Claro: fondo `#FAF8F5`, superficie `#EFEBE0`, borde `#DED8CA`, texto `#2C2A29`.
  - Acento `#D97757` (hover `#C5654A` claro / `#E58F70` oscuro). Texto tenue `#A9A29B` / `#6B655F`. **Contraste AA siempre.**
- Tipografías Google Fonts (`display=swap` + `preconnect`): titulares **Space Grotesk** 700 con `letter-spacing:-.045em` y `<em>` en acento; cuerpo **DM Sans**.
- Titulares enormes con `clamp()`, números de sección (`01`…), *badges* píldora, botones radio 12px, tarjetas borde 1px radio 22px, *glow* naranja en fotos.
- Cabecera `position:fixed` con `backdrop-filter:blur` y borde al hacer scroll (`.scrolled`).
- *Scroll-reveal* con `IntersectionObserver` + fallback; respetar `prefers-reduced-motion`.

## 7. JavaScript (`script.js`)

- Guardas con *optional chaining* / `if` en todo (`year`, header, menú…) y fallback sin `IntersectionObserver`.
- Menú móvil: toggle, `Escape`, clic fuera, cierre al pulsar enlace y reset en escritorio.
- *Reveal*: `threshold:.12`, `unobserve` al mostrar, delay escalonado (`i*45ms`, máx 250ms).
- **Tema**: `data-theme` en `<html>` + `body.light`, persistencia `localStorage("theme")`, actualiza `meta theme-color`; primera visita respetando `prefers-color-scheme`.
- **Filtros** con `aria-pressed` sincronizado (`display:none` en las ocultas).
- **i18n** *(solo si la respuesta 19 pide ≥2 idiomas)*: diccionario por idioma en `script.js` (80-100 claves), `data-i18n="clave"` con `innerHTML`, `data-i18n-attr="attr|clave"` para `aria-label`, botón que cicla idiomas con bandera, cambia `lang` de `<html>`, persiste en `localStorage("lang")` y se sincroniza entre pestañas con `storage`. **Traducirlo todo**: nav, hero, secciones, fechas ("Actualidad"→"Present", "Sept"→"Sep"…), ubicaciones, formulario y `aria-label`. Si es un solo idioma, no montar i18n.
- En el `<head>`:

```html
<noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript>
```

## 8. Accesibilidad (obligatorio)

- HTML5 semántico: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`; un solo `H1`.
- `:focus-visible{outline:2px solid var(--accent);outline-offset:3px}`.
- *Skip link* "Saltar al contenido" como primer elemento del `body`.
- Contraste WCAG AA (≥4.5:1) en **ambos** temas.
- `aria-pressed` (filtros/tema), `aria-expanded`/`aria-controls` (menú), `alt` descriptivos, SVG `aria-hidden`.
- `prefers-reduced-motion` desactiva reveals, ticker y rebotes.

## 9. SEO, redes y rendimiento

- `<title>` con palabra clave del perfil: "Nombre Apellido — [Puesto] | Portfolio".
- `meta description` <160 car., canonical, Open Graph completo (`image` ~1200×630) y Twitter Card.
- `robots.txt` con `Allow: /` + URL del sitemap; `sitemap.xml` con URLs reales.
- **JSON-LD** schema.org `Person` (`name`, `jobTitle`, `url`, `sameAs`, `email`).
- `404.html` en la **raíz** (único sitio donde Cloudflare Pages la usa): "404" gigante con el 0 en acento, botón "Volver al inicio", `noindex`.
- Imágenes con `width`/`height` (anti-CLS); hero `loading="eager" fetchpriority="high"`, resto `lazy`; fotos en WebP <100 KB; sin CSS/JS muerto; declarar `color-scheme`.

## 10. Entregable

Formato por archivo, contenido íntegro:

```text
----- FILE: index.html -----
...
----- FILE: stiles/styles.css -----
----- FILE: script/script.js -----
----- FILE: 404.html -----
----- FILE: robots.txt -----
----- FILE: sitemap.xml -----
```

Después de la Fase 1, añade la lista **"Pendientes de la entrevista"** y empieza la Fase 2 con el apartado A. Al cerrar todo, sección **"Pasos para publicar"**: abrir en local, sustituir el hash de Formsubmit, desplegar en Cloudflare Pages (build vacío, output raíz).

---

## Pega aquí el CV

```text
<<< INICIO CV >>>
[PEGA AQUÍ EL TEXTO O EL PDF DEL CURRICULUM]
<<< FIN CV >>>
```
