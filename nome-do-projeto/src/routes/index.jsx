import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import ProtectedRoutes from "../components/ProtectedRoutes";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Singup" element={<Singup />} />
    <Route path="/dashboard" element={<ProtectedRoutes />}>
      <Route index element={<Dashboard />} />
    </Route>
  </Routes>
);

export default RoutesMain;
