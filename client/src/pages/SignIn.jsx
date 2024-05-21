import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';


export default function SignIn() {
  const [formData,setFormData]= useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData(
      {
        ...formData,
        [e.target.id]:e.target.value,
      }
    );
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
     
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',
      {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),

    }
    );
    const data = await res.json();
    console.log(data);

    if(data.success === false){
      dispatch(signInFailure(data.message));
      return;
    }
    
    dispatch(signInSuccess(data));
    navigate('/');

    }catch(err){
       dispatch(signInFailure(err.message));
    }
    
  };


  return (

    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        
        <input type='email' placeholder='email' id='email' className='border p-3 rounded-lg'  onChange={handleChange} />
        <input type='password' placeholder='password'id='password' className='border p-3 rounded-lg'  onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 p-3 text-white uppercase rounded-lg hover:opacity-95 disabled:opacity-80'>
        {loading ? 'Loading...' : 'Sign In'}</button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to='/sign-up' className='text-blue-700'>Sign Up</Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
      
    </div>
   
  );
}


// for redux persisit
//npm i redux-persist