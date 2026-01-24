import { useEffect, useRef, useState } from "react";
import MensagemChat from "../componentes/MensagemChat";
import "./Chatbot.css";

export default function Chatbot() {
  const [mensagens, setMensagens] = useState([
    { tipo: "bot", texto: "Olá! Como posso te ajudar hoje?" }
  ]);

  const [texto, setTexto] = useState("");
  const [digitando, setDigitando] = useState(false);
  const fimChatRef = useRef(null);

  useEffect(() => {
    fimChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens, digitando]);

  async function enviarMensagem() {
    if (!texto.trim()) return;

    const pergunta = texto;
    setTexto("");

    setMensagens(prev => [
      ...prev,
      { tipo: "usuario", texto: pergunta }
    ]);

    setDigitando(true);

    setTimeout(() => {
      setMensagens(prev => [
        ...prev,
        { tipo: "bot", texto: "Estou analisando sua pergunta. Aguarde um momento..." }
      ]);
      setDigitando(false);
    }, 1500);
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

        {digitando && (
          <MensagemChat tipo="bot" texto="Digitando..." />
        )}

        <div ref={fimChatRef} />
      </div>

      <div className="chat-input">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
          placeholder="Digite sua pergunta..."
        />
        <button onClick={enviarMensagem}>➤</button>
      </div>
    </div>
  );
}
