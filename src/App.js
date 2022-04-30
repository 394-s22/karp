import React, { useState } from "react";
import "./App.css";
import TextBox from "./components/Form";
import Output from "./components/Output";

const App = () => {
  const [output, setOutput] = useState("");

  return (
    <div className="App">
      <TextBox setOutput={setOutput} />
      <Output output={output} />
    </div>
  );
};

export default App;
