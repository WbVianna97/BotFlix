# 🎬 BotFlix

<div align="center">

### Seu assistente pessoal para encontrar o filme perfeito

Descubra filmes personalizados com base no seu humor e preferências utilizando automação e integração com APIs.

</div>

---

## 📖 Sobre o projeto

O **BotFlix** é uma aplicação web desenvolvida para recomendar filmes de forma personalizada através da descrição do humor ou interesse do usuário.

A proposta do projeto é tornar a busca por filmes mais intuitiva: ao invés de pesquisar diretamente por gênero ou nome, o usuário apenas informa como está se sentindo ou o que deseja assistir, e o sistema retorna recomendações relevantes.

Exemplo:

> "Quero algo engraçado para relaxar depois do trabalho"

> "Procuro um suspense que me deixe preso até o final"

> "Quero um filme romântico para assistir a dois"

---

## ✨ Funcionalidades

- Pesquisa baseada em humor e preferências
- Integração com Webhook para processamento dos dados
- Consumo de API para recomendações
- Exibição dinâmica dos filmes
- Exibição de pôster do filme
- Descrição detalhada
- Nota/avaliação do filme
- Interface responsiva
- Feedback visual durante carregamento
- Animações e efeitos na interface

---

## 🛠️ Tecnologias utilizadas

### Front-end

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

### APIs e Integrações

![Fetch API](https://img.shields.io/badge/Fetch_API-000000?style=for-the-badge)

![n8n](https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white)

![TMDB](https://img.shields.io/badge/TMDB-01D277?style=for-the-badge)

---

### Recursos Utilizados

- Google Fonts (Inter)
- CSS Flexbox
- CSS Animations
- Eventos DOM
- Async/Await
- Manipulação dinâmica do DOM

---

## 📂 Estrutura do projeto

```bash
BotFlix
│
├── index.html
│
├── src
│   │
│   ├── css
│   │   ├── reset.css
│   │   ├── styles.css
│   │   ├── animations.css
│   │   └── responsivo.css
│   │
│   ├── js
│   │   └── index.js
│   │
│   └── images
│       └── roboBotFlix.jpeg
│
└── README.md
```

---

## ⚙️ Como executar o projeto

### 1 - Clone o repositório

```bash
git clone https://github.com/seu-usuario/botflix.git
```

### 2 - Acesse a pasta

```bash
cd botflix
```

### 3 - Execute o projeto

Abra o arquivo:

```bash
index.html
```

Ou utilize a extensão **Live Server** no VS Code.

---

## 🔄 Fluxo da aplicação

```text
Usuário digita humor/preferência
           ↓
JavaScript captura a informação
           ↓
Envio via Fetch API
           ↓
Webhook (n8n)
           ↓
Processamento da solicitação
           ↓
API retorna recomendações
           ↓
BotFlix exibe os resultados
```

---

## 📸 Preview

Adicione aqui uma imagem do projeto:

```md
![Preview](src/images/preview.png)
```

---

## 🚀 Melhorias futuras

- [ ] Exibir múltiplos resultados
- [ ] Filtro por gênero
- [ ] Histórico de pesquisas
- [ ] Sistema de favoritos
- [ ] Tema claro/escuro
- [ ] Integração com IA para recomendações avançadas
- [ ] Sugestões por streaming disponível

---

## 👨‍💻 Desenvolvedor

**William Vianna**

GitHub:
https://github.com/seuusuario

LinkedIn:
https://linkedin.com/in/seulink

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

<div align="center">

Desenvolvido com 💻 + ☕ por William Vianna

</div>
