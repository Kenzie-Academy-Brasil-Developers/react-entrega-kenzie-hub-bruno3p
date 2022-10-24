import { iLoginFormData } from "../../pages/Login";
import { iRegisterFormData } from "../../pages/Singup";
import { iUser, iTechslist } from "../types/types";


  
  export  interface iUseContext {
    user: iUser | any;
    techList: iTechslist[];
    setTechlist: React.Dispatch<React.SetStateAction<iTechslist[]>>;
    setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>;
    loginUser: (
      data: iLoginFormData,
      setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => void;
    logoutUser: () => void;
    registerUser: (
      data: iRegisterFormData,
      setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => void;
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
    
  }