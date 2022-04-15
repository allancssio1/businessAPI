const express = require('express')
const Users = require('../models/user')
const  { getUser }  = require('../service/index')

const routerUsers = express.Router()

routerUsers.get('/users', async(req, res) => {
  try {
    const userFakeApi = await getUser()
    const { email } = userFakeApi
    console.log("asd", userFakeApi)

    if( await Users.findOne({email})) {
      return res.status(400).send('Usuário já existe.')
    }

    const user = await Users.create(userFakeApi)

    return res.send(user)
  }catch(err){
    return res.status(400).send({error: 'Erro de registro'})
  }
})

module.exports = routerUsers
