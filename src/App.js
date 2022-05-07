import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Output from "./components/Output";
import NavBar from "./components/NavBar.js";

const App = () => {
  const [output, setOutput] = useState("");

  return (
    <div className="App">
      <NavBar />
      <div className="split-screen">
        <Form output={output} setOutput={setOutput} />
        <Output output={output} />
      </div>
    </div>
  );
};

export default App;
