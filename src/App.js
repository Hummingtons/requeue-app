import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login';
import SidebarRoute from './Components/SidebarRoute';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/*' element={<SidebarRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;