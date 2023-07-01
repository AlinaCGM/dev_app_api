import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "@fontsource/ibm-plex-sans/500.css";

import Home from "./pages/home/Home";
import NavBar from "./components/navBar/NavBar";
import Customers from "./pages/customers/Customers";
import LoggedOut from "./components/logIn/LoggedOut";
import LogIn from "./components/logIn/LogIn";
import "./App.css";

function App() {
  return (
    <Box className="App" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/loggedOut" element={<LoggedOut />}></Route>
        <Route path="/logIn" element={<LogIn />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
