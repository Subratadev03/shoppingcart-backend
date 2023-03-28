const productCntrl  = require('../controllers/productController.js')
const AuthGuard = require('../middleware/auth.middleware');
const ErrorHandler = require('../middleware/err.middleware');
const router   = require('express').Router()

router.post('/add-product', AuthGuard, ErrorHandler(productCntrl.addProduct))
router.get('/get-product',productCntrl.getallProducts)
router.get('/:id',productCntrl.getoneProduct)
router.put('/:id',productCntrl.updateProduct)
router.delete('/:id',productCntrl.deleteProduct)

module.exports = router