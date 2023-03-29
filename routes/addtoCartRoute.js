const router        =   require('express').Router();
const ErrorHandler = require('../middleware/err.middleware');
const AuthGuard = require('../middleware/auth.middleware');

const AddtoCartController = require('../controllers/addtoCartController')

router.post('/addtocart',AuthGuard, ErrorHandler(AddtoCartController.addtoCart))
router.get('/getcarts',ErrorHandler(AddtoCartController.getCarts))
router.get('/user-carts',AuthGuard,ErrorHandler(AddtoCartController.getUsersCart))
module.exports = router