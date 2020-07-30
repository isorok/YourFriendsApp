const express = require('express');

const usersControllers = require ('../controllers/users-controllers');

const router = express.Router();


router.get('/', usersControllers.getUsersDUMMY);

router.get('/:id', usersControllers.getUsers);

router.post('/', usersControllers.createUser);

router.patch('/', usersControllers.updateUserById);

router.post('/login', usersControllers.loginUser);


module.exports = router;