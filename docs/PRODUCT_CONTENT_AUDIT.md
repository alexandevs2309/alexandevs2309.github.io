# PRODUCT_CONTENT_AUDIT — BASILISCO Official Website

Fecha: 2026-11-13

## 1. Resumen ejecutivo

El sitio actual comunica que BASILISCO es un **prototipo de lenguaje de programación con sintaxis en español** (manifiesto/prototipo declarado como 0.6.0, perfil de conformidad v0.4 aprobado y acotado). El contenido es honesto en varios puntos (distingue garantizado vs experimental, reconoce límites y falta de distribución pública del intérprete), pero está distribuido en pocas páginas con fuerte densidad textual (especialmente documentación) y una identidad visual que no refleja aún la dirección premium solicitada.

## 2. Inventario de contenido por página

### `/` (Inicio)
- **Propósito:** presentar BASILISCO, CTA a documentación/ejemplos/acerca.
- **Mensajes clave:** lenguaje con sintaxis en español; prototipo 0.6.0; perfil v0.4 garantiza base; otras capacidades experimentales.
- **Elementos:** hero con código, 4 feature cards, ejemplo anotado, callout, CTA.
- **Fortalezas:** claridad inicial, ejemplo realista, estado visible.
- **Brechas:** no muestra arquitectura/ecosistema/roadmap/novedades; propuesta de valor técnica profunda limitada.

### `/aprender` (Aprender)
- **Propósito:** tutorial guiado (8 lecciones) + programa final + ejercicios.
- **Cobertura:** mostrar, variables, operadores, texto/conversión, funciones, control de flujo, colecciones, errores.
- **Fortalezas:** progresión pedagógica, ejemplos ejecutables descritos, ejercicios.
- **Brechas:** no integrado como parte de una experiencia de documentación unificada con navegación de referencia; depende de tener intérprete disponible.

### `/documentacion` (Documentación)
- **Propósito:** referencia completa en una sola página.
- **Secciones:** estado/alcance, instalación, primer programa, variables, tipos, operadores, texto, funciones, proyectos/módulos, paquetes, FFI, control, iteración, ámbitos, colecciones, errores, errores comunes, E/S, biblioteca integrada, CLI, palabras clave, FAQ.
- **Fortalezas:** amplitud, distinción garantizado/experimental, TOC/búsqueda/progreso en cliente.
- **Brechas:** página monolítica difícil de escalar; no usa content collections; búsqueda limitada a texto local; faltan rutas/secciones dedicadas para arquitectura profunda, roadmap estructurado, changelog/novedades, contribución detallada.

### `/ejemplos`
- **Propósito:** ejemplos anotados por niveles (esencial, práctico, extensiones).
- **Fortalezas:** variedad, explicación línea a línea, notas sobre experimentalidad.
- **Brechas:** no hay metadatos estructurados reutilizables (dificultad/características/resultados) más allá del texto; no hay filtrado/búsqueda.

### `/acerca`
- **Propósito:** qué es BASILISCO, estado, filosofía, comunidad.
- **Fortalezas:** honestidad sobre disponibilidad del intérprete y canales públicos.
- **Brechas:** comunidad/contribución poco accionable; sin enlaces a repositorio/issues/proceso (coherente si no existen públicamente, pero debe explicitarse mejor).

### `/404`
- Página de error simple con rutas de retorno.

## 3. Afirmaciones técnicas observadas (requieren respaldo continuo)

- BASILISCO: lenguaje con sintaxis en español, intérprete escrito en Rust.
- Prototipo declarado `0.6.0`; perfil de conformidad v0.4 aprobado y acotado.
- Características mencionadas: variables (`sea/var/dato/const`), tipos (`entero/decimal/real/logico/texto/nulo/arreglo/lista`), funciones, control de flujo (`si/sino/mientras`), iteración/rangos (`para cada`, `..`, `..=`), `romper/continuar`, errores con ubicación, `intentar/rescatar`, colecciones, biblioteca estándar experimental, proyectos/módulos (`usar`, `publico`, `basilisco.toml`), paquetes locales, FFI C experimental, concurrencia básica experimental, CLI (`basilisco`, alias `bsk`, `.bsk` canónico, `.nexo` legado).
- Disponibilidad: código fuente del intérprete no disponible públicamente actualmente (según sitio); extensión VS Code `.vsix` descargable desde la web.

**Riesgo:** el sitio es autocontenido y no muestra evidencia enlazada al repo core en estas páginas; toda afirmación futura debe validarse contra fuentes oficiales disponibles antes de ampliarse.

## 4. Cobertura frente a la arquitectura de información objetivo

| Área objetivo | Estado actual | Observaciones |
|---|---|---|
| Inicio | Parcial | Existe hero/CTA/código; falta profundidad de estado del ecosistema y rutas técnicas clave. |
| El lenguaje | Parcial | Cubierto entre Aprender/Documentación; no hay sección dedicada unificada. |
| Características técnicas | Parcial | Dispersas en docs; falta página/segmento con evidencia y estados claros por feature. |
| Arquitectura | Ausente | No hay sección técnica de pipeline/componentes (lexer/parser/AST/semántica/tipos/HIR/IR/runtime/backends). |
| Documentación | Parcial | Amplia pero monolítica; falta IA escalable y posiblemente colecciones. |
| Playground | Ausente | No existe interfaz real ni experimental declarada. |
| Ejemplos | Presente | Buenos ejemplos; falta estructuración/metadata y posible filtrado. |
| Ecosistema | Parcial | Menciones a CLI, `.bsk`, extensión, paquetes/FFI; no hay vista de ecosistema consolidada. |
| Roadmap | Ausente | No hay roadmap visual con estados (implementado/en desarrollo/experimental/pendiente/planificado). |
| Novedades | Ausente | No hay changelog/releases/noticias. |
| Comunidad y contribución | Parcial | Sección breve en Acerca; falta guía accionable y transparente. |

## 5. Tono y calidad editorial

- **Tono:** mayormente claro, educativo y prudente respecto a limitaciones.
- **Consistencia:** mezcla de "prototipo" con claims puntuales de capacidades avanzadas; bien matizado en general, pero requiere reforzar etiquetas de estado visibles.
- **Idioma:** español consistente.
- **Accesibilidad de contenido:** headings y estructura razonables; bloques de código y tablas anotadas presentes.

## 6. Recomendaciones de contenido (sin inventar funcionalidades)

1. Separar claramente "garantizado (perfil v0.4)" vs "experimental/prototipo" en todas las secciones nuevas.
2. Crear secciones de Arquitectura y Roadmap solo con componentes/estados respaldados por evidencia disponible; marcar desconocido/pendiente cuando falte información.
3. Añadir página de Ecosistema que consolide CLI, extensiones, formatos, paquetes locales y estado real de integraciones.
4. Implementar Novedades solo si hay fuente verificable (releases/tags/changelog); en caso contrario, estado "sin fuente pública disponible".
5. Playground: si no hay runtime web integrable, exponer UI claramente como "experimental/pendiente de integración" sin ejecutar código simulado.
6. Mejorar Contribución/Comunidad con expectativas realistas (canales actuales, cómo seguir el proyecto) sin inventar repos o procesos.
7. Estructurar ejemplos con metadatos (nivel, características usadas, resultado esperado) para reutilización.
