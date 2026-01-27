# CortexCommerce – FrontEnd React + Vite

## Introdução

## 📌 Descrição Geral do Projeto:

O CortexCommerce – FrontEnd é a interface gráfica da aplicação CortexCommerce, responsável por permitir a interação do usuário com o sistema de forma intuitiva e responsiva.
Este front-end consome a API do back-end para autenticação, gerenciamento de perfil e comunicação com o chatbot de Inteligência Artificial.

## 🎯 Objetivos:

. Fornecer uma interface amigável para o usuário

. Consumir os endpoints da API CortexCommerce

. Permitir cadastro e login 

. Integrar um chatbot com IA

. Exibir histórico de pesquisas do usuário

___

# Visão Geral do Sistema

## 🏗️ Arquitetura do Front-End:

O front-end segue uma arquitetura baseada em componentes, promovendo reutilização de código e separação de responsabilidades.

Camadas principais:

. Páginas: Telas principais da aplicação

. Componentes: Componentes reutilizáveis

. Services: Comunicação com a API

. Estilos: Arquivos de CSS

## ⚙️ Funcionalidades:

. Tela de Login

. Tela de Cadastro de Usuário

. Tela de Chatbot com IA

. Tela de Perfil do Usuário

. Exibição de histórico de pesquisas

___ 

# Configuração do Ambiente

## 💻 Requisitos de Software:

. Node.js (versão 18 ou superior)

. NPM ou Yarn

. Navegador Web moderno

. Git

## 📥 Instruções de Instalação:

Clone o repositório:

git clone https://github.com/RodrigoPCamilo/CortexCommerce-FrontEnd.git

Acesse a pasta do projeto:

cd CortexCommerce-FrontEnd

Instale as dependências:

npm install

Execute o projeto:

npm run dev

A aplicação estará disponível em:

http://localhost:5173/

## 📚 Frameworks e bibliotecas:

- React.js (com Vite)
- React Router DOM
- CSS (normal)
- Node.js 18+
- react-markdown remark-gfm
- Axios (Consumo da API)

___

# Desenvolvimento

## 📂 Estrutura do Projeto:

```text
CortexCommerce-FrontEnd
├── src
│   ├── assets
│   ├── componentes
│   │   ├── routes
│   │   │   └── PrivateRoute.jsx
│   │   ├── MensagemChat.jsx
│   │   ├── MensagemChat.css
│   │   ├── MenuLateral.jsx
│   │   └── MenuLateral.css
│   ├── estilos
│   │   └── global.css
│   ├── layout
│   │   ├── Layout.jsx
│   │   └── Layout.css
│   ├── paginas
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── Registro.jsx
│   │   ├── Registro.css
│   │   ├── Perfil.jsx
│   │   ├── Perfil.css
│   │   ├── Chatbot.jsx
│   │   └── Chatbot.css
│   ├── services
│   │   ├── AuthAPI.js
│   │   ├── client.js
│   │   ├── IaAPI.js
│   │   └── UsuarioAPI.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
└── package-lock.json

```

## 🧩 Descrição das Camadas:

src/assets: 
Arquivos estáticos como imagens, ícones e fontes.

src/componentes: 
Componentes reutilizáveis da interface, como menus, chat e rotas privadas.

src/estilos: 
Arquivos CSS globais, aplicando estilo padrão a toda aplicação.

src/layout: 
Componentes de layout, que estruturam a página e o design geral da aplicação.

src/paginas: 
Telas principais da aplicação: Login, Registro, Perfil e Chatbot.

src/services: 
Camada responsável pela comunicação com a API do back-end, incluindo autenticação, usuários e IA.

App.jsx / main.jsx / index.css: 
Arquivos de inicialização e configuração da aplicação React.

.gitignore / eslint.config.js / index.html / package-lock.json: 
Arquivos de configuração, lint e dependências do projeto.

___

# Integração com o Back-End

 O front-end se comunica com o back-end por meio de chamadas HTTP REST.

. Base URL configurada nos services

. Uso de token JWT para autenticação

. Headers configurados automaticamente

___

# Interface do Usuário

## 🖥️ Telas da Aplicação

## 🔐 Login:

<img width="1425" height="882" alt="image" src="https://github.com/user-attachments/assets/e55bcdb4-9be2-4aed-8c4b-e0ab38e6f33f" />

## 📝 Cadastro de Usuário:

<img width="1376" height="850" alt="image" src="https://github.com/user-attachments/assets/14c964b9-bc23-4b28-878b-cd76d64840dd" />

## 🤖 Chatbot com IA:

<img width="1889" height="942" alt="image" src="https://github.com/user-attachments/assets/7ba21e1e-a9f3-4cc7-9f01-2bc01dd4bb78" />

## 👤 Perfil do Usuário com histórico:

<img width="1912" height="943" alt="image" src="https://github.com/user-attachments/assets/01fccf98-43f1-4eab-98f4-a4c3db4770b0" />

___

# Considerações Finais

## 📘 Lições Aprendidas:

. Componentização no React

. Integração front-end e back-end

. Boas práticas de organização de código

## 🚀 Próximos Passos:

. Melhorar responsividade

. Tratamento avançado de erros

. Implementação do Atualizar Perfil

. Botão para limpar Histórico do Perfil

. Filtro de pesquisa no Historico do Perfil

## 📚 Referências

. Documentação do React

. Documentação do Vite

. Documentação do Axios

## 👨‍💻 Autor:

Desenvolvido por Rodrigo Prado Camilo.

___
