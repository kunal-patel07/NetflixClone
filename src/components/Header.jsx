import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser ,addUser} from '../utils/UserSlice';


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
    onAuthStateChanged(auth, (user) => {
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
    
   },[])
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-screen flex justify-between'>
<img  className='w-44' 
    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
   {user && <div className='flex p-2'>  
        <img 
        className="h-12 w-12"
        src='https://occ-0-2482-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABSfwyKM86x-sf4pHN2AriBGvs0Rj4YEB1SZBi69wsxz3s_LFt-nYp5e2GfNqW3yES8IRKAvjpIysiE9GV8aEJlMIs4ani2Q.png?r=d9d' />
        <button
        onClick={handleSignOut}
        className='font-bold text-white'>Sign Out </button>
    </div>}

    </div>
  )
}

export default Header
