import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
     email:{
        type:String,
        required:true,
        unique:true,
    },
     password:{
        type:String,
        required:true,
        
    },
    avatar:{
        type:String,
        default:"https://tse1.mm.bing.net/th?id=OIP.XnpM4kcShhqe-aPu7rvF5wHaF3&pid=Api&rs=1&c=1&qlt=95&w=147&h=116",

    }
},{timestamps:true}
);

const User = mongoose.model('User',userSchema);
export default User;