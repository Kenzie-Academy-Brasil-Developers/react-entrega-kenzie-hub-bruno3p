import { NavDashboard } from "../../components/Nav";
import Logo from "../../components/Nav/Logo.png";
import { Link, Outlet } from "react-router-dom";
import { Divdash, Divdashs } from "./styled";
const Dashboard = ({ user }) => {
  console.log(user);
  function cleanLocal (elemt)  {
    localStorage.clear()
  }




  return (
    <>
      <Outlet />
      <NavDashboard>
        <img src={Logo} alt="" />
        <button ><Link onClick={cleanLocal}  className="Link" to="/">Sair</Link></button>
      </NavDashboard>
      <Divdash>
      <p className="Pfirth"  >Olá,{user.name}</p>
      <p className="Psecond"  >{user.course_module}</p>
      </Divdash>
      <Divdashs>
        <div className="Divone">
        <p className="Colordif">Que pena! Estamos em desenvolvimento :(  </p>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
        <div className="Divtwo">
        <p></p>
        <p></p>
        </div>

      </Divdashs>
    </>
  );
};

export default Dashboard;
