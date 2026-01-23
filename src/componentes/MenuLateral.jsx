import { NavLink } from "react-router-dom";
import "./MenuLateral.css";

function MeenuLateral() {
    return(
        <aside className="Menu-lateral">
            <h1 className="logo">CortexCommerce</h1>

            <nav>
                <NavLink
                    to="/chatbot"
                    className={({ isActive }) => (isActive ? "item ativo" : "item")}
                >Chatbot IA
                </NavLink>

                <NavLink
                    to="/perfil"
                    className={({ isActive }) => (isActive ? "item ativo" : "item")}
                >
                    Perfil do Usuario
                </NavLink>
            </nav>
        </aside>
    );
    
}
export default MeenuLateral;