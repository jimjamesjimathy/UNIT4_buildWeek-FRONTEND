import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//components
import Home from './components/Home';
import UsersList from './components/Users';
import User from './components/User';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' element={<Home />} />
          <Route path='/users' element={<UsersList user={<User />}/>} />
          <Route exact path='login' element={<Login />} />
          <Route exact path='register' element={<Register />} />
          <PrivateRoute exact path='/home' component={Home} />
          <PrivateRoute exact path='/logout' component={Logout} />
        </Switch>
      </div>
  );
}

export default App;
