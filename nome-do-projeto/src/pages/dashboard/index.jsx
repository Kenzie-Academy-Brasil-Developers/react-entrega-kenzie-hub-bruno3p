import { NavDashboard } from "../../components/Nav";
import Logo from "../../components/Nav/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Divdash, Divdashs, TecList, DivUl, DivModal } from "./styled";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UseContext";
import { TechContext } from "../../contexts/techContext";
import ButtonImg from "../../components/Nav/Buttonadd.png";
import Delete from "../../components/Nav/delete.png";
import { useForm } from "react-hook-form";

const Dashboard = () => {
  const { techList, logoutUser } = useContext(UserContext);
  const [isShown, setIsShown] = useState(false);
  const { addTech, removeTech } = useContext(TechContext);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const { user } = useContext(UserContext);

  const submit = (data) => {
    addTech(data, setIsShown);
  };

  return (
    <>
      <NavDashboard>
        <img src={Logo} alt="" />
        <button onClick={logoutUser} className="Link">
          Sair
        </button>
      </NavDashboard>
      <Divdash>
        <p className="Pfirth">Olá,{user.name}</p>
        <p className="Psecond">{user.course_module}</p>
      </Divdash>
      <Divdashs>
        <p className="Colordif">Tecnologias </p>
        <button onClick={handleClick}>
          <img src={ButtonImg} alt="" />
        </button>
        <DivModal style={{ display: isShown ? "flex" : "none" }}>
          <form onSubmit={handleSubmit(submit)}>
            <div className="Modal">
              <div className="TitleModal">
                <p className="PmodalTitle">Cadastrar Tecnologia</p>
                <Link
                  onClick={handleClick}
                  className="CloseModal"
                  to="/dashboard"
                >
                  x
                </Link>
              </div>
              <p className="Tech">Nome</p>
              <input
                id="title"
                type="title"
                placeholder="Nome da Tecnologia"
                {...register("title")}
              />
              {errors.name && <p>{errors.name.message}</p>}
              <p className="Tech">Selecionar status</p>
              <select
                type="status"
                className="Tech"
                name=""
                id="status"
                {...register("status")}
              >
                <option type="status" value="Iniciante">
                  Iniciante{" "}
                </option>
                <option type="status" value="Intermediário">
                  Intermediario{" "}
                </option>
                <option type="status" value="Avançado">
                  Avançado{" "}
                </option>
              </select>
              {errors.name && <p>{errors.name.message}</p>}
              <button type="submit" className="Registertech">
                Cadastrar Tecnologia
              </button>
            </div>
          </form>
        </DivModal>
      </Divdashs>
      <DivUl>
        <TecList>
          {techList.length > 0 &&
            techList.map((element, index) => (
              <li className="List" key={index}>
                <p className="Title">{element.title}</p>
                <div className="Divlist">
                  <p>{element.status}</p>
                  <button onClick={() => removeTech(element.id)}>
                    <img src={Delete} alt="" />
                  </button>
                </div>
              </li>
            ))}
        </TecList>
      </DivUl>
    </>
  );
};

export default Dashboard;
