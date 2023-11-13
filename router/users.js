const express = require('express')
const routes = express.Router()

const usercontrollers = require('../controllers/users')

routes.get('/users', usercontrollers.index)

routes.get('/user/:id', usercontrollers.show)

  routes.post('/user', usercontrollers.store)

  routes.put('/user/:id', usercontrollers.update)
  
  routes.delete('/user/:id', usercontrollers.delete)

  module.exports = routes