import { iTechslist } from "../types/types";

export  interface iTechContext {
  addTech:  (data: iTechslist, 
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    )=> void;
  removeTech: (techId: iTechslist) => void;
  }
