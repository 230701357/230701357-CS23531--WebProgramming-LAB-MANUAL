const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');

router.get('/', userCtrl.getAllUsers);
router.post('/', userCtrl.addUser);
router.post('/login', userCtrl.getUserByUsernameAndPassword);
router.post('/validate', userCtrl.validateToken);

module.exports = router;

