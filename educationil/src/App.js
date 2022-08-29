import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Professor from './pages/Professor';

function App() {
  return (
    <Routes>

      <Route path='/' element={<Home />} /> 
      <Route path='/professor' element={<Professor />} />
    </Routes>
  );
}

export default App;
