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
import React from "react";

export default function App() {
  const getDataHandler = () => {
    axios
      .get("localhost:6600/users")
      .then((result) => {
        console.log("data", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(()=>{
    getDataHandler()
  })
  return <div></div>;
}
