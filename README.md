# Registro de personas en base de datos mediante una API

Este proyecto es una API RESTful desarrollada en Node.js que permite registrar personas en una base de datos PostgreSQL. La API recibe datos en formato JSON, guarda la edad proporcionada en la base de datos, y luego suma 1 a esa edad para devolver una respuesta con la edad futura.

## Funcionalidades

- **Registro de personas:** Recibe y almacena datos de personas (nombre y edad) en la base de datos.
- **Procesamiento de datos:** Después de guardar la edad, la API suma 1 y devuelve una respuesta que indica la edad que la persona tendrá próximamente.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para construir aplicaciones web y APIs.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional.
