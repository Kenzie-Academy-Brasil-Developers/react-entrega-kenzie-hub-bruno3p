import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iLoginFormData } from "../../pages/Login";
import { coreApi } from "../../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { iRegisterFormData } from "../../pages/Singup";
import { iUser, iTechslist, iApiError, iUserProviderProps } from "../types/types";
import { iUseContext } from "./types";



export const UserContext = createContext({} as iUseContext);
export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [isShown, setIsShown] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [techList, setTechlist] = useState([] as iTechslist[]);
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        setGlobalLoading(true);
        try {
          const response = await coreApi.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);

          setTechlist(response.data.techs);

          navigate(currentRoute ? currentRoute : "/dashboard");
        } catch (error) {
          const requestError = error as AxiosError<iApiError>;
          toast.error(requestError.response?.data.error);
          localStorage.removeItem("@TOKEN");
          navigate("/");
        } finally {
          setGlobalLoading(false);
        }
      }
    })();
  }, []);

  const loginUser = async (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await coreApi.post("/sessions", data);
      setUser(response.data.user);
      setTechlist(response.data.user.techs);
      localStorage.setItem("@TOKEN", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setUser(null);
    setTechlist([]);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  const registerUser = async (
    data: iRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await coreApi.post("/users", data);
      console.log(response);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.error);
      setTimeout(() => {}, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        registerUser,
        techList,
        setTechlist,
        logoutUser,
        setCurrentRoute,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
