const db    =   require('../models')
const UserModel = db.user
const AddtoCart = db.addtoCart

exports.addtoCart= async (req,res)=>{
    const addtocartProduct = await AddtoCart.create({
        user_id:req.user.id,
        product_id:req.body.product_id
    })
    return res.json({
        staus:true,
        cart:addtocartProduct
    })
    // console.log(req.body)
}

exports.getCarts = async(req,res)=>{
    const allCarts =await AddtoCart.findAll({})
    return res.json({
        carts:allCarts
    })

}