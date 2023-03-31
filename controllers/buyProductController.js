const db = require('../models')
const BuyProduct = db.buyProduct;

exports.buyProduct = async(req,res)=>{
    let buyProduct = {
        user_id:req.user.id,
        product_id:req.body.product_id,
        status:true
    }
    const response = await BuyProduct.create(buyProduct)
    res.status(200).send(response);

    console.log(req)
}