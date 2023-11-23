import React, { useEffect } from "react";
import "./NewUi.css";
import UINavbar from "./UINavbar";
import SideBar from "./SideBar";
import UiFeed from "./UiFeed";
import { Route, Routes } from "react-router-dom";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";

export default function UiNew() {

  //get_logedin_user_data
  const [user, setUser] = useState([]);
  const getUserDataHandler = () => {
    axios
      .get("http://localhost:6600/userlogin/user", {
        headers: { authorization: token },
      })
      .then((result) => {
        setUser(result.data);
        localStorage.setItem("userDetails", JSON.stringify(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
useEffect(()=>{
  
})
  return (
    <div>
      <div className="Ui_Navbar">
        <UINavbar />
      </div>
      <div className="flexUi">
        <div className="Ui_First">
          <SideBar />
        </div>
        <div className="Ui_Second">
          <UiFeed />
        </div>
      </div>
       
    </div>
  );
}
