// import React from "react";
// import SocialMedia from "./Frontend/SocialMedia";

// function App() {
//   return (
//     <div>
//       <SocialMedia />
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
      .get("http://localhost:6600/like")
      .then((result) => {
        console.log("data", result.data);
        setData(result.data.result); 
        localStorage.setItem("userData", JSON.stringify([result.data.]));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDataHandler();
  }, []);
  console.log("data vala data", data);
  return (
    <div>
      <div>hello this component for just checking data</div>
      <div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
            {/* {data.map((value, i) => {
              <tr>
                <td>{value.name}</td>
                <td>{value.name}</td>
              </tr>
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
