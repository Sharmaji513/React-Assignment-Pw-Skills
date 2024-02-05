import React from "react";
import Person from "./Components/Person";
import Button from "./Components/Button";
import Header from "./Components/Header";
import Lists from "./Components/Lists";

function App() {
  return (
    <div className="App">

      <Person name="Sachin Kumar" age="23"/>
      <Button text="click me"  onClick={()=> console.log("button is clicked")}/>
      <Header title="This is Header "/>
      <Lists items= {["Javacript" , "React" , "Nodejs"]}/>

    </div>
  );
}

export default App;
