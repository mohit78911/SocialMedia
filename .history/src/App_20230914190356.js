import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const getDataHandler = () => {
    axios
      .get("http://localhost:3800/userdata")
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return <div className="App">hello</div>;
}

export default App;
