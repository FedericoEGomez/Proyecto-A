# Proyecto-A
Esto es un repo de ejemplo de un crud con validacion JWT para los chicos de Numen.
En este repositorio tendremos ejemplos del uso de middlewares, CRUD,validacion JWT, rutas versionadas, un swagger ( para fecilitar el testeo de la API ).

Este repositorio cuenta con la dinamica del consumo de apis internas las cuales necesitaran un JWT para funcionar, en este caso tiene que clonar los siguientes repos para la practica:
    - UserLogin / UserLogin-TS
    - Proyecto-A
    - Proyecto-B
    
Si quieren usar los tres proyectos a la vez porfavor confirugen puertos distintos para cada uno, Seguido de eso usen el proyecto UserLogin/UserLogin-TS para generar un token, si necesitan mas informacion porfavor consulten el swagger de dichos proyectos, posterior a esto mismo ingresaremos el token obtenido en el proyecto-A en dicho proyecto tendremos dos clases de rutas las terminadas en -a o las terminadas en -b, -a consumira el servidor que esta conectado a dicho servidor pidiendo el JWT ya generado para devolver un resultado mientras que -b consumira el proyecto-B en este caso tendremos que tener proyecto-A y proyecto-B levantado en puertos distintos para el consumo, recomiendacion usar http://localhost:8080 para A y http://localhost:8081 para B, de esta forma accediendo a dicha ruta tendremos que enviar el JWT para el consumo cruzado de A hacia B siendo este quien respondera la consulta de la base de datos y validara los errores de la misma.


intalacion: 

--npm i

levantar servidor:

--npm run dev - iniciar con nodemon

--npm run start - iniciar con node