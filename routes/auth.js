const router = require('express').Router();

const authController = require('../controllers/authController');
// eslint-disable-next-line consistent-return
router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/token', authController.refresh);

router.post('/logout', authController.logout);

module.exports = router;
