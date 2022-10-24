import { useState } from "react";
import "./App.css";
import Routes from "./routes";
import Global from "./styles/global";
import "./styles/colors.css";
import Providers from "./contexts/Providers";
function App() {
  // const [user, setUser] = useState(null);
  return (
    <>
      <Providers>
        <Global />
        <Routes />
      </Providers>
    </>
  );
}

export default App;
