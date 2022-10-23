import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { coreApi } from "../services/api";


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [globalLoading, setGlobalLoading] = useState();
  const [alert, setAlert] = useState(null);
  const [techList, setTechlist] = useState([]);
  const [currentRoute, setCurrentRoute] = useState(null);
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
          console.log(error)
          localStorage.removeItem("@TOKEN");
          navigate("/");
        } finally {
          setGlobalLoading(false);
        }
      }
    })();
  }, []);

  const loginUser = async (data, setLoading) => {
    try {
      setLoading(true);
      const response = await coreApi.post("/sessions", data);
      setUser(response.data.user);
      setTechlist(response.data.user.techs)
      localStorage.setItem("@TOKEN", response.data.token);
      navigate("/dashboard");
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
   
  const logoutUser = () => {
 
   setUser(null)
   setTechlist([])
   localStorage.removeItem("@TOKEN")
   navigate("/")
  }



  async function registerUser(data, setLoading) {
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
    <UserContext.Provider
      value={{
        user,
        setUser,
        // loading,
        // setLoading,
        alert,
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
