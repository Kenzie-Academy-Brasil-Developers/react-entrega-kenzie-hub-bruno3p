import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../components/Nav/Logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FormSinup } from "../../components/Form";
import { NavSingup } from "../../components/Nav";
import { useState } from "react";
import { registerSchema } from "./Singupschema";
import { coreApi } from "../../services/api";
const Singup = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  async function registerUser(data) {
    try {
      setLoading(true);
      const response = await coreApi.post("/users", data);
      console.log(response);
      setAlert({
        type: "sucess",
        message: response.data.message,
      });
      setTimeout(() => {
        setAlert(null);
        navigate("/");
      }, 3000);
    } catch (error) {
      setAlert({
        type: "error",
        message: error.response.data.error,
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Outlet />
      <NavSingup>
        <img src={Logo} alt="" />
        <button>
          <Link className="Link" to="/">
            Voltar
          </Link>
        </button>
      </NavSingup>
      <FormSinup onSubmit={handleSubmit(registerUser)}>
        <h1>Crie sua conta</h1>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor="passwordConfirm"> Confirmar Senha</label>
        <input
          id="passwordConfirm"
          type="password"
          placeholder="Digite novamente  sua senha"
        />

        <label htmlFor="bio">Bio</label>
        <input
          id="bio"
          type="bio"
          placeholder="Digite sua bio"
          {...register("bio")}
        />
        {errors.bio && <p>{errors.bio.message}</p>}

        <label htmlFor="contact">Contato</label>
        <input
          id="contact"
          type="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {errors.contact && <p>{errors.contact.message}</p>}

        <label htmlFor="course_module">Selecionar módulo</label>
        <select
          name=""
          id="course_module"
          type="course_module"
          {...register("course_module")}
        >
          <option type="course_module" value="Primeiro módulo">
            Primeiro módulo{" "}
          </option>
          <option type="course_module" value="Segundo módulo">
            Segundo módulo{" "}
          </option>
          <option type="course_module" value="Terceiro módulo">
            Terceiro módulo{" "}
          </option>
          <option type="course_module" value="Quarto módulo">
            Quarto módulo{" "}
          </option>
        </select>
        {errors.course_module && <p>{errors.course_module.message}</p>}

        <button type="submmit" disabled={loading}>
          Cadastrar
        </button>
        {loading ? "Cadastrando..." : ""}
        {alert && <p>{alert.message}</p>}
      </FormSinup>
    </>
  );
};

export default Singup;
