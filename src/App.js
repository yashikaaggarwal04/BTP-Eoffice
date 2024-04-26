import './App.css';
import Form from './component/form';
import Home from './component/Home';
// import Login from './component/Login';
import Signup from './component/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Login from './component/login_2';
import Register from './component/register';

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/home/form" element={<Form/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
