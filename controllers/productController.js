const db = require('../models')
const Product   =   db.products;
const Review    =   db.reviews
const AWS = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
AWS.config.update({
    secretAccessKey:process.env.AWS_SECRET_KEY,
    accessKeyId:process.env.AWS_ACCESS_KEY,
    region:process.env.REGION
})

const BUCKET = process.env.BUCKET_NAME
const s3 = new AWS.S3()

const  storage = multer.memoryStorage({
    destination:(req,file,callback)=>{
        callback(null,'')
    }
})


//Add product
const addProduct =  async (req,res)=>{
    // console.log(req.body.image.buffer)
    // return false
    const upload = multer({storage}).single('file')
    let myFile = req.body.image.split("")
    // const fileType = myFile[myFile.length -1]
    const fileType = req.body.image
    const params ={
        Bucket:BUCKET,
        Key:`${fileType}`,
        Body:req.body.image
    }
    s3.upload(params,(err,data)=>{
        if(err)
        {
            console.log(err)
            // return res.send(err)
        }
        else{
            console.log(data)
            // return res.send(data)
        }
    })
    let info   = {
        title : req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published : false,
        image:fileType
    }
    // res.status(200).send(req);
    // console.log(req.body);
    const product = await Product.create(info);
    res.status(200).send(product);
    // console.log(product);
}


//upload product image

const uploadImage = async(req,res)=>{
    const product_id = req.body.product_id

    console.log(req.body)
    const upload = multer({storage}).single('file')
    let myFile = req.file.originalname.split("")
    // const fileType = myFile[myFile.length -1]
    const fileType = req.file.originalname
    // console.log(fileType)
    const params ={
        Bucket:BUCKET,
        Key:`${fileType}`,
        Body:req.file.buffer
    }
    s3.upload(params,(err,data)=>{
        if(err)
        {
            console.log(err)
            // return res.send(err)
        }
        else{
            console.log(data)
            // return res.send(data)
        }
    })
    const products  = await Product.update(req.body,{where:{id:product_id}})
    res.status(200).send(products);

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
        res.status(200).send({status:true,message:'Product updated sucessfull'});    
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
        res.status(200).send({status:true,message:'Product deleted successfully'}); 
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    addProduct,
    uploadImage,
    getallProducts,
    getoneProduct,
    updateProduct,
    deleteProduct
}



