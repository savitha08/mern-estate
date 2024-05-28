import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongoDB!");
}).catch((err)=>{
    console.log(err);
});


const app = express();

//npm i cookie-parser                                                                                     
app.use(cookieParser());

app.use(express.json());  //to solve undefined while connect to insomnia



 app.listen(3000,()=>{
    
    console.log("Server is running on port 3000!");
} )


// this is how to create api route

// app.get('/test', (req,res)=>{           this is not a best practice
//     // res.send("hello world");
//     res.json({                         
//         message:"hello world",
//     });
// });

app.use('/api/user',userRouter);

app.use('/api/auth',authRouter);

app.use('/api/listing',listingRouter);

//middleware to handle error

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});   // inorder to use it use next(err) in catch

