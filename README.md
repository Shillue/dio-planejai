# 🎯 Desafio da Dio: Planej.ai Educador Financeiro com React e IA Generativa

Aplicação web desenvolvida em React + TypeScript que permite ao usuário realizar uma simulação financeira personalizada utilizando Inteligência Artificial (Google Gemini).

O sistema analisa a situação financeira do usuário, gera insights personalizados e permite continuar uma conversa com um educador financeiro virtual baseada na simulação realizada.

---

# 🎯 Objetivo

Desenvolver uma aplicação de planejamento financeiro utilizando React, TypeScript e Inteligência Artificial Generativa, permitindo que o usuário realize simulações, receba insights personalizados e converse com um educador financeiro virtual. Sendo assim, buscando concluir os desafios do curso.

---

# ✨ Funcionalidades

O projeto possui as seguintes funcionalidades:

## 📊 Simulação Financeira

- Cadastro da renda mensal
- Cadastro das despesas fixas
- Cadastro de dívidas
- Definição de uma meta financeira
- Definição do valor da meta
- Definição do prazo
- Cálculo automático da economia mensal necessária

---

## 🤖 Insights Financeiros com IA

Após finalizar a simulação, a aplicação gera automaticamente:

- Viabilidade da meta
- Diagnóstico financeiro
- Sugestões práticas
- Sugestões para aumento de renda
- Sugestões de investimento
- Mensagem motivacional

Todos os insights são gerados utilizando a API Gemini.

---

## 💬 Educador Financeiro

Após receber o diagnóstico, o usuário pode conversar livremente com a IA.

O chat possui:

- perguntas ilimitadas
- respostas contextualizadas
- histórico completo da conversa
- scroll automático
- feedback de carregamento
- tratamento de erros

As conversas permanecem salvas para cada simulação.

---

## 📚 Histórico de Simulações

A aplicação também possui uma página de histórico onde é possível:

- visualizar todas as simulações realizadas
- visualizar os detalhes completos
- reabrir os insights já gerados
- continuar conversando com a IA
- excluir simulações

Todas as informações ficam armazenadas no **LocalStorage**.

---

# 🛠 Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React
- React Loading Skeleton
- Google Gemini API

---

# 📦 Dependências

Principais bibliotecas utilizadas:

```bash
react
react-dom
react-router-dom
tailwindcss
lucide-react
react-loading-skeleton
typescript
vite
```

---

# 🚀 Como Executar Localmente

## 1 - Clone o repositório

```bash
git clone https://github.com/Shillue/dio-planejai
```

---

## 2 - Entre na pasta

```bash
cd dio-planejai
```

---

## 3 - Instale as dependências

```bash
npm install
```

---

## 4 - Configure a chave da API Gemini

Crie um arquivo:

```text
.env.local
```

e adicione:

```env
VITE_GEMINI_API_KEY=SUA_CHAVE_AQUI
```

---

## 5 - Execute o projeto

```bash
npm run dev
```

O projeto ficará disponível em:

```
http://localhost:5173
```
> ⚠️ A chave da API deve ser armazenada em `.env.local` e não deve ser enviada para o repositório. O arquivo `.env.local` já está incluído no `.gitignore`.

---

# 📁 Estrutura do Projeto

```text
src
├── assets
├── components
│   ├── features
│		├── layout
│   └── shared
├── context
├── data
├── hooks
├── pages
├── services
├── styles
├── utils
├── App.tsx
├── index.css
├── main.tsx
└── router.tsx
```       

# 📋 Desafios Desenvolvidos

### ✅ Desafio 1 — Histórico de Simulações

- Exibição das simulações salvas
- Layout responsivo
- Exclusão de simulações
- Visualização de detalhes
- Reaproveitamento dos insights gerados

### ✅ Desafio 2 — Conversando com o Educador Financeiro

- Campo de perguntas
- Conversa contextualizada com IA
- Histórico completo de mensagens
- Scroll automático
- Feedback de carregamento
- Tratamento de erros
- Persistência das conversas
- Continuidade das conversas após reabrir uma simulação

---

# 🎨 Protótipo

Protótipo desenvolvido no Figma.

🔗 [Protótipo no Figma](https://www.figma.com/design/MVZhmZxoVAsgotZo50gj6M/Educador-Financeiro---DIO?node-id=29-403&t=Go1ws7EwMe7jpzFX-0)

---

# 📖 Projeto Base

Projeto desenvolvido a partir do desafio proposto.

🔗 [Repositório Base](https://github.com/digitalinnovationone/planejai)

---


# 🖼️ Pré-visualização

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/098825d0-a43c-4935-90dc-2cde983d0481" alt="Tela Nova Simulação - Renda" width="200" height="120" >
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/a3561bc4-136f-4a4f-892b-7c0b729d46f0" alt="Tela Nova Simulação - Custo" width="200" height="120">
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/ecadd3ca-f2fb-4b25-aeb9-a2624f0c8fd2" alt="Tela Nova Simulação - Dívidas" width="200" height="120">
    </td>
		<td align="center">
      <img src="https://github.com/user-attachments/assets/f7c40c81-d95c-409e-8022-bb721da9d986" alt="Tela Nova Simulação - Meta" width="200" height="120">
    </td>
		<td align="center">
      <img src="https://github.com/user-attachments/assets/8b854d15-93a5-4d6b-85a3-f6f25023a884" alt="Tela Nova Simulação - Custo da Meta" width="200" height="120">
    </td>
  </tr>
	 <td align="center">
      <img src="https://github.com/user-attachments/assets/80055f07-0c51-4b3e-92b3-a6d029cbe259" alt="Tela Nova Simulação - Prazo" width="200" height="120" >
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/fb00b7ad-1334-4cb2-9e49-600eadb89539" alt="Tela de Resultado da Simulação" width="200" height="120">
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/4fede899-fb25-471d-a3be-1c5b527ab6b5" alt="Tela Histórico de Simulações" width="200" height="120">
    </td>
		<td align="center">
      <img src="https://github.com/user-attachments/assets/95a5350a-a16a-4af2-8bc4-7b3bdd11fa13" alt="Função Conversando IA" width="200" height="120">
    </td>
		<td align="center">
      <img src="https://github.com/user-attachments/assets/b0211cc9-2262-4fa4-a0f3-50c3d99d6bdf" alt="Tela Nova Simulação - Renda | Com o Tema Dark" width="200" height="120">
    </td>
  </tr>
</table>

---


# 👨‍💻 Autor

Desenvolvido com 💙 por **Shilluê**

- GitHub: https://github.com/Shillue
- LinkedIn: https://www.linkedin.com/in/shillu%C3%AA/
