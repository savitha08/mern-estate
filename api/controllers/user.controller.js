export const test = (req,res)=>{
    // res.send("hello world");
    res.json({
        message:"test api route is working",       //this is also not a good practice
    });
};