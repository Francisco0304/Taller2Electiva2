# Redmi

## Descripción
Este repositorio contiene un servicio en la nube que interactúa con una API existente mediante el uso de GraphQL. Proporciona métodos agnósticos para consultar datos a los clientes de manera eficiente y escalable.

## Requisitos Previos
- Node.js instalado en el sistema.
- Express: El marco de aplicación web de Node.js.
- Body-parser: Middleware que analiza los cuerpos de las solicitudes entrantes en una cadena de texto.
- EJS: Motor de plantillas para generar HTML con JavaScript.
- Path: Módulo de Node.js para trabajar con rutas de archivos y directorios.
- FS: Módulo de Node.js para interactuar con el sistema de archivos.
- Nodemon: Herramienta de desarrollo que reinicia automáticamente el servidor cuando detecta cambios en los archivos.

## Instalación
1. Clona o DESCARGA este repositorio en tu máquina local.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.

## Uso
1. Ejecuta el servidor con el comando `nodemon index.js`.
2. Abre tu navegador web y accede a `http://localhost:3600` para ver la aplicación.
3. Desde la página principal, puedes realizar operaciones como agregar nuevos libros, editar información de libros existentes, prestar y devolver libros, así como eliminar libros si están disponibles.
4. Asegúrate de que un libro esté disponible antes de intentar eliminarlo. Si no está disponible, recibirás un mensaje de error y serás redirigido automáticamente a la página principal.

## Tecnologías Utilizadas
- Node.js
- Express.js
- HTML
- CSS (Bootstrap)
- JavaScript (Frontend y Backend)
- GraphQL
- MongoDB Atlas (Servicio en la nube para la base de datos)

## Contribución
¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios.
4. Haz commit de tus cambios (`git commit -am 'Agrega nueva característica'`).
5. Sube tus cambios (`git push origin feature/nueva-caracteristica`).
6. Abre un Pull Request.

## Licencia
Este proyecto está bajo la licencia del usuario, destinado para un taller de la materia ELECTIVA II, UPTC Sogamoso.
