import { useEffect, useRef, useState } from "react";
import MensagemChat from "../componentes/MensagemChat";
import api from "../services/client";
import "./Chatbot.css";


export default function Chatbot() {
  const [mensagens, setMensagens] = useState([
    { tipo: "bot", texto: "Olá! Como posso te ajudar hoje?" }
  ]);

  const [texto, setTexto] = useState("");
  const [digitando, setDigitando] = useState(false);
  const fimChatRef = useRef(null);

  // Scroll automático
  useEffect(() => {
    fimChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens, digitando]);

  // Pega o usuário logado
  const usuarioId = localStorage.getItem("usuarioId"); // ou outro campo que você salve no login

  async function enviarMensagem() {
    if (!texto.trim()) return;

    const pergunta = texto;
    setTexto("");

    // Adiciona a mensagem do usuário
    setMensagens(prev => [...prev, { tipo: "usuario", texto: pergunta }]);
    setDigitando(true);

    try {
      // Mensagem temporária de “digitando”
      setMensagens(prev => [...prev, { tipo: "bot", texto: "Estou analisando sua pergunta..." }]);

      // Chamada à API
      const response = await api.post(`/ia/perguntar/${usuarioId}`, { pergunta });
      const respostaBot = response.data.resposta;

      // Atualiza a última mensagem do bot com a resposta real
      setMensagens(prev => {
        const msgs = [...prev];
        msgs.pop();
        msgs.push({ tipo: "bot", texto: respostaBot });
        return msgs;
      });

    } catch (error) {
      console.error("Erro no Chatbot:", error);

      setMensagens(prev => {
        const msgs = [...prev];
        msgs.pop();
        msgs.push({ tipo: "bot", texto: "Ops! Ocorreu um erro ao processar sua pergunta." });
        return msgs;
      });

    } finally {
      setDigitando(false);
    }
  }

  return (
    <div className="chat-card">
      <div className="chat-header">
        <h2>Chatbot IA</h2>
      </div>

      <div className="chat-mensagens">
        {mensagens.map((msg, index) => (
          <MensagemChat key={index} tipo={msg.tipo} texto={msg.texto} />
        ))}

        {digitando && <MensagemChat tipo="bot" texto="Digitando..." />}
        <div ref={fimChatRef} />
      </div>

      <div className="chat-input">
        <input
          value={texto}
          onChange={e => setTexto(e.target.value)}
          onKeyDown={e => e.key === "Enter" && enviarMensagem()}
          placeholder="Digite sua pergunta..."
        />
        <button onClick={enviarMensagem}>➤</button>
      </div>
    </div>
  );
}
