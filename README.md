# Projeto_NE

API NODEJS-EXPRESS-MYSQL-SEQUELIZE-JEST.

Esta API tráz, grava e manipula os dados de clientes(id, nome, email e data de aniversário) através das operações de CRUD(create, read, update e delete). Além de podermos manipular dados dos clientes também foi implementada a função de paginação na listagem de clientes, assim melhorando a performance no carregamento dos dados. E por fim testamos nossas rotas Http com o auxilio da ferramenta JEST.


||-- TECNOLOGIAS --||

* NODEJS - Node.js é uma tecnologia assíncrona que permite rodar javascript 'on server'.
* EXPRESS - É Web framework para o Node.js
* MYSQL- Banco de dados relacional
* SEQUELIZE- ORM SQL para Node.js
* JEST - O Jest é um framework de testes de JavaScript

||-- PRÉ-REQUISITOS --||

* Node.js.
* NPM.
* Yarn.


||-- INSTALAÇÂO e EXECUÇÂO --||

1 - Faça um clone desse repositório;
2 - Entre na pasta cd projeto_NE;
3 - Rode yarn para instalar as dependências;
4 - Altere as credencias dentro do aquivo ".env";
5 - Rode yarn sequelize db:create para criar o banco de dados;
6 - Rode yarn sequelize db:migrate para executar as migrations;
7 - Rode yarn dev para iniciar o servidor.
8 - Importe o arquivo Insomnia_NE.json desse repositório no Insomnia;





