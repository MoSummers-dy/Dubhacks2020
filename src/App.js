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
import Crisis from './components/crisis/crisis';
import crisis_icon from './components/crisis/crisis_icon.png'

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Switch>
          <Route path='/' exact><UnderConstruction /></Route>
          <Route path='/archive' exact><Crisis /></Route>
          <Route path='/team' exact><UnderConstruction /></Route>
          <Route path='/endorsement' exact><UnderConstruction /></Route>
          <Route path='/involvement' exact><UnderConstruction /></Route>
        </Switch>
      </HashRouter>
      <a href="/Dubhacks2020#/crisis">
         <img src={crisis_icon}></img>
      </a>
    </>
  );
}

export default App;
