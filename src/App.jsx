import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import Chatbot from "./paginas/Chatbot";
import Perfil from "./paginas/Perfil";
import UpdatePerfil from "./paginas/UpdatePerfil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/update-perfil" element={<UpdatePerfil />} />
      </Routes>
    </Router>
  );
}

export default App;

