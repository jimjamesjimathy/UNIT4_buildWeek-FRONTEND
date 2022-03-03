import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

//components
import Home from './components/Home';
import UsersList from './components/Users';
import User from './components/User';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UsersList user={<User />}/>} />
        </Routes>
      </div>
  );
}

export default App;
