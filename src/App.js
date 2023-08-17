import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import MyPage from './components/MyPage';

function App() {
  return (
    <div className="App">
      <MyPage />
    </div>
  );
}


export default App;
