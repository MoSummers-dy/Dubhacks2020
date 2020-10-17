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
import Medicine from './components/medicine/Medicine';

function App() {
  let getItem = (val) => {
    return JSON.parse(localStorage.getItem(val));
  };
  
  const props = {
    todos: getItem('todos'),
    finished: getItem('finished'),
    done: getItem('done')
  };

  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact><UnderConstruction /></Route>
        <Route path='/treatment' exact><UnderConstruction /></Route>
        <Route path='/resources' exact><UnderConstruction /></Route>
        <Route path='/medicine' exact><Medicine {...props}/></Route>
        <Route path='/profile' exact><UnderConstruction /></Route>
      </Switch>
    </HashRouter>
    
  );
}

export default App;
