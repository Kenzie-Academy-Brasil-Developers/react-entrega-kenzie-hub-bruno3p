import { createContext, useContext } from "react";
import { coreApi } from "../services/api";
import { UserContext } from "../contexts/UseContext";
import { toast } from "react-toastify";
export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { techList, setTechlist } = useContext(UserContext);
  
  const addTech = async (data, setShowModal) => {
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
        console.log(error);
        // toast.error(error.response.error);
      }
    } else {
      toast.alert("Este tech já está cadastrado na lista.");
    }
  };

  const removeTech = async (techId) => {
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
      console.log(error);
      // toast.error(error.response.data.error);
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
