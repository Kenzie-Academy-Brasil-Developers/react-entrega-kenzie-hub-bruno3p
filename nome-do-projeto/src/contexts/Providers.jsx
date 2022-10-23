import React from "react";
import { UserProvider } from "./UseContext";
import {TechProvider} from "./techContext"

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechProvider>
        {children}
        </TechProvider>
    </UserProvider>
  );
};

export default Providers;
