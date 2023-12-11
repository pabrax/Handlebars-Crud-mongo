# API en Node.js con MongoDB y Handlebars para CRUD de Tareas

Esta es una aplicacion CRUD sencilla creada con Exprees, Mongo Y Handlebars, se encarga de crear, eliminar, y gestionar tareas que se almacenan en mongoDB y se muestran por medio de HandleBars.

Este proyecto fue pensado a modo de aprendizaje y repaso. 

### Instalación

1. Clona este repositorio: `git clone https://github.com/pabrax/Handlebars-Crud-mongo.git`
2. Ve al directorio del proyecto: `cd Handlebars-Crud-mongo`
3. Instala las dependencias: `npm install`

### Uso

para ejecutar la aplicacion usa `npm run dev`

### variables de entorno

Crea un archivo `.env` en el directorio raíz y Asegúrate de configurar las siguientes variables de entorno antes de ejecutar la aplicación.

```
MONGODB_URI = mongodb://usuario:contraseña@localhost:27017/nombre-basedatos

PORT = 3000
```

## Scripts npm

- `npm run dev`: Inicia la aplicación en modo de desarrollo utilizando `nodemon` y `babel-node`.
- `npm run build`: Compila el código fuente utilizando Babel y copia los archivos necesarios a la carpeta `dist/`.

## Dependencias principales

- `express`: Framework web para crear la infraestructura de la aplicación.
- `express-handlebars`: Motor de plantillas para generar vistas HTML dinámicas.
- `mongoose`: Biblioteca de modelado de objetos MongoDB para trabajar con la base de datos.
- `morgan`: Middleware para el registro de solicitudes HTTP.
- `dotenv`: Carga variables de entorno desde un archivo `.env`.
