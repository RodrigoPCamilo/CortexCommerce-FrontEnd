import { useNavigate } from "react-router-dom";
import "./Registro.css";
function Registro() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefalt();

        // Depois aqui você integra com a API de cadastro
        navigate("/");
    };

    return (
        <div className="registro-container">
            <div className="registro-cartao">
                <h1 className="registro-titulo">CortexCommercer Cadastro</h1>
                <p className="registro-subtitulo">Crie sua conta</p>

                <form onSubmit={handleSubmit}>
                    <div className="registro-field">
                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder="Seu nome completo"
                            required />
                    </div>
                    <div className="registro-field">
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="seu@email.com"
                            required
                        /></div>
                    <div className="registro-field">
                        <label>Senha</label>
                        <input
                            type="Senha"
                            placeholder="********"
                            required
                        /></div>
                    <div className="registro-field">
                        <label>Categoria Favorita</label>
                        <input
                            type="text"
                            placeholder="Ex: Eletrônicos, Moda, Livros"
                        />
                    </div>
                    <div className="registro-field">
                        <label>Orçamento Médio</label>
                        <input
                            type="text"
                            placeholder="Ex: R$ 1000,00"
                        />
                    </div>
                    <div className="registro-field">
                        <label>Loja Preferida</label>
                        <input
                            type="text"
                            placeholder="Ex: Amazon, Magazine Luiza"
                        />
                    </div>
                    <button type="submit" className="registro-botao">
                        Cadastrar</button>
                </form>
                <button
                    className="registro-link"
                    onClick={()=> navigate("/")}>
                    Já tenho uma conta
                </button>
            </div >
        </div >
    );
}

export default Registro;
