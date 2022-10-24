import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Outlet } from "react-router-dom";
import { FormLogin } from "../../components/Form";
import { NavLogin } from "../../components/Nav";
import { loginSchema } from "./Loginschema";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext/UseContext";
import Logos  from "./Logos.png"
// import { coreApi } from "../../services/api";

export interface iLoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginFormData> = (data) => {
    loginUser(data, setLoading);
  };

  return (
    <>
      <Outlet />
      <NavLogin>
        <img src={Logos} alt="" />
      </NavLogin>
      <FormLogin onSubmit={handleSubmit(submit)}>
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
        <button type="submit">Entrar</button>
        <p>Ainda não possui uma conta?</p>
        {/* <button className="SingupButton"> */}
        <Link className="Link" to="/Singup">
          Cadastra-se
        </Link>
        {/* </button> */}
      </FormLogin>
    </>
  );
};

export default Login;
