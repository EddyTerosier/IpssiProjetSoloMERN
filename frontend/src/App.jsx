import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./Components/Context/AuthContext.jsx";

import Login from "./Components/Login/Login.jsx";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register.jsx";
import Admin from "./Components/Admin/Admin.jsx";
import Annonce from "./Components/Annonce/Annonce.jsx";
import Wrapper from "./Components/Wrapper/Wrapper.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <AuthProvider>
      <div>
        <ToastContainer />
      </div>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/admin"} element={<Admin />} />
            <Route path={"/annonces"} element={<Annonce />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
