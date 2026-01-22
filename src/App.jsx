import { Browser as Router,Routes,Route } from 'react-router-dom'
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import Chatbot from "./paginas/Chatbot";
import Perfil from "./paginas/Perfil";
import UpdatePerfil from "./paginas/UpdatePerfil";
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<h1>Login</h1>} />
          <Route path='/registro' element={<h1>Registro</h1>} />

          <Route path = '/chatbot' element = {<h1>Chatbot</h1>} />
          <Route path = '/perfil' element = {<h1>Perfil</h1>} />
          <Route path = '/update-perfil' element = {<h1>UpdatePerfil</h1>} />
        </Routes>
      </Router>
  );
}

export default App;
