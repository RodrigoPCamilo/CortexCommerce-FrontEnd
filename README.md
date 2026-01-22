# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# CortexCommerce - Frontend

Frontend do **CortexCommerce**, sistema de comércio que inclui autenticação, chatbot com IA e perfil do usuário.

## Tecnologias

- React.js (com Vite)
- React Router DOM
- CSS (normal)
- Node.js 18+

## Estrutura do Projeto

src/
├─ components/ # Componentes reutilizáveis (Sidebar, ChatBubble, etc)
├─ pages/ # Telas principais: Login, Registro, Chatbot, Perfil, UpdatePerfil
├─ App.jsx # Roteamento entre páginas
├─ main.jsx # Entry point
└─ styles/ # CSS 

## Telas Principais

1. **Login** – Email, Senha, botão Entrar e link para Cadastro.
2. **Cadastro de Usuário** – Nome, Email, Senha, CategoriaFavorita, OrçamentoMédio, LojaPreferida.
3. **Chatbot IA** – Área de chat para perguntas e respostas.
4. **Perfil do Usuário** – Exibição de dados, histórico do chatbot e botão para atualizar perfil.
5. **Atualizar Perfil** – Alteração de Nome, CategoriaFavorita, OrçamentoMédio, LojaPreferida.