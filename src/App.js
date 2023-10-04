import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={MainComponent} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
