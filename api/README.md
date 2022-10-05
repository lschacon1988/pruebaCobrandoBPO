# Prueba tecnica Cobrando BPO


## Se creo una pequeña app que crea y asigna empleados a departamewntos determinados

- Utilizando un entorno node.js
- Express para levantar un pequeño servidor 
- Sequelize para interectuar con una base de datos relcional tipo postgreSQL

## como punto de emtrada en la aplicacion para ser probada de manera local

- Se debe ejecutar el comando: **npm intall** o **npm i** dentro de la carpeta `./api` para hacer intalaciones de dependencia
- Se deben remplazar las variables de entorno en el archivo `.env` por las credenciales a usar en la base de datos local 
```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```
-Levantar el servidor ejecutando el comando ***npm start***

## Desde una aplicacion para realizar pediciones http podemos comprobar su funcionamiento

#### Las pruebas se realisaron con postman pero podria funcionar con cualquier aplicacion de este tipo

- Las rutas a las que se deben hacer las peticiones el CRUD de un departamento:


  - **get('/departamentos')**: obtenemos todos los departamentos.

  - **get('/departamentos/:codigo')**: obtenemos un departamento en particular, que coincida con el codigo del departamento.

   - **get('/departamentos/:codigo/empleados')**: optenemos todos los empleados que pertenecen a un departamento. 

  - **post('/departamentos')**: Para crear un departamento.

   - **put('/departamentos/:codigo')**: para acctualizar un departamento.

  - **delete('/departamentos/:codigo')**: para eliminar un departamento.

