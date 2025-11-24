# TAMD Group Web

Proyecto React + TypeScript + Vite con Tailwind v4. Se implementa un sistema de colores centralizado y tokens de Tailwind para mantener estilos consistentes en todas las secciones.

## Stack
- React `^19`
- Vite `^7`
- Tailwind CSS `^4`
- TypeScript `~5.8`

## Inicio rápido
1. Instalar dependencias: `npm install`
2. Desarrollo: `npm run dev` → abre `http://localhost:5173` (o el puerto disponible)
3. Build: `npm run build`
4. Preview de build: `npm run preview`

## Sistema de colores
Los colores base se definen como variables CSS en `src/theme/colors.css`:
- `--color-bg`, `--color-text`, `--color-muted`, `--color-border`
- `--color-overlay`
- `--gradient-start`, `--gradient-end`
- `--surface-1`, `--surface-2`, `--surface-3`
- `--brand-primary` (dinámico por empresa)

Estos se exponen como tokens de Tailwind en `tailwind.config.js` (`theme.extend.colors`):
- `bg`, `text`, `muted`, `border`, `overlay`
- `gradient.start`, `gradient.end`
- `surface.1`, `surface.2`, `surface.3`
- `brand.primary`

### Uso en componentes
- Fondo: `bg-bg`
- Texto: `text-text` y `text-muted`
- Borde: `border-border`
- Overlay: `bg-overlay`
- Superficies: `bg-surface-1`, `bg-surface-2`, `bg-surface-3`
- Gradientes: `bg-gradient-to-br from-gradient-start via-bg to-gradient-end`
- Marca: `text-brand-primary`, `bg-brand-primary`, `ring-brand-primary`

### Marca dinámica por empresa
En la sección Empresas, se enlaza el color de marca de cada empresa a `--brand-primary` y se consume mediante tokens de Tailwind:

```tsx
<section
  className="bg-gradient-to-br from-gradient-start via-bg to-gradient-end"
  style={{ '--brand-primary': currentCompany.color } as React.CSSProperties}
>
  {/* ... usar bg-brand-primary, text-brand-primary, ring-brand-primary ... */}
</section>
```

## Secciones actualizadas
- Hero: video arriba, carrusel y botones en barra inferior; usa `bg-bg`, `bg-overlay`, y gradientes con `from-bg`.
- Empresas: fondos, textos, botones y estados (hover/selección) usan tokens (`bg-surface-*`, `text-*`, `ring-brand-primary`, `from-gradient-start/to-gradient-end`).

## Notas sobre video del Hero
- El asset actual es `src/assets/TAMDGroup.mov`. Para mayor compatibilidad, se recomienda convertir a `MP4 (H.264)` o `WebM`.
- Sugerido: `poster` con `src/assets/TAMD-GROUP-LOGO-BLANCO.png`, `preload="metadata"`, `playsInline`, `muted`, `autoPlay`, `loop`.

## Convenciones
- Tailwind-first: usar utilidades de Tailwind y tokens. Los valores arbitrarios (`bg-[...]`) sólo si es imprescindible.
- Para nuevos colores, añadir la variable en `src/theme/colors.css` y mapearla como token en `tailwind.config.js`.
- Evitar estilos inline salvo para setear `--brand-primary` dinámico.

## Solución de problemas
- Error de navegador `net::ERR_ABORTED` al cargar un módulo suele indicar fallo de compilación. Verificar interpolaciones en JSX (por ejemplo, `key={`first-${index}`}`) y rutas de assets.

## Scripts
- `npm run dev`: servidor de desarrollo (Vite)
- `npm run build`: compila producción
- `npm run preview`: sirve el build para revisar
