import './App.css';
import Login from './modules/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='nav-bar'>
        <h1>
             Queue Management System
        </h1>
        </div>
        <Login/>
      </header>
    </div>
  );
}

export default App;
