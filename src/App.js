import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./Nav"

import "./App.css";
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import MyPage from './components/MyPage';



function App() {
  return (
    <div className="App">
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
