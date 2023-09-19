import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";

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
  useEffect(() => {
    getDataHandler();
  }, []);
  return <div className="App">hello</div>;
}

export default App;
