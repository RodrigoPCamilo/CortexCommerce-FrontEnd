import "./MensagemChat.css";

function MensagemChat({ tipo, texto, hora }) {
  return (
    <div className={`mensagem ${tipo}`}>
      <span>{texto}</span>
      <span className="hora">{hora}</span>
    </div>
  );
}

export default MensagemChat;
