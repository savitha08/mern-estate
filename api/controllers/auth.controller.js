import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup=async(req,res,next)=>{

    // console.log(req.body);
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword });

    try{
        await newUser.save();
        res.status(201).json("user created successfully");

    }catch(err){
        // res.status(500).json(err.message);
        

        //to handleError manually 

        // next(errorHandler(550,'error from function'));

        // output for this

//         {
// 	"success": false,
// 	"statusCode": 550,
// 	"message": "error from function"
//          }


        //handle middleware function
        next(err);
    }
};

export const signin = async(req,res,next)=>{
    const {email,password} = req.body;
    try{
         //if the email is correct then  check for password

         const validUser = await User.findOne({email});
         if(!validUser) return next(errorHandler(404,'User not found!'));
         const validPassword = bcryptjs.compareSync(password,validUser.password);
         if(!validPassword) return next(errorHandler(401,'Wrong credentials!'));
       
        //if email and password is same then need to check authentication by using cookies (tokens)
        //npm i jsonwebtoken
        
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const {password:pass, ...rest} = validUser._doc;
        res 
           .cookie('access_token',token,{httpOnly:true})
           .status(200)
           .json(rest);

    }catch(err){
        next(err);
    };
}