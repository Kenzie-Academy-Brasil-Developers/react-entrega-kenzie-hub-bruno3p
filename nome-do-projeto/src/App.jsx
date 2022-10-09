import { useState } from "react";
import "./App.css";
import Routes from "./routes";
import Global from "./styles/global";
import './styles/colors.css';
function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Global />
      <Routes  user={user}  setUser={setUser} />
    </>
  );
}

export default App;
