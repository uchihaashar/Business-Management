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
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className="p-20 border-2 border-emerald-600 rounded-xl">
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
           className='px-5 py-3 text-xl bg-transparent border-2 rounded-full outline-none  placeholder:text-gray-400 border-emerald-600' type="email" placeholder='Enter your Email' />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required className='px-5 py-3 mt-3 text-xl bg-transparent border-2 rounded-full outline-none  placeholder:text-gray-400 border-emerald-600' type="password" placeholder='Enter password' />
        
        <button className='w-full px-8 py-2 text-lg font-semibold text-white border-none rounded-full outline-none mt-7 hover:bg-emerald-700 bg-emerald-600 placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  );    
};

export default Login;
