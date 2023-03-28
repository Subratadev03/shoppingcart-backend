const db = require('../models')
const Product   =   db.products;
const Review    =   db.reviews


//Add product
const addProduct =  async (req,res)=>{

    let info   = {
        title : req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published : false 

    }
    // res.status(200).send(req);
    // console.log(req.body);
    const product = await Product.create(info);
    res.status(200).send(product);
    // console.log(product);
}

// Get products

const getallProducts = async(req,res)=>{
    const products  = await Product.findAll({})
    res.status(200).send(products);
}


//Get one porduct


const getoneProduct = async (req,res) =>{

    let id = req.params.id;
    const products  = await Product.findOne({where:{id:id}})
    res.status(200).send(products);
}


//Update products
const updateProduct = async (req,res) =>{

    try{
        let id = req.params.id;
        const products  = await Product.update(req.body,{where:{id:id}})
        res.status(200).send(products);    
    }
    catch(err){
        console.log(err)
    }
   
}

//Delete product

const deleteProduct  = async(req,res) => {
    try{
        let id = req.params.id;
        const products  = await Product.destroy({where:{id:id}})
        res.status(200); 
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    addProduct,
    getallProducts,
    getoneProduct,
    updateProduct,
    deleteProduct
}



