import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { FormSinup } from "../../components/Form";
import { NavSingup } from "../../components/Nav";
import { useContext, useState } from "react";
import { registerSchema } from "./Singupschema";
import { UserContext } from "../../contexts/UserContext/UseContext";
import Logos  from "./Logos.png"
export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  bio: string;
  contact: string;
  course_module: string;
}



const Singup = () => {
  const [loading, setLoading] = useState(false);
  const { registerUser } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterFormData> = async (data) => {
    registerUser(data, setLoading);
  };



  return (
    <>
      <Outlet />
      <NavSingup>
        <img src={Logos} alt="" />
        <button>
          <Link className="Link" to="/">
            Voltar
          </Link>
        </button>
      </NavSingup>
      <FormSinup onSubmit={handleSubmit(submit)}>
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
          
          id="course_module"
          
          {...register("course_module")}
        >
          <option  value="Primeiro módulo">
            Primeiro módulo{" "}
          </option>
          <option  value="Segundo módulo">
            Segundo módulo{" "}
          </option>
          <option  value="Terceiro módulo">
            Terceiro módulo{" "}
          </option>
          <option  value="Quarto módulo">
            Quarto módulo{" "}
          </option>
        </select>
        {errors.course_module && <p>{errors.course_module.message}</p>}

        <button type="submit" disabled={loading}>
          Cadastrar
        </button>
        {loading ? "Cadastrando..." : ""}
        
      </FormSinup>
    </>
  );
};

export default Singup;
