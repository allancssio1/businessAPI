const axios = require('axios')

exports.getUser = () => {
  return new Promise(async(resolve, reject) => {
    const result = await axios.get('https://fakerapi.it/api/v1/users?_quantity=1')
    
    const response = result 
      && result.data 
      && result.data.data[0]

    return resolve({
      user: {
        name: response.firstname,
        email: response.email,
        password: response.password
      }
    })
  })
}
