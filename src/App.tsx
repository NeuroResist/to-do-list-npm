import React from "react";
import _ from "lodash";
import CreateToDo from "./components/CreateToDo";

function App() {
  //alert(_.capitalize('FRED'))
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-blue text-3xl font-bold underline">Тудушка React</p>
        <CreateToDo></CreateToDo>
        Learn React
      </header>
    </div>
  );
}

export default App;
