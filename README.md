

# Project - Wiki Tour

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node, Postgresql y Sequelize.
- Afirmar y conectar los conceptos.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `countries`

El contenido de `client` fue creado usando: Create React App.

#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Instrucciones:
- Importante para el correcto funcionamiento del backend tiene que crearse un archivo .env dentro de la carpeta api con los siguiente valores proporsionados por la base de datos, o puede crearse una cuenta en https://www.elephantsql.com/ crear una base de datos pequeña con la version gratuita y con los datos porporcionados usarlos en las siguientes variables:
  DB_USER=user
  DB_PASSWORD=pass
  DB_HOST=urlhost
- En la carpeta api npm install y luego npm start para correr el backend
- En la carpeta client npm install y luego npm start para correr el frontend
