import React from "react";
import CalendarFunc from "../components/CalendarFunc";
import Header from "../components/Header.js";
import DiaryHome from "../components/DiaryHome";

function Home() {
  return (
    <div>
      <Header></Header>
      <CalendarFunc></CalendarFunc>
      <DiaryHome></DiaryHome>
    </div>
  );
}

export default Home;
