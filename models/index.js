const dbConfig                  =   require('../config/dbConfig')
const {Sequelize, DataTypes}    =   require('sequelize')

const sequelize     =  new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dilect,
        // operatorsAliases:false,
        pool:{
            max:dbConfig.max,
            min:dbConfig.min,
            acquire:dbConfig.acquire,
            idle:dbConfig.idle  
        }
    }
)

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize

db.products =  require('./productModel.js')(sequelize,DataTypes)
db.user     =  require('./userModel')(sequelize,DataTypes)
db.addtoCart = require('./addtoCart')(sequelize,DataTypes)

// db.products.hasMany(db.reviews,{
//     foreignkey:'product_id',
//     as:'review'
// })

// db.reviews.belongsTo(db.products,{
//     foreignkey:'product_id',
//     as:'product'
// })
// sequelize.sync({force:false}).then(()=>{
//     console.log('done with sync')
// })

module.exports = db