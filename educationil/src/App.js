import React from 'react';
import profile from './images/profile.png';
import search from './images/search.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1 className='logo'> EDUCATIONIL </h1>
      <nav className='navbar'>
        <a> Home </a>
        <a> About </a>
        <a> Courses </a>
        <a> Pages </a>
        <a> Blog </a>
        <a> Contact </a>
      </nav>
      <div>
        <img src={search} className='search'/>
        <img src={profile} className='profile'/>
      </div>


      </header>
      












    
    </div>
  );
}

export default App;
