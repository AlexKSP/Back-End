//Forma antiga de chamar a biblioteca
//const express = require("express")
//novo
import express from 'express'


//ler documentação do Prisma. { prisma } ele vai trazer somente uma coisa que quero e sem, ele importa tudo como o express. Ler documentação das bibliotecas.
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//aqui estou fakabdi qual a porta no meu local host o servidor da minha aplicação vai rodar.
const app = express()
app.use(express.json())

//requisição do cliente, resposta do servidor.

/*Métodos HTTP
Get -> Listar
Post -> Criar
Put -> Editar varios
Patch -> Editar um
Delete -> Deletar
*/

/*
Metodos de se comunicar (request) com o back end.
1- Query Params(GET), quando cliente quer receber uma informação não sigilosa
servidor.com/ussuarios?estado=bahia&cidade=salvador

2-Route Params (GET / PUT / DELETE), quando quero enviar ae receber dados pequenos
get servidor.com/usuarios/22
put servidor.com/usuarios/22
delete servidor.com/usuarios/22

3-Body Params (POST / PUT), quando quero enviar ou recebr diversas informções
Usando a extensão thunder, vou em body, no JSON e escrevo o que quero enviar na rota psot.
Se atente a porta que está utilizando assim como o hyperlink correto, qualquer www ou . a rota não é acessada.
QUando usado o Body, e usamos Json, o express é "meio fresco", temos de avisar o express que estamos usando Json. app.use(express.json())


*/
//usando o route params = app.get('/usuarios/:Alex', (request, response). : é um let, é preciso declarar a variavel 
app.get('/usuarios', async (request, response) => {
    //Para acessar é só localhost:3000/usuarios
    //console.log(request)

    const users = await prisma.user.findMany()

    response.status(200).json(users)
})
//Toda vez que altero algum dado no servidor, é necessário parar e rodar novamente.

app.post('/usuarios', async (req, res) => {
    //users.push(req.body)
    //push porque ele é um array e estou simulando a entrada de um formulario
    //Toda vez que eu crio algo, preciso enviar um status

    //promisse = promessa. Eu sei que isso vai acontecer pois depende 100% do j exemplo. Aula 14 em 10min
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age 
        }
    })

    console.log(user)//boa pratica é retornar que o usuario foi criado, por isso não é preciso, mas para retorna essa informação, é preciso colocar numa variavel.

    res.status(201).json({ message: "Usuário criado com sucesso"}) //por estar no ambiente JS usando Json não preciso usar aspas duplas
})

//Aqui está rodando meu servidor.
app.listen(3000)

//Aula 12, vamos criar uma usuario. Usando a rota do tipo post

//const users = []