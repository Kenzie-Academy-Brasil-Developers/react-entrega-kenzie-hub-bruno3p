import { NavDashboard } from "../../components/Nav";
import Logo from "../../components/Nav/Logo.png";
import { Link } from "react-router-dom";
import { Divdash, Divdashs, TecList, DivUl, DivModal } from "./styled";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext/UseContext";
import { TechContext } from "../../contexts/techContext/techContext";
import ButtonImg from "../../components/Nav/Buttonadd.png";
import Delete from "../../components/Nav/delete.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { iTechslist } from "../../contexts/types/types";





const Dashboard = () => {
  const { techList, logoutUser } = useContext(UserContext);
  const [isShown, setIsShown] = useState(false);
  const { addTech, removeTech, } = useContext(TechContext);
  const { user } = useContext(UserContext);

  

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<iTechslist>({});

  const submit: SubmitHandler<iTechslist> = (data) => {
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

              <p className="Tech">Selecionar status</p>
              <select
                
                className="Tech"
                id="status"
                {...register("status")}
              >
                <option  value="Iniciante">
                  Iniciante{" "}
                </option>
                <option  value="Intermediário">
                  Intermediario{" "}
                </option>
                <option value="Avançado">
                  Avançado{" "}
                </option>
              </select>

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
