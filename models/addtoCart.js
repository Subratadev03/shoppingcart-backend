module.exports = (sequelize, DataTypes)=> {
    const Addtocart    = sequelize.define('addtocarts',{
        product_id: {
            type: DataTypes.STRING 
        },
        user_id: {
            type: DataTypes.STRING 
        },
    })
    return Addtocart;
}