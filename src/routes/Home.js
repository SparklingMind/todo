import React from "react";
import CalendarFunc from "../components/CalendarFunc";
import Header from "../components/Header.js";
import DiaryWrite from "../components/DiaryWrite";
import TodoComponent from "../TodoComponent";

function Home() {
  return (
    <div>
      <Header></Header>
      <CalendarFunc></CalendarFunc>
      <TodoComponent></TodoComponent>
      <DiaryWrite></DiaryWrite>
      
    </div>
  );
}

export default Home;
