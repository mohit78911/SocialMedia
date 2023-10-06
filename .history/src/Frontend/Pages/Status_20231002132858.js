import axios from "axios";
import React, { useEffect } from "react";

export default function Status() {
    const [statusData,set]
  const getStatusData = () => {
    axios
      .get("http://localhost:6600/status")
      .then((result) => {
        console.log("status", result.data);
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
