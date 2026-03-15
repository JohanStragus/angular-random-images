# 📸 Random Images - Angular v21

## 📌 Descripción

Aplicación desarrollada en **Angular 21** como práctica de Angular moderno.

La aplicación permite:

- Inicio de sesión simple mediante username.
- Visualización de imágenes en miniatura (*thumbnails*).
- Selección manual de imagen.
- Generación aleatoria de imagen.
- Visualización dinámica de la imagen seleccionada.
- Añadir nuevas imágenes existentes en la carpeta `img`.
- Persistencia de imágenes mediante **LocalStorage**.

Este proyecto aplica conceptos fundamentales de Angular moderno como:

- **Signals**
- **Control Flow (`@if`, `@for`)**
- **Data Binding**
- **LocalStorage**
- **Arquitectura zoneless**

---

## 🖼 Imágenes disponibles

Las imágenes incluidas en el proyecto se encuentran en:

```
public/img
```

Actualmente disponibles:

```
broly.webp
freezer.webp
goku.webp
piccolo.webp
vegeta.webp
```

Para añadir una imagen en la aplicación, introduce el nombre del archivo en el formulario:

```
goku.webp
```

---

## 🛠 Tecnologías utilizadas

- Angular v21
- TypeScript
- HTML
- CSS
- Git & GitHub
- Browser LocalStorage API

---

## 🚀 Ejecutar el proyecto

Clonar el repositorio:

```bash
git clone https://github.com/JohanStragus/angular-random-images.git
```

Entrar en la carpeta del proyecto:

```bash
cd angular-random-images
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
ng serve
```

Abrir en el navegador:

```
http://localhost:4200
```

---

## 💾 Persistencia de datos

Las imágenes añadidas se guardan en el navegador mediante **LocalStorage**, por lo que permanecen incluso al recargar la página.

Los datos se almacenan bajo la clave:

```
IMG_FILES
```

---

## 📂 Estructura básica del proyecto

```
src/
 ├── app/
 │   ├── layout/
 │   │   └── header/
 │   └── app.ts
 │
public/
 └── img/
     ├── broly.webp
     ├── freezer.webp
     ├── goku.webp
     ├── piccolo.webp
     └── vegeta.webp
```

---

## 📚 Conceptos aplicados

- Angular **Signals**
- Angular **Control Flow (`@if`, `@for`)**
- **Two-way binding** adaptado a signals
- Gestión de estado en Angular
- Persistencia con **LocalStorage**
- Arquitectura **zoneless**