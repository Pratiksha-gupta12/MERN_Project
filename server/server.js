require("dotenv").config();

const express = require('express')
const mongoose =  require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth/auth-routes');
const adminProductsRouter = require('./routes/admin/products-routes')
const shopProductsRouter = require("./routes/shop/products-routes")
// const { registerUser } = require('./controllers/auth/auth-controller');

//create a database connection
// we can also create a separate file for this and import that file




mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB connected')).catch((error)=> console.log(error));

const app = express()
const PORT = process.env.PORT || 5001; 

app.use(
    cors({
        origin : process.env.CLIENT_BASE_URL,
        methods : ['GET' , 'POST' , 'DELETE' , 'PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use('/api/admin/products' , adminProductsRouter);
app.use('/api/shop/products' , shopProductsRouter)
// /api/auth/register - >registerUser
// /api/auth/login - >loginUser

app.listen(PORT, ()=>console.log(`Server is now running on port ${PORT}`))

