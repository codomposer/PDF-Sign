const db = require('../models')
const Sign = db.sign
const Op = db.Sequelize.Op

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  console.log(req.body)
  if (!req.body.pdf && !req.body.signAddr) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }
  // Create a sign
  const sign = {
    pdf: req.body.pdf,
    signAddr: req.body.signAddr,
  }

  // Save Sign in the database
  Sign.create(sign)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      })
    })
}

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {}

// Update a Tutorial by the id in the request
exports.update = (req, res) => {}

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {}

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {}
