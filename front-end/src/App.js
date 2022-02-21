import React from "react";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddTask />
        <Tasks />
      </div>
    </div>
  );
}
export default App;
