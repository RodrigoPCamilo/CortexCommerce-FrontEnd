import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import Perfil from "./paginas/Perfil";
import UpdatePerfil from "./paginas/UpdatePerfil";
import Layout from "./layout/Layout";
import PrivateRoute from "./componentes/routes/PrivateRoute";
import Chatbot from "./paginas/Chatbot";

function App() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />

      {/* Rotas protegidas */}
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/update-perfil" element={<UpdatePerfil />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
