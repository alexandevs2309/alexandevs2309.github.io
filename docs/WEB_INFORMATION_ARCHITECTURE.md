# WEB_INFORMATION_ARCHITECTURE — Propuesta evolutiva (Astro)

Fecha: 2026-11-13  
Base: auditoría de `web/src/pages`, layout, contenido actual y restricciones del proyecto.

## 1. Principios de IA

- **Developer-first:** acceso rápido a instalar/empezar, referencia, ejemplos y estado real.
- **Transparencia técnica:** separar implementado, en desarrollo, experimental y planificado.
- **Escalabilidad en Astro:** favorecer páginas/rutas claras, componentes reutilizables y, cuando aporte valor, Content Collections para contenido repetible/versionable.
- **No simulación:** funcionalidades no disponibles deben mostrarse como pendientes/experimentales sin ejecución falsa.

## 2. Mapa de navegación propuesto (alto nivel)

### Navegación principal
1. **Inicio** (`/`)
2. **Lenguaje** (`/lenguaje`) — filosofía, sintaxis, modelo mental, garantías vs experimental
3. **Características** (`/caracteristicas`) — capacidades técnicas con estado y evidencia
4. **Arquitectura** (`/arquitectura`) — pipeline y componentes reales documentados
5. **Documentación** (`/documentacion` o `/docs`) — hub + secciones navegables
6. **Ejemplos** (`/ejemplos`)
7. **Ecosistema** (`/ecosistema`)
8. **Más** (dropdown): Roadmap (`/roadmap`), Novedades (`/novedades`), Comunidad (`/comunidad`), Playground (`/playground`)

> Nota: la estructura final debe adaptarse a la realidad del contenido verificable y mantener rutas existentes cuando sea posible (redirects/alias si se renombran).

## 3. Estructura detallada por sección

### 3.1 Inicio (`/`)
- Hero: qué es BASILISCO, propuesta de valor, estado del proyecto.
- Snippet de código real destacado.
- CTAs: Documentación, Empezar, Repositorio (si público y verificable) / Estado.
- Bloques de acceso rápido: Lenguaje, Arquitectura, Ejemplos, Ecosistema.
- Señales de confianza: perfil garantizado, versión/prototipo, advertencias de experimentalidad.

### 3.2 Lenguaje (`/lenguaje`)
- Filosofía y objetivos.
- Sintaxis y conceptos base (variables, tipos, funciones, control, colecciones, errores).
- Biblioteca estándar (resumen con estado).
- Matriz de estado por área (garantizado/experimental/pendiente) respaldada por evidencia.

### 3.3 Características técnicas (`/caracteristicas`)
- Tarjetas/secciones técnicas: tipado, funciones/closures (si aplica), inferencia, control de flujo, errores, runtime, stdlib, CLI, interoperabilidad/FFI, concurrencia (según evidencia).
- Cada ítem: descripción, estado, ejemplo corto, enlaces a docs.

### 3.4 Arquitectura (`/arquitectura`)
- Diagrama(s) del pipeline conocido: Lexer → Parser → AST → Análisis semántico → Sistema de tipos → HIR/IR (si corresponde) → Runtime/ejecución (Tree-walk/VM/backend nativo/WASM solo si hay evidencia).
- Explicación por componente y estado de madurez.
- Limitaciones conocidas y áreas no documentadas públicamente.

### 3.5 Documentación (`/documentacion` o `/docs`)
- Hub con rutas de aprendizaje y referencia.
- Subsecciones sugeridas:
  - Empezar: instalación, primer programa
  - Fundamentos: sintaxis, variables, tipos, operadores, texto
  - Lógica y estructura: funciones, control, iteración, ámbitos, colecciones
  - Errores y E/S
  - Biblioteca estándar
  - CLI y proyectos/módulos/paquetes
  - Referencia (palabras clave, tipos, códigos de salida)
- Búsqueda (client-side inicialmente) y navegación contextual (TOC, prev/next).
- Posible uso de Content Collections para páginas de docs/guías si reduce duplicación y mejora mantenimiento.

### 3.6 Playground (`/playground`)
- **Si hay motor ejecutable viable:** editor, ejecutar, salida, errores, ejemplos, reinicio.
- **Si no:** interfaz "Experimental / integración pendiente" con explicación clara, sin ejecución simulada; ejemplos estáticos/copiables.

### 3.7 Ejemplos (`/ejemplos`)
- Catálogo con metadatos: título, descripción, resultado esperado, nivel, características usadas, estado (garantizado/experimental).
- Filtros/búsqueda ligera si es viable sin JS pesado.

### 3.8 Ecosistema (`/ecosistema`)
- CLI `bsk`/`basilisco`, archivos `.bsk`, extensión VS Code, paquetes locales, integraciones existentes, herramientas dev.
- Estado explícito de cada componente (disponible, experimental, no disponible públicamente).

### 3.9 Roadmap (`/roadmap`)
- Vista por estados: Implementado, En desarrollo, Experimental, Pendiente, Planificado.
- Fuente: estado real del repositorio/documentos oficiales disponibles; sin cambiar prioridades ni declarar completado sin evidencia.

### 3.10 Novedades (`/novedades`)
- Listado de versiones/cambios cuando haya fuente verificable.
- Si no hay releases/changelog públicos, mostrar estado vacío honesto y fuente esperada.

### 3.11 Comunidad y contribución (`/comunidad`)
- Cómo seguir el proyecto, canales disponibles, reporte de errores/propuestas (si existen), contribución.
- Transparencia sobre ausencia de canales públicos si aplica.

## 4. Consideraciones de implementación en Astro

- Mantener SSG y JS mínimo (islands solo para búsqueda, toggles, playground real si aplica).
- Reutilizar `Base.astro` y evolucionar componentes (`Card`, `Badge/Estado`, `CodeBlock`, `SectionHeader`, `TOC`, etc.).
- Evaluar Content Collections para `docs`, `examples`, `news`/`changelog` y `roadmap` si la estructura lo justifica.
- Preservar rutas actuales (`/aprender`, `/documentacion`, `/ejemplos`, `/acerca`) durante transición o proveer equivalencias claras.
- Asegurar compatibilidad con despliegue GitHub Pages existente (paths, `dist`, workflow).

## 5. Priorización sugerida

1. **Fundación:** design system, layout, navegación, tokens, componentes base.
2. **Páginas core:** Inicio, Lenguaje, Características, Arquitectura, Ecosistema.
3. **Documentación:** reorganización navegable y mantenible.
4. **Catálogos/estado:** Ejemplos estructurados, Roadmap, Novedades, Comunidad.
5. **Playground:** solo integración real o placeholder explícito no simulado.
6. **Optimización y QA:** rendimiento, accesibilidad, SEO, responsive, build y Pages.
