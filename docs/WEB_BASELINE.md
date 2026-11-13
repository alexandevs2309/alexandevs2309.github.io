# WEB_BASELINE — BASILISCO Official Website

Fecha de auditoría: 2026-11-13  
Alcance: `/home/auron/Descargas/basilisco-web` (contenedor) y `/web` (fuente Astro)

## 1. Contexto del repositorio

- El workspace contiene una carpeta principal `web/` que aloja el proyecto Astro, su propio `.git`, `node_modules/`, `dist/` y artefactos de build.
- `web/.git` indica que la fuente de verdad operativa del sitio vive dentro de `web/` (no en la raíz del workspace).
- Estado git local observado en `web/`: archivos modificados `package.json` y `package-lock.json` (sin inspeccionar diff profundo en esta fase). **No se modifican ni descartan.**
- No hay rama creada ni acciones destructivas realizadas.

## 2. Stack y configuración

- **Framework:** Astro (`astro` en dependencies: `^7.4.12` según `web/package.json`).
- **Tipo de proyecto:** ESM (`"type": "module"`), paquete privado `basilisco-web`.
- **Scripts:** `dev`, `build`, `preview`.
- **Config Astro:** `web/astro.config.mjs` exporta configuración vacía (`export default {}`).
  - Sin `site` definido.
  - Sin integraciones.
  - Sin adaptador explícito (compatible con salida estática por defecto).
  - Sin `base` configurado.
- **Content Collections:** no se detecta `src/content/` ni configuración de colecciones en código fuente.
- **TypeScript/Astro types:** presentes en `.astro/` (`content.d.ts`, `types.d.ts`, etc.) generados.

## 3. Arquitectura de código fuente (Astro)

### Páginas (`web/src/pages`)
- `index.astro` — portada/hero, propuesta de valor, features, ejemplo anotado, CTA.
- `aprender.astro` — tutorial paso a paso (8 lecciones + programa final + ejercicios).
- `documentacion.astro` — documentación extensa en una sola página con TOC lateral, búsqueda local en cliente, progreso de lectura y paginación entre secciones (script inline).
- `ejemplos.astro` — galería de ejemplos anotados por niveles.
- `acerca.astro` — información del proyecto, alcance, filosofía, comunidad.
- `404.astro` — página de error.

### Layouts (`web/src/layouts`)
- `Base.astro` — layout principal: metadatos básicos/OG, tema claro/oscuro (localStorage + prefers-color-scheme), aviso de prototipo, header/nav, footer, script inline para toggle de tema y copiado de código.

### Componentes (`web/src/components`)
- `Anotado.astro` — bloque de código con anotaciones por línea (tabla), botón copiar.
- `Codigo.astro` — bloque de código escapado con ventana y botón copiar.
- `Estado.astro` — badge de estado (`exp/dev/plan/prop`) no utilizado visiblemente en páginas principales auditadas.

### Estilos
- `web/src/styles/global.css` — sistema visual monolítico (tokens CSS, reset, tipografía, layout, componentes, docs, responsive). Importado desde `Base.astro`.
- Fuentes externas vía Google Fonts (Inter, JetBrains Mono, Sora).

## 4. Assets y contenido público

### `web/public/`
- Imágenes/branding: `mascota.png`, `mascota-espiral.png`, `dragon-esmeralda.png`, `dragon-serpiente.png`, `basil.jpeg`, `error-404.png`.
- Descarga: `basilisco-0.1.1.vsix`.
- `robots.txt`.

### Otros archivos relevantes
- `web/baselisco.bsk` (archivo suelto en raíz de proyecto web; posible muestra/artefacto).
- `web/basilisco-vscode/` (fuentes/artefactos de extensión VS Code, incluye `.vsix`).
- `web/dist/` presente con salida generada previa (`index.html`, `404.html`, páginas de rutas, `_astro/`, assets copiados).

## 5. Despliegue y CI

