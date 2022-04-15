const express = require('express')
const Reports = require('../models/reposts')
const  { getReports }  = require('../service/index')

const routerReports = express.Router()

routerReports.get('/reports', async (req, res) => {
  try {
    const companiesFakeApi = await getReports()
    const {name} = companiesFakeApi
    console.log(name)
    console.log('response =>', companiesFakeApi)

    if( await Reports.findOne({name})) {
      return res.status(400).send('Empresa ja cadastrada no banco de dados.')
    }

    const companie = await Reports.create(companiesFakeApi)

    return res.send(companie)
  }catch(err){
    return res.status(400).send({error: 'Erro de registro'})
  }
})

module.exports = routerReports
