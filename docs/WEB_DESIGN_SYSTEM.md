# WEB_DESIGN_SYSTEM — BASILISCO (Futuristic Computing Premium)

Fecha: 2026-11-13  
Estado: FASE 1 — Fundación visual (en implementación)

## 1. Dirección visual

- **Concepto:** Futuristic Computing Premium, developer-first, técnico y sobrio.
- **Principios:** superficies profundas, contraste alto legible, acento esmeralda controlado, código como protagonista, microinteracciones discretas.
- **Prohibiciones respetadas:** sin estética dashboard, sin gradientes excesivos, sin saturar glow, sin animaciones pesadas.

## 2. Paleta oficial (tokens)

| Token | Valor | Uso |
|---|---|---|
| `--bg` / Obsidiana | `#080C0B` | Fondo principal |
| `--surface` | `#101A16` | Tarjetas, paneles, elevaciones |
| `--surface-2` | `#16211D` | Superficies secundarias/hover |
| `--border` | `#22312B` | Bordes sutiles |
| `--text` | `#EAF4EF` | Texto principal |
| `--text-muted` | `#A8B8B1` | Texto secundario |
| `--accent` / Esmeralda | `#00C987` | Acento principal, enlaces activos, CTAs |
| `--accent-light` | `#55E8B1` | Hover/focus glow sutil, estados |
| `--accent-soft` | `rgba(0,201,135,.14)` | Fondos/acentos suaves |
| `--secondary` / Champagne | `#D8C49A` | Acentos secundarios, metadatos premium |
| `--code-bg` | `#0B1210` | Bloques de código |
| `--success/warn/info` | derivados sobrios | Estados (sin depender solo de color) |

> Se mantiene soporte de tema claro/oscuro solo si resulta coherente; el modo oscuro premium es la identidad base. Tokens deben permitir ambos esquemas sin perder contraste.

## 3. Tipografía

- **Display/UI:** Sora / Inter (según disponibilidad actual) para headings y navegación.
- **Cuerpo:** Inter, sistema sans-serif fallback.
- **Código:** JetBrains Mono, ui-monospace fallback.
- Escala fluida para hero, h1-h3, body, small/meta, code.

## 4. Espaciado, radios y sombras

- Escala de espaciado base 4px (`--space-1..n`).
- Radios: `8/12/16/24` para controles, tarjetas y contenedores destacados.
- Sombras profundas y discretas; glow esmeralda solo en foco/hover relevante.
- Bordes de 1px con contraste suficiente sobre obsidiana/superficie.

## 5. Componentes base

- **Layout:** contenedor máximo, grid responsive, secciones con ritmo vertical consistente.
- **Navbar:** sticky, fondo translúcido oscuro, estado activo claro, menú accesible móvil.
- **Footer:** enlaces útiles, estado del proyecto, recursos, nota legal/contexto.
- **Botones:** primario (esmeralda sólido), secundario (outline/surface), ghost.
- **Badges/Estado:** implementado, en desarrollo, experimental, pendiente, planificado (texto + icono/forma, no solo color).
- **Cards:** superficie profunda, borde sutil, hover mínimo.
- **Code blocks:** ventana/título opcional, copiar, sintaxis legible, anotaciones.
- **Callouts:** info/warn/experimental con jerarquía clara.
- **Docs UI:** TOC, búsqueda, breadcrumbs/contexto (según implementación), tablas legibles.

## 6. Accesibilidad y movimiento

- Contraste WCAG AA objetivo para texto y controles.
- Foco visible en todos los interactivos.
- Navegación por teclado completa.
- `prefers-reduced-motion: reduce` para desactivar animaciones no esenciales.
- Semántica HTML, landmarks, labels ARIA solo cuando sea necesario.

## 7. Rendimiento

- Astro SSG, cero hidratación por defecto.
- JS solo para funcionalidades necesarias (tema, copiar, búsqueda/progreso docs, menú móvil si aplica).
- Fuentes optimizadas (evaluar self-host/local en fases posteriores).
- Imágenes con dimensiones y lazy loading cuando corresponda.

## 8. Implementación prevista en FASE 1

1. Refactor de tokens en `src/styles/global.css` (o modularización progresiva).
2. Actualización de `Base.astro` (navbar/footer/metadatos base).
3. Ajuste de componentes (`Anotado`, `Codigo`, `Estado`) al nuevo sistema.
4. Revisión responsive base de layout y tipografía.
5. Validación visual inicial en páginas existentes.

## 9. Notas

- Los cambios deben preservar el contenido y rutas actuales mientras evoluciona la IA.
- Cualquier desviación por falta de evidencia técnica se documentará en informes de implementación/QA.
