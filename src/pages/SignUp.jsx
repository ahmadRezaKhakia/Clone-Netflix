/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function SignUp() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const { user, signUp } = UserAuth(); 
    const [error, setError] = useState('');

  const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
        try {
          await signUp(email, password);
          navigate('/');
        } catch(error) {
          console.log(error);
          setError(error.message);
      }
    }
    console.log(user);


  return (
      <div className='bg-netflix-bg bg-center bg-cover h-[1000px] relative  text-white w-full'>
      <div className='absolute  w-full h-full bg-black/50 '></div>
      <Link to='/'>
        <p className='text-red-600 font-bold text-2xl lg:text-5xl absolute m-5 md:text-3xl'>NETFLIX</p>
      </Link>
      <div className='flex flex-col justify-center items-center absolute left-[50px] lg:left-96  md:left-[200px] sm:left-[100px] top-[100px]  rounded  bg-black/60 lg:w-[500px] w-[400px]'>
        <form onSubmit={handleSubmit}>

        <div className='flex flex-col justify-center place-self-center '>
          <div className='w-[300px] flex flex-col justify-center place-self-center'>
              <p className='font-bold lg:text-4xl md:text-2xl sm:text-xl p-6'>Sign Up</p>
              {error ? <p className='lg:w-[300px] m-4 p-3 rounded bg-red-500'>{error}</p> : null}
            
        <input onChange={(e)=> setEmail(e.target.value)} className='lg:w-[300px] m-4 p-3 rounded bg-zinc-800' type="text" placeholder='Email or phone number' />
        <input onChange={(e)=> setPassword(e.target.value)} className='lg:w-[300px] m-4 p-3 rounded bg-zinc-800' type='password' placeholder='password' autoComplete='current-password' />
        <button className='bg-red-500 lg:w-[300px] m-4 p-3 rounded'>Sign Up</button>
          </div>
          <div className='flex justify-evenly p-3 ml-7'>
            <div className='flex'>
            <input type='checkbox' />
            <label className='text-sm font-light text-gray-300 p-1 ' >Remmember me</label>
            </div>
          <span className='text-sm font-light text-gray-300 cursor-pointer hover:text-white'>need help?</span>
        </div>
        <p className='text-gray-300 ml-[100px] mt-[55px] mb-4'>New to Netflix? <span className='text-gray-100'><Link to='/signin'>Sign in now</Link>.</span></p>
        <p className='lg:w-[300px] lg:text-justify font-normal md:text-center text-sm text-gray-300 lg:ml-[100px] mb-44 p-1'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-600 cursor-pointer hover:border-b border-blue-600'> Learn more.</span></p>
        </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;