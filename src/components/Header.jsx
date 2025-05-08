import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser ,addUser} from '../utils/UserSlice';
import { LOGO, SUPPORTED_LANGUAGES, USERAVTAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  let showGptSearch = useSelector(store => store.gpt.showGptSearch)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let user= useSelector(store => store.user)
  let handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
  useEffect(()=>{
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName ,photoURL} = user;

        dispatch(addUser({uid:uid , email:email , displayName : displayName ,photoURL:photoURL}))
        // ...
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });
    //  unsubscribe when components unmounts
    return ()=>unsubscribe(); 
   },[])

   let handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView())
   }

   let handleLanguageChange = (e)=>{
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
   }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-screen flex justify-between '>
<img  className='w-44' 
    src={LOGO} alt="" />
   {user && 
    
   <div className='flex p-2'>  
    {showGptSearch && <select className='text-white p-2 m-2   bg-gray-900 ' onChange={handleLanguageChange}> 
   {SUPPORTED_LANGUAGES.map((lang) => (
    <option key={lang.identifier}  value={lang.identifier}> {lang.name}</option>
   ))}
   </select>}
    <button 
      onClick={handleGptSearchClick}
      className='bg-purple-800 text-white rounded-md py-2 px-4 my-4 mx-2'>{showGptSearch ? "Home Page" :"GPT Search"}</button>
        <img 
        className="h-12 w-12 m-2"
        src={USERAVTAR} />
        <button
        onClick={handleSignOut}
        className='font-bold px-2 text-white'>Sign Out </button>
    </div>}

    </div>
  )
}

export default Header
