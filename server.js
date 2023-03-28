const express   =   require('express');
const cors      =   require('cors');
const bodyParser = require('body-parser')
require('dotenv').config();


const app       =   express()
app.use(express.json())   

var coreOptions =   {
    origin:'http://localhost:3001/*'
}
app.use(cors("*"))

//Routes

const productRouter = require('./routes/productRoutes')
const  authRouter   = require('./routes/authenticationRoutes')
const addtoCartRouter =require('./routes/addtoCartRoute')

app.use('/api/products',productRouter)
app.use('/api/auth',authRouter)
app.use('/api/cart',addtoCartRouter)

//app.use(express.bodyParser());


//middleware
app.use(bodyParser.json());
// app.use(express.json())
app.use(express.urlencoded({extended:true}))

//api

app.get('/',(req,res)=>{
    res.json({message:'Hello world'})
})


const PORT  = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`Server running in port no ${PORT}`);
})