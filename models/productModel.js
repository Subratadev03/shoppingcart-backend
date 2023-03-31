module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('products',{
        title:{
            type: DataTypes.STRING,
            alloNull:false
        },
        price:{
            type:DataTypes.STRING,
            // alloNull:false
        },
        description:{
            type:DataTypes.STRING,
            // alloNull:false
        },
        published:{
            type:DataTypes.STRING,
            // alloNull:false
        },
        image:{
            type:DataTypes.STRING
        }   

    },
    {

    })

    return Product;
}