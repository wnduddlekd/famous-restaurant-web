import React from "react";
import "./App.css";
import Header from "./components/header";
import LikedList from "./components/LikedList";
import List from "./components/List";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header></Header>
      <LikedList></LikedList>
      <List></List>
    </div>
  );
}

export default App;
