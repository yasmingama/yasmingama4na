# Projeto Final - Backend de Livraria

## Descrição do Projeto

Este é um backend desenvolvido para gerenciar uma aplicação de livraria. O sistema permite o gerenciamento de usuários e livros, incluindo autenticação, cadastro, atualização e exclusão. Ele foi construído utilizando Node.js, TypeScript e integra-se com um banco de dados PostgreSQL, além de consumir APIs externas.

## Funcionalidades

- **Gerenciamento de Usuários**:
  - Cadastro de usuários.
  - Login com geração de token JWT para autenticação.

- **Gerenciamento de Livros**:
  - Adição de novos livros.
  - Listagem de todos os livros.
  - Atualização de informações dos livros.
  - Exclusão de livros.

- **Validação e Segurança**:
  - Validação de e-mails e senhas.
  - Hash de senhas com bcrypt.
  - Tokens de autenticação com jsonwebtoken.

- **Integração com API Externa**:
  - Consumo de API para listar, criar, atualizar e deletar livros.

## Tecnologias Utilizadas

- **Node.js**: Plataforma principal para o backend.
- **Express.js**: Framework para criação de rotas e middleware.
- **TypeScript**: Linguagem para tipagem estática.
- **PostgreSQL**: Banco de dados relacional.
- **dotenv**: Para gerenciamento de variáveis de ambiente.
- **bcrypt**: Para criptografia de senhas.
- **jsonwebtoken**: Para autenticação via tokens JWT.
- **Jest**: Para testes automatizados.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js (v20 ou superior)
- PostgreSQL
- Gerenciador de pacotes (npm ou yarn)

## Configuração do Ambiente

### Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/projeto-final.git
cd projeto-final
```

### Configuração do Banco de Dados

Certifique-se de criar um banco de dados no PostgreSQL com as credenciais configuradas no arquivo `.env`:

```env
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=livraria
JWT_SECRET=sua_chave_secreta
```

### Instalação de Dependências

Execute o comando abaixo para instalar todas as dependências do projeto:

```bash
npm install
```

### Executar o Servidor

- **Em modo de desenvolvimento**:

  ```bash
  npm run dev
  ```

- **Em modo de produção**:

  ```bash
  npm start
  ```

### Testes

Para executar os testes, utilize o comando:

```bash
npm test
```

## Estrutura do Projeto

```bash
projeto-final/
├── src/
│   ├── config/                     # Configuração do banco de dados
│   │   └── database.ts
│   ├── controllers/                # Controladores para rotas
│   │   ├── authController.ts
│   │   ├── bookController.ts
│   ├── helpers/                    # Funções auxiliares
│   │   ├── validationHelper.ts
│   │   ├── validationTitle.ts
│   ├── models/                     # Modelos de dados
│   ├── repositories/               # Repositórios para banco de dados
│   ├── routes/                     # Definições de rotas
│   ├── services/                   # Lógica de negócios
│   └── server.ts                   # Arquivo principal do servidor
├── tests/                          # Testes automatizados
├── .env                            # Variáveis de ambiente
├── jest.config.js                  # Configuração do Jest
├── tsconfig.json                   # Configuração do TypeScript
├── package.json                    # Dependências e scripts
└── README.md                       # Documentação do projeto
```

## Endpoints Disponíveis

### Autenticação

- **POST** `/auth/register`: Cadastro de um novo usuário.
- **POST** `/auth/login`: Login e geração de token.

### Livros

- **GET** `/api/books`: Listar todos os livros.
- **POST** `/api/books`: Adicionar um novo livro.
- **PUT** `/api/books/:id`: Atualizar informações de um livro.
- **DELETE** `/api/books/:id`: Excluir um livro.

## Possíveis Melhorias Futuras

- Implementar paginação na listagem de livros.
- Adicionar níveis de acesso (admin e usuário comum).
- Testes de integração para endpoints.
- Integração contínua com ferramentas como GitHub Actions.

## Autor

- **Nome**: Yasmin Gama
