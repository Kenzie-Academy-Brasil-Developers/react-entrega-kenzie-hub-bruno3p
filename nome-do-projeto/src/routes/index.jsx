import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/Login";
import Singup from "../pages/Singup";



const RoutesMain = ({user,setUser}) => (
  <Routes>
    <Route path="/" element={<Login setUser={setUser} />} />
    <Route path="/Singup" element={<Singup/>} />
    <Route path="/dashboard" element={<Dashboard user={user} />} />
  </Routes>
);


export default RoutesMain;