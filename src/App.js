import logo from './logo.svg';
import './App.css';
import { TextBox } from "./components/TextBox";


function App() {
  return (
    <div className="App">
      <TextBox
        formName="Sample Form Submit"
        formDescription="This is sample form using Material UI."
      />
    </div>
  );
}

export default App;
