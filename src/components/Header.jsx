import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser ,addUser} from '../utils/UserSlice';
import { LOGO, USERAVTAR } from '../utils/constants';


const Header = () => {
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
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-screen flex justify-between'>
<img  className='w-44' 
    src={LOGO} alt="" />
   {user && <div className='flex p-2'>  
        <img 
        className="h-12 w-12"
        src={USERAVTAR} />
        <button
        onClick={handleSignOut}
        className='font-bold text-white'>Sign Out </button>
    </div>}

    </div>
  )
}

export default Header
