import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainComponent from './components/MainComponent';
import { PrivateRoutes } from './utils/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login />}  path="/" />
          <Route element={<PrivateRoutes />}>
            <Route element={<MainComponent />} path="/home" exact />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
