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
import Medicine from './components/medicine/Medicine';
import Resources from './components/resources/Resources'
import Profile from './components/Profile';
import Schedule from './components/Schedule/ScheduleWrap'
import Treatment from './components/Treatment/Treatment'

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
        <Route path='/' exact><Schedule /></Route>
        <Route path='/treatment' exact><Treatment /></Route>
        <Route path='/resources' exact><Resources /></Route>
        <Route path='/medicine' exact><Medicine {...props}/></Route>
        <Route path='/profile' exact><Profile /></Route>
      </Switch>
    </HashRouter>

  );
}

export default App;
