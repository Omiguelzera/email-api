# Disparador de E-mail

Este projeto é uma API simples em Node.js que permite o envio de e-mails usando o serviço do Gmail com autenticação segura via `.env`.

## ✉️ Funcionalidades

- Envio de e-mails com remetente, destinatário, assunto e mensagem.
- Uso de variáveis de ambiente para segurança.
- Baseado em Express e Nodemailer.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/disparador-email.git

# Acesse a pasta
cd disparador-email

# Instale as dependências
npm install


🔐 Configuração
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

env

PORT=3000
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-aplicativo

▶️ Como rodar

node index.js

A API estará disponível em: http://localhost:3000
