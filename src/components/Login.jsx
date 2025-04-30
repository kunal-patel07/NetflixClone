import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    let [isSignInForm,setIsSignInForm]= useState(true)
    let toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg" />

      </div>
      <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 opacity-85 text-white'>
      <h1 className='font-bold py-4 text-2xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
         {!isSignInForm && <input 
        type="text"
        placeholder='enter name'
        className='p-4 my-4 w-full bg-gray-700 rounded' />}
       
        <input 
        type="text"
         placeholder='enter email'
         className='p-4 my-4 w-full bg-gray-700 rounded' />
        <input 
        type="password" 
        placeholder='enter password' 
        className='p-4 my-4 w-full bg-gray-700 rounded' />
        <button 
        className='p-4 my-6 bg-red-700 w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p 
         onClick={toggleSignInForm}
        className='py-2 cursor-pointer '>{isSignInForm ? "new to Netflix? sign up now" : "Already Registered Sign In now"}</p>
      </form>
    </div>
  )
}

export default Login
