import MenuLateral from "../componentes/MenuLateral";
import MensagemChat from "../componentes/MensagemChat";
import "./Chatbot.css";
function Chatbot() {
      const mensagem = [
        {
          tipo: "Bot",
          texto :"Olá! Sou o assistente do CortexCommerce. Como posso ajudá-lo hoje?",
          hora: "10:00 AM",
        },
      ];

    return (
      <div className="pagina-chat">
        <MenuLateral />
        <div className="conteudo-chat">
        <div className="chat-cartao">
          <div className="chat-cabecalho">
            <h2> Chat bot IA</h2>
            <h3></h3>
            <p>Faça sua pergunta sobre prudutos e de o Orçamento Medio</p>
            </div>

            <div className="chat-mensagens">
              {mensagem.map((msg,index) =>(
                <MensagemChat key = {index}{...msg}/>
              ))}
              </div>
              <div className="chat-imput">
                <input type="text" placeholder="Digite sua pergunta..."/>
                <button>➤</button>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Chatbot;
  