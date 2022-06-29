const express = require('express');
const {
    creatingUser,
    deletingUser,
} = require('../controllers/users');

const router = express.Router();


// Users
router.post('/createUser', creatingUser);
router.delete('/deleteUser/:id', deletingUser);

module.exports = router;
