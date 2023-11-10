# App RestFull 

um sistema de gerenciamento de usuários com operações CRUD (Create, Read,
Update, Delete) e a implementar regras de negócio para garantir a integridade dos dados,
especialmente a regra que não permite e-mails duplicados.


### 📋 Pré-requisitos

Instalações VisualStudio, neontech, Prisma, como PostgreSQL, MySQL, restclient, express.


### 🔧 Instalação

Express
```
npm install express
```

Inicializando  o TypeScript

```
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
```

Inicializando Prisma IO
```
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite

```
Rodar as migration Prisma IO
```
npx prisma migrate dev --name init

```
Rodar o codigo
```
npx tsx server.ts

```


### Visualizar no navegador 

GET
http://localhost:3000/user
visualizar todos so usuarios.
PUT
http://localhost:3000/user/id
Atualiza o usuario usando seu id. 
DELETE
http://localhost:3000/user/id
Deleta o ususario usando o id.
GET
http://localhost:3000/user/id
Visualiza o usuario usando o seu id. 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Franciane** - *Estudando de programção* - [umdesenvolvedor](https://github.com/fran-ss)


## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;

