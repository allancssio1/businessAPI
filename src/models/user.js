const mongoose = require('../db/index')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    require: true,
    select: false
  }
})

const Users = mongoose.model('Users', UserSchema)

module.exports = Users