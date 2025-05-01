import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/UserSlice'
const Login = () => {
    let dispatch = useDispatch()
    let [isSignInForm,setIsSignInForm]= useState(true)
    let [errorMessage, setErrorMessage] = useState([])
    let navigate = useNavigate()
   let toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
   }

   let name = useRef(null)
   let email  = useRef(null)
   let password  = useRef(null)
    let handleButtonClick = ()=>{

    let message = checkValidData(email.current.value , password.current.value)
    setErrorMessage(message)
  if(message) return; 
   
  if  (!isSignInForm) {
    createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed up logic 
      const user = userCredential.user;
      updateProfile(user, {
        displayName:   name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        const {uid,email,displayName ,photoURL} = auth.currentUser;
                  dispatch(addUser({uid:uid , email:email , displayName : displayName ,photoURL:photoURL}))
        
      navigate("/browse")
      //  console.log(user)
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage( errorMessage)
    });
  }else {
//sign in logic
signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse")
    // console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // setErrorMessage(errorCode + errorMessage)

  });

  }


  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg" />

      </div>
      <form
      onSubmit={(e)=>e.preventDefault()}
      className='absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 opacity-85 text-white'>
      <h1 className='font-bold py-4 text-2xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
         {!isSignInForm && 
         <input 
         type="text"
         ref={name}
        placeholder='enter name'
        className='p-4 my-4 w-full bg-gray-700 rounded' />}
       
        <input 
        ref={email}
        type="text"
         placeholder='enter email'
         className='p-4 my-4 w-full bg-gray-700 rounded' />
        <input 
        ref={password}
        type="password" 
        placeholder='enter password' 
        className='p-4 my-4 w-full bg-gray-700 rounded' />
        <p className='text-red-500  font-bold py-2'>{errorMessage}</p>
        <button 
        onClick={handleButtonClick}
        className='p-4 my-6 bg-red-700 w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p 
         onClick={toggleSignInForm}
        className='py-2 cursor-pointer '>{isSignInForm ? "new to Netflix? sign up now" : "Already Registered? Sign In now"}</p>
      </form>
    </div>
  )
}

export default Login
