import React from 'react';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';



//Todo lo que esté dentro del <Switch/> van a ser cada una de las paginas y lo que este
//afuera se verá en todas las paginas
//Con proyectState crearemos un state para todo el proyecto, similar a como lo hace REDUX
function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
          <Route exact path="/proyectos" component={Proyectos}/>
        </Switch>
      </Router>
    </ProyectoState>
  );
}

export default App;
