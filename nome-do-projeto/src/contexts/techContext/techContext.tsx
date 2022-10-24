import { createContext, useContext } from "react";
import { coreApi } from "../../services/api";
import { UserContext } from "../UserContext/UseContext";
import { toast } from "react-toastify";
import { iApiError, iTechslist, iUserProviderProps } from "../types/types";
import { AxiosError } from "axios";
import { iTechContext } from "./types";





export const TechContext = createContext({} as iTechContext);

export const TechProvider = ({ children }: iUserProviderProps) => {
  const { techList, setTechlist, } = useContext(UserContext);

  const addTech = async  (data: iTechslist, 
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    ) :Promise <void> => {
    if (!techList.find((tech) => tech.id === data.id)) {
      try {
        const token = localStorage.getItem("@TOKEN");

        const response = await coreApi.post("/users/techs", data, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        toast.success("Tech adicionado com sucesso!");
        setTechlist([...techList, response.data]);
        setShowModal(false);
      } catch (error) {
        const requestError = error as AxiosError<iApiError>;
        toast.error(requestError.response?.data.error);
        
        
      }
    } else {
      toast.warn("Este tech já está cadastrado na lista.");
    }
  };

  const removeTech = async (techId:iTechslist) => {
    try {
      const deleteList = techList.filter((tech) => tech.id !== techId);

      const token = localStorage.getItem("@TOKEN");
      await coreApi.delete(`/users/techs/${techId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("tech removido com sucesso");
      setTechlist(deleteList);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.error);
      console.log(error);
    }
  };
  return (
    <TechContext.Provider
      value={{
         addTech,
        removeTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
