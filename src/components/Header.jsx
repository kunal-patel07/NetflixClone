import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, addUser } from '../utils/UserSlice';
import { LOGO, SUPPORTED_LANGUAGES, USERAVTAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  let showGptSearch = useSelector(store => store.gpt.showGptSearch)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let user = useSelector(store => store.user)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  let handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, [])

  let handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  let handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute px-4 sm:px-8 py-2 bg-gradient-to-b from-black z-20 w-screen'>
      <div className='flex justify-between items-center'>
        <img 
          className='w-24 sm:w-44 cursor-pointer' 
          src={LOGO} 
          alt="Netflix Logo" 
        />
        
        {user && (
          <div className='flex items-center gap-2 sm:gap-4'>
            {showGptSearch && (
              <select 
                className='hidden sm:block text-white p-2 bg-gray-900 rounded text-sm sm:text-base' 
                onChange={handleLanguageChange}
              > 
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            
            <button 
              onClick={handleGptSearchClick}
              className='bg-purple-800 text-white rounded-md py-1 sm:py-2 px-2 sm:px-4 text-sm sm:text-base hover:bg-purple-900 transition-colors'
            >
              {showGptSearch ? "Home" : "GPT"}
            </button>
            
            <div className='relative'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='flex items-center gap-2'
              >
                <img 
                  className="h-8 w-8 sm:h-12 sm:w-12 rounded-md sm:rounded-none"
                  src={USERAVTAR} 
                  alt="User Avatar"
                />
                <span className='hidden sm:inline-block text-white text-sm'>▼</span>
              </button>
              
              {isMenuOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-black/90 sm:bg-black rounded-md shadow-lg py-1 z-30'>
                  <button
                    onClick={handleSignOut}
                    className='block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors'
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
