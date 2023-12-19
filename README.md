# Projeto_NE

## Descrição

Este projeto consiste em uma API desenvolvida em Node.js utilizando o framework Express, juntamente com MySQL como banco de dados relacional e Sequelize como ORM SQL. A principal funcionalidade da API é realizar operações CRUD (create, read, update e delete) para manipular dados de clientes, incluindo informações como id, nome, email e data de aniversário.

Além das operações básicas de CRUD, a API possui funcionalidades adicionais, como a implementação de paginação para otimizar o carregamento de dados na listagem de clientes. Para garantir a qualidade do código, as rotas HTTP foram testadas usando o framework de testes Jest.

## Tecnologias Utilizadas

- **Node.js:** Tecnologia assíncrona que permite a execução de JavaScript no servidor.
- **Express:** Web framework para o Node.js.
- **MySQL:** Banco de dados relacional.
- **Sequelize:** ORM SQL para Node.js.
- **Jest:** Framework de testes de JavaScript.

## Pré-requisitos

Certifique-se de ter as seguintes tecnologias instaladas:

- Node.js
- NPM
- Yarn

## Instalação e Execução

1. Faça um clone deste repositório.
2. Navegue até a pasta do projeto: `cd projeto_NE`.
3. Execute o comando `yarn` para instalar as dependências.
4. Altere as credenciais no arquivo `.env`.
5. Execute `yarn sequelize db:create` para criar o banco de dados.
6. Execute `yarn sequelize db:migrate` para aplicar as migrations.
7. Execute `yarn dev` para iniciar o servidor.
8. Importe o arquivo `Insomnia_NE.json` deste repositório no Insomnia para testar as rotas.

Este é um guia básico para começar a usar e testar a API. Sinta-se à vontade para explorar as rotas e adaptar conforme necessário para atender aos requisitos do seu projeto.
