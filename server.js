//Forma antiga de chamar a biblioteca
//const express = require("express")
//novo
import express from 'express'

//aqui estou fakabdi qual a porta no meu local host o servidor da minha aplicação vai rodar.
const app = express()

//requisição do cliente, resposta do servidor.

/*Métodos HTTP
Get -> Listar
Post -> Criar
Put -> Editar varios
Patch -> Editar um
Delete -> Deletar
*/
app.get('/usuarios', (request, response) => {
    //Para acessar é só localhost:3000/usuarios
    response.send('Olá mundo')
})
//Toda vez que altero algum dado no servidor, é necessário parar e rodar novamente.

//Aqui está rodando meu servidor.
app.listen(3000)