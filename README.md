# book-manager

## Descripción
Este es un gestor de libros desarrollado con React para el frontend y Node.js con MySQL para el backend. Permite a los usuarios agregar, editar, filtrar y eliminar libros.

## Instalación

### Requisitos previos
* **Node.js y npm (o yarn):** Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde https://nodejs.org/.
* **Un gestor de bases de datos MySQL:** Necesitarás tener un servidor MySQL corriendo localmente.

### Clonar el repositorio
```bash
git clone https://github.com/sb0216/gestor-libros.git

Instalar dependencias
Navega al directorio del proyecto:

cd book-manager

Instala las dependencias del frontend y backend:
# Frontend
cd book-manager/book-manager-frontend
npm install

# Backend
cd book-manager//book-manager-backend
npm install

Configurar la base de datos
Crea una base de datos en tu servidor MySQL con el nombre que hayas especificado en el archivo database.js (backend/config/database.js).
Configura las credenciales de conexión a la base de datos en el mismo archivo.

Ejecutar la aplicación
#Backend:
cd book-manager/book-manager-backend
node index.js

Frontend:
cd book-manager/book-manager-frontend
npm start

Se abrirá una nueva pestaña en tu navegador con la aplicación en ejecución.
