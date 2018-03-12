# UScores
Versión del proyecto de integrador

Para el Frontend
- Angular 5
- Materialize
- TypeScript
- Libreria Jquery
- HammerJS

Para el Backend.

- NodeJS
- Express
- MongoBD

Frameworks y Librerias adicionales.

- Bcrypt: sirve para la encripatación de contraseñas y demas información.
- Cors: sirve para conectar angular con el servidor
- Body-parser(Integrado ya en express): es el modulo que utiliza express de http post.
- ejs: Sirve para ejecutar e integrar codigo en las vistas de html
- Mongoose: es un ORM qe sirve para conectar nodejs con MongoDB.
- Mongoose-Pagination: sirve para realizar las paginaciones.
- Jwt-simple: sirve para la sesiones por token.
- Momentjs: sirve para el manejo de fechas y horas.
- Nodemon: actualiza el servidor y evita que tener que actualizarlo manualmente en caso de tener cambios.
- Conectar express con mongojs

Opcional...
Para implementar en cuaquier dispositivo se necesita ionic(Framework de js) que usa mucho angular.

Nota!!! Utilize materialize, hammerjs (para las funciones touch), jquery, material-icon y se instalan asi...
- Para instalar Materialize: npm install materialize-css --save
npm install angular2-materialize --save
- Para instalar JQuery: npm install jquery --save
- Para instalar  hammerjs: npm install hammerjs --save
- Para instalar material icons: npm install material-design-icons
- Para instalar Express: npm install express -save
- Para instalar Bcrypt: npm install bcrypt --save
- Para instalar Cors: npm install cors --save
- Para instalar Body-parser: npm install body-parser --save  (Esto ya viene integrado en las versiones recientes de express)
- Para instalar ejs_ npm install ejs --save
- Para instalar Mogoose: npm install mongoose --save
- Para instalar jwt-simple: npm install jwt-simple --save
- Para instalar MomentJs: npm install moment --save
- Para instalar Mongoose-Pagination: npm install mongoose-pagination --save     ó   npm install mongoose-paginate --save
- Para instalar Nodemon: npm install nodemon --save-dev 
- Para instalar Mongojs: npm install mongojs --save


Despues de instalar cada una, dirigirse a cli.angular.json y buscar el arreglo de  styles y scripts
y copiar dentro de styles = "../node_modules/materialize-css/dist/css/materialize.css",
	        "../node_modules/material-design-icons/iconfont/material-icons.css"

y en scripts  copiar = "../node_modules/jquery/dist/jquery.min.js",
                      "../node_modules/materialize-css/dist/js/materialize.js",
                      "../node_modules/hammerjs/hammer.js"


OPCIONAL !!!!!
Comando de instalacion para bootstrap 4.0(beta) es: npm install bootstrap@4.0.0-beta.3 --save 
ademas de instalar ng-bootstrap con el comando: npm install --save @ng-bootstrap/ng-bootstrap
para removerlos es: 
-npm remove bootstrap@4.0.0-beta.2 --save
-npm remove --save @ng-bootstrap/ng-bootstrap

