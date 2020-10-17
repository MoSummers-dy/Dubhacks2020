import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';

import NavBar from './components/navbar/navbar';
import UnderConstruction from './components/construction/UnderConstruction';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact><UnderConstruction /></Route>
        <Route path='/treatment' exact><UnderConstruction /></Route>
        <Route path='/resources' exact><UnderConstruction /></Route>
        <Route path='/medicine' exact><UnderConstruction /></Route>
        <Route path='/profile' exact><UnderConstruction /></Route>
      </Switch>
    </HashRouter>
    
  );
}

export default App;
