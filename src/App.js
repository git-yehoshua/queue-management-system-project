import './modules/styles/App.css'
import React from 'react';
import Login from './modules/login';
import Register from './modules/register';
import Sidebar from './modules/sidebar';
import Teller from './modules/teller';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './modules/admin';
import Live from './modules/live';
import Ticket from './modules/ticket';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='App-wrap'>
          <Routes>
            <Route path='/live' element={<Live/>}/>
          </Routes>
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
