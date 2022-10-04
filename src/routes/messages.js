const router = require('express').Router();

const customerController = require('../controllers/messagesController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:Id_usuario', customerController.edit);
router.post('/update/:Id_usuario', customerController.update);
router.get('/delete/:Id_usuario', customerController.delete);

module.exports = router;
