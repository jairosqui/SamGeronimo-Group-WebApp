# SamGeronimo Group LLC — Sitio Web Corporativo

Sitio corporativo multipágina para **SamGeronimo Group LLC**, firma de consultoría
en estrategia y operaciones de negocio. Construido con Next.js (App Router),
Tailwind CSS y Framer Motion, bilingüe (ES/EN, carga por defecto en español).

## Stack

- Next.js 14 (App Router) + React 18
- Tailwind CSS
- Framer Motion (animaciones de scroll, stagger, hover, transición de página)
- `next/image` con `images.remotePatterns` para `images.unsplash.com`

## Instalación local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Estructura

```
app/            rutas (home, about, services, insights, faq, contact) + layout + globals.css
components/     Header, Footer, Hero, Logo, secciones reutilizables, formulario de contacto
components/pages/  contenido cliente de cada ruta (usa el contexto de idioma)
context/        LanguageContext (ES/EN, persistencia en sessionStorage/localStorage)
data/           translations.js — ÚNICA fuente de todo el copy del sitio (claves es/en)
public/         assets estáticos
```

Todo el texto del sitio vive en `data/translations.js`. Para editar cualquier
copy (títulos, botones, servicios, preguntas frecuentes) basta con modificar
ese archivo — ningún texto está escrito directamente en los componentes.

## Formulario de contacto (reCAPTCHA + Web3Forms)

El formulario usa reCAPTCHA v2 (checkbox) para verificación server-side y
[Web3Forms](https://web3forms.com) como backend de envío. Antes de publicar:

1. Reemplaza `YOUR_WEB3FORMS_ACCESS_KEY` en `components/ContactForm.jsx` con
   tu access key real de Web3Forms (es una clave pública, diseñada para ir en
   el cliente).
2. Configura las siguientes variables de entorno en Vercel (Project Settings →
   Environment Variables):

   | Variable | Prefijo | Secreta |
   |---|---|---|
   | `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | `NEXT_PUBLIC_` | No |
   | `RECAPTCHA_SECRET_KEY` | ninguno | **Sí — nunca uses NEXT_PUBLIC_ en esta** |

Si no se configura reCAPTCHA, el formulario seguirá renderizándose pero el
checkbox no será válido — configura las llaves antes de publicar el sitio.

## Imágenes

Mientras no existan fotos propias de la firma, el sitio usa fotografía libre
de Unsplash (licencia gratuita, verificada) servida vía `next/image`. Sustituye
las URLs en `components/Hero.jsx`, `components/Sections.jsx` y
`components/PageBand.jsx` (o los usos dentro de `app/*/page.jsx`) por fotografía
propia cuando esté disponible, y actualiza `next.config.mjs` si cambias de
dominio de imágenes.

## Despliegue: GitHub → Vercel

1. Sube este repositorio a GitHub (rama `main`).
2. En Vercel: **Add New Project** → importa el repo.
3. Framework Preset debe autodetectarse como **Next.js** — no sobrescribas
   Build Command ni Output Directory.
4. Confirma que el **Root Directory** apunte a la carpeta que contiene
   `package.json`.
5. Agrega las variables de entorno de reCAPTCHA si vas a usarlo (ver arriba).
6. Deploy.

`npm run build` se verificó localmente sin errores antes de la entrega.
