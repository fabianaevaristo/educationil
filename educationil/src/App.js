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
      
      <section className='banner'>
        <h1 className='banner-titulo'> 
          Get Started Your <br />
          <span>Online Lesson</span> 
        </h1>
        <p className='banner-paragrafo'> It is long established that a reader will be<br />
        distracted by the <br />
        readable popular and best content</p>

        <a href="#" className='botao'> Get Started Today </a>
      </section>

      <section className='categoria'>
        <p className='categoria-paragrafo'> Browse Categories </p>
        <h1 className='categoria-titulo'>Popular Topics to Learn</h1>
        <ul className='lista'>
          <li>
            <h2>  Business & Management </h2>
            <p> 3 courses </p>
          </li>

          <li>
            <h2>  Design Architect </h2>
            <p> 5 courses </p>
          </li>

          <li>
            <h2>  Business Analysis </h2>
            <p> 2 courses </p>
          </li>

          <li>
            <h2> Computer Science </h2>
            <p> 7 courses </p></li>

          <li>
            <h2> Data Science & Analytics </h2>
            <p> 3 courses </p></li>

          <li>
            <h2> Engineering & Architecture </h2>
            <p> 2 courses </p></li>

          <li>
            <h2>  Foreign Language </h2>
            <p> 2 courses </p></li>

          <li>
            <h2>  Artificial Intelligence </h2>
            <p> 7 courses </p>
          </li>
           
        </ul>
      </section>









    
    </div>
  );
}

export default App;
