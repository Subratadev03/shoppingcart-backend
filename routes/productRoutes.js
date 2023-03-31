const productCntrl  = require('../controllers/productController.js')
const AuthGuard = require('../middleware/auth.middleware');
const ErrorHandler = require('../middleware/err.middleware');
const router   = require('express').Router()

router.post('/add-product', AuthGuard, ErrorHandler(productCntrl.addProduct))
// router.post('upload-image')
router.get('/get-product',productCntrl.getallProducts)
router.get('/:id',AuthGuard,productCntrl.getoneProduct)
router.put('/:id',AuthGuard,productCntrl.updateProduct)
router.delete('/:id',AuthGuard,productCntrl.deleteProduct)

module.exports = router