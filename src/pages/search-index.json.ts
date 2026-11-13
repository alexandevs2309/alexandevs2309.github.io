import type { APIRoute } from 'astro';

const items = [
  { title: 'Documentación', href: '/docs', content: 'Hub de guías, lenguaje, herramientas, arquitectura y referencia' },
  { title: 'Introducción', href: '/docs/introduccion', content: 'Qué es BASILISCO perfil v0.4 prototipo 0.6.0 etiquetas alcance' },
  { title: 'Instalación', href: '/docs/instalacion', content: 'instalar cargo build disponibilidad intérprete extensión vscode' },
  { title: 'Primer programa', href: '/docs/primer-programa', content: 'hola mundo mostrar bsk run ejecutar' },
  { title: 'Guía de inicio', href: '/docs/guia-de-inicio', content: 'empezar ruta recomendada tutorial fundamentos' },
  { title: 'Sintaxis básica', href: '/docs/sintaxis-basica', content: 'sentencias bloques llaves estructura programa' },
  { title: 'Variables y tipos', href: '/docs/variables-y-tipos', content: 'sea var dato const entero decimal real logico texto nulo arreglo lista' },
  { title: 'Operadores y control', href: '/docs/operadores-y-control', content: 'si sino mientras para cada rangos romper continuar operadores' },
  { title: 'Funciones', href: '/docs/funciones', content: 'funcion retornar parametros recursion cierres lambda' },
  { title: 'Colecciones y módulos', href: '/docs/colecciones-y-modulos', content: 'arreglo lista usar publico modulo import export' },
  { title: 'Manejo de errores', href: '/docs/manejo-de-errores', content: 'errores intentar rescatar diagnostico ubicacion' },
  { title: 'CLI y herramientas', href: '/docs/cli-y-herramientas', content: 'basilisco bsk run analizar formatear instalar probar paquetes' },
  { title: 'Biblioteca estándar', href: '/docs/biblioteca-estandar', content: 'stdlib texto conversiones colecciones archivos math fecha' },
  { title: 'Proyectos y paquetes', href: '/docs/proyectos-y-paquetes', content: 'basilisco.toml manifiesto lock dependencias locales' },
  { title: 'Interoperabilidad y FFI', href: '/docs/interoperabilidad-ffi', content: 'ffi c abi cargar llamar descargar biblioteca compartida' },
  { title: 'Ejecución y motores', href: '/docs/ejecucion-y-motores', content: 'runtime pipeline arquitectura motores evidencia' },
  { title: 'Referencia del lenguaje', href: '/docs/referencia-lenguaje', content: 'referencia resumen sintaxis tipos funciones' },
  { title: 'Palabras clave y tipos', href: '/docs/palabras-clave', content: 'keywords palabras reservadas tipos operadores' },
  { title: 'FAQ', href: '/docs/faq', content: 'preguntas frecuentes version instalar extension' },
  { title: 'Lenguaje', href: '/lenguaje', content: 'filosofia sintaxis capacidades garantizado experimental' },
  { title: 'Arquitectura', href: '/arquitectura', content: 'pipeline lexer parser ast tipos runtime' },
  { title: 'Estado', href: '/estado', content: 'prototipo 0.6.0 perfil v0.4 madurez disponibilidad' },
  { title: 'Ejemplos', href: '/ejemplos', content: 'codigo programas anotados niveles' },
  { title: 'Ecosistema', href: '/ecosistema', content: 'cli vscode paquetes ffi herramientas' },
  { title: 'Descargas', href: '/descargar', content: 'instalar binarios gestores paquetes' },
  { title: 'Playground', href: '/playground', content: 'probar ejecutar navegador runtime pendiente' },
  { title: 'Glosario', href: '/glosario', content: 'terminos definiciones perfil prototipo ffi' },
];

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
