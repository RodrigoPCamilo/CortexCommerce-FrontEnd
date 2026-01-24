import { NavLink, useNavigate } from "react-router-dom";
import "./MenuLateral.css";

export default function MenuLateral() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // futuro: limpar token / usuário logado
    navigate("/");
  };

  return (
    <aside className="menu-lateral">
      <div>
        <h1 className="logo">CortexCommerce</h1>

        <nav>
          <NavLink
            to="/chatbot"
            className={({ isActive }) =>
              isActive ? "item ativo" : "item"
            }
          >
            Chatbot
          </NavLink>

          <NavLink
            to="/perfil"
            className={({ isActive }) =>
              isActive ? "item ativo" : "item"
            }
          >
            Perfil do Usuário
          </NavLink>
        </nav>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Sair
      </button>
    </aside>
  );
}
