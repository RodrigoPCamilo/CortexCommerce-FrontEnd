import "./MensagemChat.css";

export default function MensagemChat({ tipo, texto }) {
  return (
    <div className={`mensagem ${tipo}`}>
      <div className="bolha">
        {texto}
      </div>
    </div>
  );
}
