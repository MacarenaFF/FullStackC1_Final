
const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controller')
const controllerWelcome = require ('../controllers/welcome.controller')
const controllerContact = require('../controllers/contact.controller')


// rutas de cada página
router.get('/', controller.index )
router.get('/welcome', controllerWelcome.welcome )
router.get('/contact', controllerContact.contact)




 // exportamos 
module.exports = router;



