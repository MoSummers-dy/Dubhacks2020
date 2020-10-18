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
<<<<<<< HEAD
        <Route path='/' exact><ScheduleWrap /></Route>
        <Route path='/Treatment' exact><Treatment /></Route>
        <Route path='/team' exact><ScheduleWrap /></Route>
        <Route path='/endorsement' exact><ScheduleWrap /></Route>
        <Route path='/involvement' exact><ScheduleWrap /></Route>
=======
        <Route path='/' exact><UnderConstruction /></Route>
        <Route path='/treatment' exact><UnderConstruction /></Route>
        <Route path='/resources' exact><Resources /></Route>
        <Route path='/medicine' exact><Medicine {...props}/></Route>
        <Route path='/profile' exact><Profile /></Route>
>>>>>>> 495b07aaa75db635a1b6da51caf5b5b8452d4cdc
      </Switch>
    </HashRouter>

  );
}

export default App;
