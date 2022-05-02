import React, { useState } from "react";
import "./App.css";
import TextBox from "./components/Form";
import Output from "./components/Output";
import NavBar from './components/NavBar.js';

const App = () => {
  const [output, setOutput] = useState("");

  return (
    <div className="App">
      <NavBar />
      <TextBox setOutput={setOutput} />
      <Output output={output} />
    </div>
  );
};

export default App;
