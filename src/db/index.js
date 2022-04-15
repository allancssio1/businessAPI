const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/businessAPI')
mongoose.Promise = global.Promise

module.exports = mongoose