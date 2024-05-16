import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
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