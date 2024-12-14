const express = require('express')
const mongoose =  require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a database connection
// we can also create a separate file for this and import that file
mongoose.connect('mongodb+srv://pratikshag508:Pratiksha12@cluster0.sezdr.mongodb.net/').then(()=>console.log('MongoDB connected')).catch(error=> console.log(error));

const app = express()
const PORT = process.env.PORT || 5001;

app.use(
    cors({
        origin : 'http://localhost:5173/',
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

app.listen(PORT, ()=>console.log(`Server is now running on port ${PORT}`))