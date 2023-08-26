# API en Node.js con MongoDB y Handlebars para CRUD de Tareas

Esta es una aplicación de ejemplo que demuestra cómo construir una aplicación MVC (Modelo-Vista-Controlador) utilizando Node.js, Express y Handlebars.

## Instalación

1. Clona este repositorio: `git clone https://github.com/pabrax/f-mongo-node-crud.git`
2. Ve al directorio del proyecto: `cd f-mongo-node-crud`
3. Instala las dependencias: `npm install`

## Configuración

1. Crea un archivo `.env` en el directorio raíz basado en el archivo `.env.example`.
2. Completa las variables de entorno en el archivo `.env` con la configuración adecuada.

## variables de entorno

Asegúrate de configurar las siguientes variables de entorno antes de ejecutar la aplicación.

1. `MONGODB_URI`: Esta variable debe contener la URI de conexión a la base de datos MongoDB. Proporciona la dirección y las credenciales necesarias para que la aplicación se conecte a la base de datos. Asegúrate de incluir el protocolo, el nombre de usuario, la contraseña, la dirección del servidor y el puerto, si es necesario. Ejemplo: `mongodb://usuario:contraseña@localhost:27017/nombre-basedatos`

2. `PORT`: Esta variable define el puerto en el que la aplicación Express se ejecutará. Puedes establecer este valor para indicar en qué puerto la aplicación escuchará las solicitudes entrantes. Asegúrate de que el puerto seleccionado esté disponible y no esté en uso por otros servicios. Ejemplo: `3000`

## Uso

- Ejecuta la aplicación en modo de desarrollo con `npm run dev`. Esto utilizará `nodemon` y `babel-node` para facilitar el desarrollo.

## Estructura del proyecto

- `src/`: Contiene el código fuente de la aplicación.
  - `index.js`: Punto de entrada de la aplicación.
  - `controllers/`: Controladores para manejar la lógica de la aplicación.
  - `models/`: Definición de los modelos de datos utilizando Mongoose.
  - `views/`: Plantillas Handlebars para las vistas.
  - `public/`: Archivos estáticos accesibles públicamente.

## Scripts npm

- `npm run dev`: Inicia la aplicación en modo de desarrollo utilizando `nodemon` y `babel-node`.
- `npm run build`: Compila el código fuente utilizando Babel y copia los archivos necesarios a la carpeta `dist/`.

## Dependencias principales

- `express`: Framework web para crear la infraestructura de la aplicación.
- `express-handlebars`: Motor de plantillas para generar vistas HTML dinámicas.
- `mongoose`: Biblioteca de modelado de objetos MongoDB para trabajar con la base de datos.
- `morgan`: Middleware para el registro de solicitudes HTTP.
- `dotenv`: Carga variables de entorno desde un archivo `.env`.
