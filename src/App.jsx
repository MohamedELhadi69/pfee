import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import Home from './pages/home';
import Report from './pages/report';
import Admin from './pages/Admin';
import Mngrp from './pages/mngrp';
import Mngprfl from './pages/mngprfl';
import Profile from './pages/profile';
import Auth from './pages/Auth';
import Emp from './pages/Emp';
import AdLog from './pages/Admin-Login';
import EmpLog from './pages/Emp-log';
import './App.css';


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Report'element={<Report/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Admin-report' element={<Mngrp/>}/>
        <Route path='/Admin-prfl' element={<Mngprfl/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Add' element={<Emp/>}/>
        <Route path='/AdLog'element={<AdLog/>}/>
        <Route path='/EmpLog'element={<EmpLog/>}/>
        </Routes>

    </>
  );
}


