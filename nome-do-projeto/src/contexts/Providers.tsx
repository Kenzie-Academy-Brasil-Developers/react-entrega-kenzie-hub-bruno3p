import React from "react";
import { UserProvider } from "./UserContext/UseContext";
import { TechProvider } from "./techContext/techContext";

interface iProviderProps{
  children:React.ReactNode;
}


const Providers = ({ children }:iProviderProps) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Providers;
