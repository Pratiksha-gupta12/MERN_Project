const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../../models/User");




//register

const registerUser = async(req,res)=>{
    const {userName, email,password} = req.body;

    try{
        const hashPassword = await bcrypt.hash(password,12);  //12 is the salt number(a random data value that is added to a password before it is hashed)
        const newUser = new User({
            userName,email,password : hashPassword,
        })

        await newUser.save()
        res.status(200).json({
            success : true,
            message : 'Registration Successfull'
        })

    }catch(e){
        console.log(e);
        res.status(500).json(
            {
                success : false,
                message : 'Some error occured'
            }
        );

    }
};



//login

const login = async( req,res)=> {
    try{

    }catch(e){
        console.log(e);
        res.status(500).json(
            {
                success : false,
                message : 'Some error occured'
            }
        );

    }
}


//logout



//auth middleware


module.exports = { registerUser };