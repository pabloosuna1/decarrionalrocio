# Hermandad del Rocío de Carrión de los Céspedes

Base web informativa en Angular 22, preparada como aplicación estática de frontend. El contenido institucional y las fechas son espacios editables para completar con información verificada de la Hermandad.

## Requisitos

- Node.js 22.22.3 o posterior compatible con Angular 22.
- npm.

## Desarrollo

```bash
npm install
npm start
```

## Compilación

```bash
npm run build
```

El resultado de producción queda en `dist/hermandad-rocio-carrion/browser`. Ese directorio se puede publicar como sitio estático en Cloudflare Pages.

## Personalización

- Edita el contenido y los enlaces en `src/app/app.component.ts`.
- Ajusta colores, tipografía y distribución en `src/app/app.component.css` y `src/styles.css`.
- Sustituye el escudo ilustrativo del encabezado por el archivo oficial cuando esté disponible.
