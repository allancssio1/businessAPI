const mongoose = require('../db/index')

const CompanieSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    lowercase: true
  },
  phone: {
    type: String,
    require: true
  },
  country: {
    type: String,
    required: true
  },
  // addresses: {
  //   type: {},
  //   required: false
  // },
  website: {
    type: String,
    required: false
  },
  // contact: {
  //   type: Object,

  // }
})

const Companie = mongoose.model('Companies', CompanieSchema)

module.exports = Companie