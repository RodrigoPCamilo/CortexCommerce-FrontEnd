import { useEffect, useState } from "react";
import UsuarioAPI from "../services/UsuarioAPI";
import IaAPI from "../services/IaAPI";
import "./Perfil.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const lojasMap = {
  0: "Shopee",
  1: "Mercado Livre",
  2: "Amazon",
  3: "Magazine Luiza",
  4: "Loja Oficial"
};

function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const usuarioId = localStorage.getItem("usuarioId");

        if (!usuarioId) {
          console.error("Usuário não autenticado");
          return;
        }

        const dadosUsuario = await UsuarioAPI.obterAsync(usuarioId);
        const historicoIa = await IaAPI.historicoAsync();

        setUsuario(dadosUsuario);
        setHistorico(historicoIa);
      } catch (error) {
        console.error("Erro ao carregar perfil", error);
      } finally {
        setLoading(false);
      }
    }

    carregarPerfil();
  }, []);

  if (loading) {
    return <p className="perfil-loading">Carregando perfil...</p>;
  }

  if (!usuario) {
    return <p className="perfil-erro">Erro ao carregar dados do usuário.</p>;
  }

  return (
    <div className="perfil-container">
      <div className="perfil-wrapper">

        {/* 🔹 BLOCO PERFIL */}
        <div className="perfil-card">
          <h2>Dados Pessoais</h2>

          <p><strong>Nome:</strong> {usuario.nome}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p>
            <strong>Categoria Favorita:</strong>{" "}
            {usuario.categoriaFavorita || "—"}
          </p>
          <p>
            <strong>Orçamento Médio:</strong>{" "}
            {usuario.orcamentoMedio
              ? `R$ ${usuario.orcamentoMedio.toFixed(2)}`
              : "—"}
          </p>
          <p>
            <strong>Loja Preferida:</strong>{" "}
            {lojasMap[usuario.lojaPreferida] || "Não informada"}
          </p>
        </div>

        {/* 🔹 BLOCO HISTÓRICO (COM SCROLL) */}
        <div className="perfil-card historico-container">
          <h2>Histórico da IA</h2>

          {historico.length === 0 && (
            <p>Nenhuma interação registrada.</p>
          )}

          {historico.map((item, index) => (
            <div key={index} className="historico-item">
              <p className="historico-pergunta">
                <strong>Pergunta:</strong> {item.pergunta}
              </p>

              <div className="historico-resposta">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {item.respostaGerada}
                </ReactMarkdown>
              </div>

              <small>
                {new Date(item.data).toLocaleString("pt-BR")}
              </small>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Perfil;
