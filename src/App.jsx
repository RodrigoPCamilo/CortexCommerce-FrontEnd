import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import Chatbot from "./paginas/Chatbot";
import Perfil from "./paginas/Perfil";
import UpdatePerfil from "./paginas/UpdatePerfil";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas SEM layout */}
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Rotas COM layout */}
        <Route element={<Layout />}>
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/update-perfil" element={<UpdatePerfil />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
