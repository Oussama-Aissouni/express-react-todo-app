import React from "react";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import PopUp from "./components/PopUp/PopUp";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddTask />
      </div>
    </div>
  );
}
export default App;
