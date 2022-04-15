const express = require('express')
const bodyParser = require('body-parser')
const userController = require('./controllers/userController')
const reportController = require('./controllers/reportController')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(userController)
app.use(reportController)

app.listen(3000, () => console.log('runnig'))