import express from 'express';
import { test } from '../controllers/user.controller.js';
const router = express.Router();

// router.get('/test',(req,res)=>{
//     // res.send("hello world");
//     res.json({
//         message:"hello world!!!",       //this is also not a good practice
//     });
// }
// )

router.get('/test',test);
export default router;