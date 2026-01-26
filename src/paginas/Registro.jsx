import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UsuarioAPI from "../services/UsuarioAPI"; 
import "./Registro.css";

function Registro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    categoriaFavorita: "",
    orcamentoMedio: "",
    lojaPreferida: ""
  });

  const [erros, setErros] = useState({});
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [toast, setToast] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

 
  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

 
  function validarSenha(senha) {
    return /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(senha);
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novosErros = {};

    if (!validarEmail(form.email)) {
      novosErros.email = "Email inválido";
    }

    if (!validarSenha(form.senha)) {
      novosErros.senha = "Senha fraca (mín. 6 caracteres, letra e número)";
    }

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    setErros({});

    try {
      
      const usuarioCriado = await UsuarioAPI.criarAsync(form);

      
      setToast("Cadastro realizado com sucesso!");

      
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);

      
      setToast(
        error.response?.data?.mensagem ||
        "Erro ao cadastrar usuário. Tente novamente."
      );
    }
  };

  return (
    <div className="registro-container">
      {toast && <div className="toast">{toast}</div>}

      <div className="registro-cartao">
        <h1 className="registro-titulo">CortexCommerce Cadastro</h1>
        <p className="registro-subtitulo">Crie sua conta</p>

        <form onSubmit={handleSubmit}>
          <div className="registro-field">
            <label>Nome</label>
            <input
              name="nome"
              placeholder="Nome Completo"
              onChange={handleChange}
              required
            />
          </div>

          <div className="registro-field">
            <label>Email</label>
            <input
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              required
            />
            {erros.email && <span className="erro-texto">{erros.email}</span>}
          </div>

          <div className="registro-field">
            <label>Senha</label>
            <div className="campo-senha">
              <input
                name="senha"
                placeholder="*********"
                type={mostrarSenha ? "text" : "password"}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="btn-olho"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                👁
              </button>
            </div>
            {erros.senha && <span className="erro-texto">{erros.senha}</span>}
          </div>

          <div className="registro-field">
            <label>Categoria Favorita</label>
            <input
              name="categoriaFavorita"
              placeholder="Ex: Eletrônicos, Moda, Esportes..."
              onChange={handleChange}
            />
          </div>

          <div className="registro-field">
            <label>Orçamento Médio</label>
            <input
              name="orcamentoMedio"
              placeholder="R$ 1000,00"
              onChange={handleChange}
            />
          </div>

          <div className="registro-field">
            <label>Loja Preferida</label>
            <input
              name="lojaPreferida"
              placeholder="Ex: Amazon, Magazine Luiza..."
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="registro-botao">
            Cadastrar
          </button>
        </form>

        <button
          className="registro-link"
          onClick={() => navigate("/")}
        >
          Já tenho uma conta
        </button>
      </div>
    </div>
  );
}

export default Registro;
