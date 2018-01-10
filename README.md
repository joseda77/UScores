# UScores
Versión del proyecto de integrador

Para el Frontend
- Angular 5
- MAterialize  o Bootstrap (ng-bootstrap)
- TypeScript
- Libreria Jquery

Para el Backend.

- NodeJS
tal vez python o java

Opcional...
Para implementar en cuaquier dispositivo se necesita ionic(Framework de js) que usa mucho angular.

Nota!!! Utilize materialize, hammerjs (para las funciones touch), jquery, material-icon y se instalan asi...
- Para instalar Materialize: npm install materialize-css --save
		    npm install angular2-materialize --save
- Para instalar JQuery: npm install jquery --save
- Para instalar  hammerjs: npm install hammerjs --save
- Para instalar material icons: npm install material-design-icons

Despues de instalar cada una, dirigirse a cli.angular.json y buscar el arreglo de  styles y scripts
y copiar dentro de styles = "../node_modules/materialize-css/dist/css/materialize.css"
	        "../node_modules/material-design-icons/iconfont/material-icons.css"

y en scripts  copiar = "../node_modules/jquery/dist/jquery.min.js"
                      "../node_modules/materialize-css/dist/js/materialize.js"
                      "../node_modules/hammerjs/hammer.js"

Comando de instalacion para bootstrap 4.0(beta) es: npm install bootstrap@4.0.0-beta.3 --save 
ademas de instalar ng-bootstrap con el comando: npm install --save @ng-bootstrap/ng-bootstrap
para removerlos es: 
-npm remove bootstrap@4.0.0-beta.2 --save
-npm remove --save @ng-bootstrap/ng-bootstrap

NOTA IMPORTANTE!!: mirar con que version de bootstrap esta trabajando ng-bootstrap