- Workflow: `web/.github/workflows/deploy.yml` — "Desplegar en GitHub Pages".
  - Trigger: push a `main` y `workflow_dispatch`.
  - Usa `actions/checkout`, `setup-node@v4` (Node 22, cache npm), `npm ci`, `npm run build`, `upload-pages-artifact` desde `dist`, `deploy-pages`.
  - **Observación crítica:** el workflow asume ejecución en la raíz del repo con `package.json`/`dist` en raíz. En la estructura actual del workspace, el proyecto Astro vive en `web/`, lo que sugiere posible desalineación entre ubicación del workflow y raíz del proyecto (requiere validación contra configuración real del repositorio remoto antes de cambios).
- No se detecta `CNAME` en `web/`.

## 6. Funcionalidades actuales detectadas

- Sitio estático multipágina con navegación principal: Inicio, Aprender, Documentación, Ejemplos, Acerca.
- Tema claro/oscuro con persistencia en `localStorage`.
- Documentación en página única con:
  - índice lateral por grupos,
  - filtro/búsqueda de temas en cliente,
  - barra de progreso de lectura,
  - enlaces anterior/siguiente por sección.
- Bloques de código con copiado al portapapeles.
- Contenido orientado a prototipo v0.6.0 / perfil v0.4, con distinción entre garantizado y experimental (según textos actuales).
- Descarga de extensión VS Code (`.vsix`) y referencia a CLI `basilisco`/`bsk`.

## 7. Problemas y deuda técnica inicial

1. **Estructura/repositorio:** proyecto dentro de `web/` con `.git` propio; raíz del workspace no es repo git. Puede complicar rutas de despliegue/automatización.
2. **Workflow de Pages:** comandos/artifact path no ajustados explícitamente a subdirectorio `web/` (riesgo de incompatibilidad según contexto real del repo).
3. **Astro config mínima:** sin `site`, integraciones, ni metadatos técnicos avanzados (sitemap, canonical base) configurados.
4. **CSS monolítico:** `global.css` muy grande y acoplado; difícil de escalar y mantener para un rediseño mayor.
5. **Contenido técnico denso en páginas:** documentación y tutorial embebidos como strings/literales en `.astro`; mantenimiento y reutilización limitados (sin content collections).
6. **Dependencia de fuentes externas:** Google Fonts en runtime (impacto potencial en rendimiento/privacidad según objetivos).
7. **Navegación/IA limitada:** faltan secciones solicitadas (Lenguaje, Características técnicas separada, Arquitectura, Playground, Ecosistema, Roadmap, Novedades, Comunidad/Contribución como páginas o secciones dedicadas de primer nivel).
8. **Assets/branding:** existen recursos gráficos, pero no hay evidencia de integración sistemática de favicon/emblema/icono de extensión según nueva identidad requerida.
9. **SEO técnico incompleto:** sin sitemap/robots enriquecido visible en config, sin canonical explícito en layout.
10. **Accesibilidad/QA:** requiere validación formal (contraste, teclado, foco, reduced-motion, enlaces) tras cambios; estado actual no verificado con herramientas.
11. **Posible artefacto legacy de naming:** `baselisco.bsk` (typo potencial) y presencia de `dist/` versionado en árbol de trabajo del proyecto web.

## 8. Restricciones y precauciones

- Conservar Astro como tecnología principal.
- No migrar framework, no tocar core del lenguaje/runtime/compilador.
- Preservar cambios locales existentes (`web/package.json`, `web/package-lock.json`).
- No crear ramas, no commits/push/deploy sin autorización.
- Validar origen de `dist/` y archivos generados antes de cualquier limpieza.
- Verificar compatibilidad con GitHub Pages antes de alterar estructura/build.

## 9. Siguientes pasos (FASE 0 → FASE 1)

1. Completar auditoría de contenido y mapa de información (`PRODUCT_CONTENT_AUDIT.md`, `WEB_INFORMATION_ARCHITECTURE.md`).
2. Definir sistema de diseño/tokens alineado a "Futuristic Computing Premium" sin romper Astro SSG.
3. Planificar evolución incremental de layouts/componentes y posible modularización de contenido (content collections si aporta valor real).
