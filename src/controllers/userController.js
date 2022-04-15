const express = require('express')
const Users = require('../models/user')
const  { getUser }  = require('../service/index')

const router = express.Router()

router.get('/users', async(req, res) => {
  try {
    const userFakeApi = await getUser()
    
    if( await Users.findOne({email})) {
      return res.status(400).send('Usuário já existe.')
    }

    const user = await Users.create(userFakeApi)

    return res.send(user)
  }catch(err){
    return res.status(400).send({error: 'Erro de registro'})
  }
})

// router.get('/')

module.exports = router
