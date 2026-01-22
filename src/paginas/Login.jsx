import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Depois aqui você integra com a API
    navigate("/chatbot");
  };

  return (
    <div className="login-fundo">
      <div className="login-cartao">
        <h1 className="login-titulo">CortexCommerce</h1>
        <p className="login-subtitulo">Faça login para continuar</p>

        <form onSubmit={handleSubmit}>
          <div className="login-campo">
            <label>Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="login-campo">
            <label>Senha</label>
            <input
              type="password"
              placeholder="********"
              required
            />
          </div>

          <button type="submit" className="login-botao">
            Entrar
          </button>
        </form>

        <button
          className="login-link"
          onClick={() => navigate("/registro")}
        >
          Cadastrar usuário
        </button>
      </div>
    </div>
  );
}

export default Login;
