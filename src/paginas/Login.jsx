import {link, useNavigate} from "react-router-dom";
import { use } from "react";
import "./login.css";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    function handleLogin(e) {
        e.preventDefalt();
        if(email && senha){
            navigate("/chatbot");
        }
    }
    return(
        <div className="login-fundo">
            <div className="login-cartao">
                <h1 className="login-titulo">CortexCommercer</h1>
                <p className="login-subtitulo">faça login para continuar</p>
                <form onSubmit={handleLogin}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Senha</label>
                    <input
                        type="Senha"
                        placeholder="********"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <button type="Entrar">Entrar</button>
                </form>

                <link className="login-link" to="/registro">
                Cadastrar Usuário
                </link>
            </div>
        </div>
    )
}