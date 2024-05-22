import express from 'express';
import { test,updateUser } from '../controllers/user.controller.js';
import {verifyToken} from '../utils/verifyUser.js';

const router = express.Router();

// router.get('/test',(req,res)=>{
//     // res.send("hello world");
//     res.json({
//         message:"hello world!!!",       //this is also not a good practice
//     });
// }
// )

router.get('/test',test);

router.post('/update/:id' ,verifyToken, updateUser);

export default router;