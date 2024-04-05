import './App.css';
import Form from './component/form';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/home/form" element={<Form/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
