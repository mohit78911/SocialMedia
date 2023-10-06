import axios from "axios";
import React, { useEffect,useState } from "react";

export default function Status() {
  const [statusData, setStatusData] = useState([]);

  const getStatusData = () => {
    axios
      .get("http://localhost:6600/status")
      .then((result) => {
        console.log("status", result.data);
        setStatusData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getStatusData();
  }, []);
  return (
    <div>
      <div>hello</div>
    </div>
  );
}
