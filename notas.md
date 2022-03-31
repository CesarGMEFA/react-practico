Comandos NPM
React:
 npm install react react-dom
 npm install react-router-dom
 
Babel:
 npm install @babel/core @babel/preset-env @babel/preset-react 
 npm install @babel/plugin-transform-runtime

Webpack:
 npm install webpack webpack-cli webpack-dev-server 

HTML plugin:
 npm install babel-loader html-loader html-webpack-plugin

Axios:
 npm i axios


import { BrowserRouter, Switch, Route } from 'react-router-dom';
// usaremos esas 3 herramientas
* ¿Qué estamos haciendo?
- BrowserRoute: sirve para implementar router en el navegador

- Layout: solamente renderizará el route que coincida efectivamente con la URL especificada.

- Route: Con Route podemos definir las rutas de nuestra aplicación, quizás sea el componente más importante de React Router para llegar a comprender todo el manejo de esta librería. Cuando definimos una ruta con Route le indicamos que componente debe renderizar.

  Este componente cuanta con algunas propiedades:
    - Path: la ruta donde debemos renderizar nuestro componente podemos pasar un string o un array de string.
    - Exact: Solo vamos a mostrar nuestro componente cuando la ruta sea exacta. Ej: /home === /home.
    - Strict: Solo vamos a mostrar nuestro componente si al final de la ruta tiene un slash. Ej: /home/ === /home/
    - Sensitive: Si le pasamos true vamos a tener en cuenta las mayúsculas y las minúsculas de nuestras rutas. Ej: /Home === /Home
    - Component: Le pasamos un componente para renderizar solo cuando la ubicación coincide. En este caso el componente se monta y se desmonta no se actualiza.
    - Render: Le pasamos una función para montar el componente en línea.
