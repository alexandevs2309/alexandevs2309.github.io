# Basilisco — Extensión para VS Code

Resaltado de sintaxis para el lenguaje de programación [BASILISCO](https://github.com/alexandevs2309/nexo).

## Instalación

### Desde un archivo .vsix

```bash
code --install-extension basilisco-0.1.0.vsix
```

### Manualmente

Copia esta carpeta en tu directorio de extensiones:

- **Linux:** `~/.vscode/extensions/basilisco/`
- **macOS:** `~/.vscode/extensions/basilisco/`
- **Windows:** `%USERPROFILE%\.vscode\extensions\basilisco\`

## Qué incluye

- Reconocimiento de archivos `.bsk` y `.nexo`
- Resaltado de: palabras clave, tipos, números, texto, comentarios, operadores
- Autocierre de llaves, corchetes y comillas
- Indentación automática en bloques `si`, `mientras` y `funcion`

## Compilar un .vsix

Necesitas `vsce`:

```bash
npm install -g @vscode/vsce
cd basilisco-vscode
vsce package
```

Esto genera `basilisco-0.1.0.vsix`.
