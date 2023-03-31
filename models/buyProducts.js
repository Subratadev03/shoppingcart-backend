module.exports = (sequelize,DataTypes)=>{
    const BuyProducts = sequelize.define('buy_products',{
        user_id:{
            type:DataTypes.STRING
        },
        products_id:{
            type:DataTypes.STRING
        },
        payments_status:{
            type:DataTypes.STRING
        },

    })
    return BuyProducts
}