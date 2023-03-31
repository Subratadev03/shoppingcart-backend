require('dotenv').config();
const express   =   require('express');
const cors      =   require('cors');
const bodyParser = require('body-parser')
const path  =   require('path')
const socketio = require('socket.io')
const http = require('http')

const app       =   express()
const server = http.createServer(app)
const io  = socketio(server)

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
    res.json({message:'Hello Shopping cart'})
})



io.on('connection',(socket)=>{
    console.log("socket join")
})

const PORT  = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`Server running in port no ${PORT}`);
})