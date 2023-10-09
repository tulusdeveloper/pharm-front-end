import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainComponent from './components/MainComponent';
import { PrivateRoutesNew } from './utils/PrivateRoutesNew';
import { PrivateRoutes } from './utils/PrivateRoutes';
import HomeComponent from './pages/HomeComponent';
import CompanyComponent from './pages/CompayComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login />}  path="/" />
          <Route element={<PrivateRoutesNew />}>
            <Route element={<HomeComponent />} path="/home" exact />
            <Route element={<CompanyComponent />} path="/company" exact />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
