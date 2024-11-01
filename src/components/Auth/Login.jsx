import React, { useState } from 'react';

const Login = () => {

    const[email,setEmail]=useState('')
    const [password, setPassword] = useState('')
 
    const submitHandler  = (e)=>{
       e.preventDefault()
       console.log("email is" + email);
       console.log("password is" + password);

       setEmail("")
       setPassword("")
       
    }
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form 
        onSubmit={(e)=>{
            submitHandler(e);
  
        }}
        className='flex flex-col items-center justify-center '>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
           required 
           className=' outline-none bg-transparent placeholder:text-gray-400 border-2  border-emerald-600 px-5 py-3 text-xl rounded-full' type="email" placeholder='Enter your Email' />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required className='  outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 px-5 py-3 mt-3 text-xl rounded-full' type="password" placeholder='Enter password' />
        
          <button className='text-white mt5 outline-none bg-transparent placeholder:text-white  bg-emerald-600 px-5 py-3 mt-5 text-xl rounded-full' >Log in</button>
        </form>
      </div>
    </div>
  );    
};

export default Login;
