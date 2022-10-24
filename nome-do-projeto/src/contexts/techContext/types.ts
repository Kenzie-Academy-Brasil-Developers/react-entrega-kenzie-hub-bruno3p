import { iTechslist } from "../types/types";

export  interface iTechContext {
  addTech: (
    data: iTechslist,
    
    ) => void;
  removeTech: (techId: iTechslist) => void;
  setIsShown:React.Dispatch<React.SetStateAction<boolean>>;}
