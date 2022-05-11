module.exports = (app) => {
  const signs = require('../controllers/sign.controller.js')
  var router = require('express').Router()

  // Create a new Sign
  router.post('/', signs.create)

  // Retrieve all Signs
  router.get('/', signs.findAll)

  // Retrieve all Sign record by id
  router.get('/:id', signs.findOne)

  // Update a Sign pdf with id
  router.put('/:id', signs.update)

  // Delete a Sign record by id
  router.delete('/:id', signs.delete)

  // Create a new Sign
  router.delete('/', signs.deleteAll)

  app.use('/api/signs', router)
}
