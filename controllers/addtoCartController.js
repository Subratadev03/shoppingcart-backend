const db    =   require('../models')
const UserModel = db.user
const AddtoCart = db.addtoCart

exports.addtoCart= async (req,res)=>{
    const existOrnot = await AddtoCart.findOne({where:{
        user_id:req.user.id,
        product_id:req.body.product_id

    }});
    if(existOrnot) {
        return res.status(200).json({ message: 'Cart already exists.' });
    }
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
exports.getUsersCart = async(req,res)=>{
    const user_id = req.user.id
    const userCarts = await AddtoCart.findAll({where:{user_id:user_id}})
    return res.json({
        carts:userCarts
    })
}