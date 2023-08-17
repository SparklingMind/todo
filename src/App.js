import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./Nav"

import "./App.css";
import "./CalendarFunc";
import CalendarFunc from "./CalendarFunc";
import Header from "./Header";
import Nav from "./Nav";
import DiaryWrite from "./components/DiaryWrite";
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import MyPage from './components/MyPage';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <CalendarFunc></CalendarFunc>
      <DiaryWrite></DiaryWrite>
      <Nav></Nav>
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
