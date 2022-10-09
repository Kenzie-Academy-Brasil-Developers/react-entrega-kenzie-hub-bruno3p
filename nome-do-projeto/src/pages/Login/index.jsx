import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../components/Nav/Logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/Form";
import { NavLogin } from "../../components/Nav";
import { loginSchema } from "../Login/Loginschema";
import { useState } from "react";
import { coreApi } from "../../services/api";

const Login = ({ setUser }) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const loginUser = async (data) => {
    try {
      setLoading(true);
      const response = await coreApi.post("/sessions", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Outlet />
      <NavLogin>
        <img src={Logo} alt="" />
      </NavLogin>
      <FormLogin onSubmit={handleSubmit(loginUser)}>
        <h1>Login</h1>
        <label htmlFor="Email">Email</label>
        <input
          id="Email"
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="Password">Senha</label>
        <input
          id="Password"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submmit">Entrar</button>
        <p>Ainda não possui uma conta?</p>
        <button className="SingupButton">
          <Link className="Link" to="/Singup">
            Cadastra-se
          </Link>
        </button>
      </FormLogin>
    </>
  );
};

export default Login;
