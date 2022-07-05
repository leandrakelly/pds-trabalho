# Gerenciamento de cursos - API

<img width="218" alt="image" src="https://user-images.githubusercontent.com/77417705/177434260-857aea71-8b54-4fdb-ae05-24e8de74eb28.png">

> API em Node de gerenciamento de cursos

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você instalou a versão mais recente do Nodejs
* Você tem o ambiente do Postgres já instalado
* Você possui uma IDE que rode javascript


## 🚀 Instalando a API

Para instalar o projeto, você deve ter o Postgres e um software administrador (o próprio pgAdmin ou software de terceiros como Beekeper e ter um database criado previamente. Para criar um banco, utilize o SQL Shell do Postgres e digite
```
<create database "nome-aqui";>
```
Com o banco criado, clone esse repositório e instale as dependencias usando yarn. Simplesmente digite:
```
<yarn>
```
ou
```
<yarn install>
```
Após instalar as dependências, renomeie o arquivo  `.env.example` para apenas `.env` e coloque as credenciais do seu banco local.
Logo após você pode rodar o projeto digitando:
```
<yarn dev>
```

## 📃 Acessando a documentação 

Para ter acesso a documentação, entre no seu navegador local com o projeto em execução e digite `http://localhost:3333/api-docs/`.
Os documentos são testáveis e não precisa de softwares para rodar a API. Mas, se quiser, pode rodar utilizando Postman, Insomnia ou seu software predileto.
