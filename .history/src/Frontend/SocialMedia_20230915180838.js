import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from "react-router-dom";
import UserBook from './userBook';
import Login from './Pages/Login'

export default function SocialMedia() {
    const [userData, setUserData] = useState([]);
    const getDataHandler = () => {
      axios
        .get("http://localhost:3800/userdata")
        .then((result) => {
          console.log(result.data);
          setUserData(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    useEffect(() => {
      getDataHandler();
    }, []);
    console.log("userData", userData);
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login userData={userData} />} />
        <Route path='/home' element={<UserBook/>}/> 
      </Routes>
    </div>
  )
}
