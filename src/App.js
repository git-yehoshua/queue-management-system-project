import './modules/styles/App.css'
import React from 'react';
import Login from './modules/pages/login';
import Register from './modules/pages/register';
import Sidebar from './modules/components/sidebar';
import Teller from './modules/pages/teller';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './modules/pages/admin';
// import Live from './modules/pages/live';
import Ticket from './modules/pages/ticket';
// import { useState, useEffect } from 'react';
function App() {

  
  return (
    <div className="App">
      <Router>
        <div className='App-wrap'>
        </div>
        <Sidebar>
          <Routes>
            <Route path='/' element={<h1>Welcome to Dashboard</h1>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/teller' element={<Teller />} /> 
            <Route path='/admin' element={<Admin/>} />
            <Route path='/ticket' element={<Ticket/>} />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
