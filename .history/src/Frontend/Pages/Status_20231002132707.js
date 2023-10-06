import axios from "axios";
import React from "react";

export default function Status() {
    const getStatusData = ()=>{
        axios.get("http://localhost:6600/status")
        
    }
  return (
    <div>
      <div>hello</div>
    </div>
  );
}
