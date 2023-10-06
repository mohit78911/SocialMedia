// import React from "react";
// import SocialMedia from "./Frontend/SocialMedia";

// function App() {
//   return (
//     <div>
//       <SocialMedia/>
//     </div>
//   );
// }
// export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const getDataHandler = () => {
    axios
      .get("http://localhost:6600/users")
      .then((result) => {
        console.log("data", result.data);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDataHandler();
  }, []);
  clg
  return (
    <div>
      <div>hello this component for just checking data</div>
    </div>
  );
}
