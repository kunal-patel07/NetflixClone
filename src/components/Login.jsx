import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/UserSlice'
import { BG_URL } from '../utils/constants'

const Login = () => {
    let dispatch = useDispatch()
    let [isSignInForm, setIsSignInForm] = useState(true)
    let [errorMessage, setErrorMessage] = useState([])
    let navigate = useNavigate()

    let toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    let name = useRef(null)
    let email = useRef(null)
    let password = useRef(null)

    let handleButtonClick = () => {
        let message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });
                })
                .catch((error) => {
                    setErrorMessage(error.message)
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    setErrorMessage(error.message)
                });
        }
    }

    return (
        <div className="relative min-h-screen">
            <Header />
            <div className="absolute inset-0">
                <img 
                    src={BG_URL} 
                    alt="background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 sm:bg-transparent" /> {/* Overlay only on mobile */}
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='absolute p-4 sm:p-12 bg-black w-[90%] sm:w-3/12 my-36 mx-auto left-0 right-0 opacity-90 sm:opacity-85 text-white rounded-lg sm:rounded-none'
            >
                <h1 className='font-bold py-4 text-xl sm:text-2xl'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                
                {!isSignInForm && (
                    <input
                        type="text"
                        ref={name}
                        placeholder='Enter name'
                        className='p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-700 rounded text-sm sm:text-base'
                    />
                )}
                
                <input
                    ref={email}
                    type="text"
                    placeholder='Enter email'
                    className='p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-700 rounded text-sm sm:text-base'
                />
                
                <input
                    ref={password}
                    type="password"
                    placeholder='Enter password'
                    className='p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-700 rounded text-sm sm:text-base'
                />
                
                <p className='text-red-500 font-bold py-2 text-sm sm:text-base'>
                    {errorMessage}
                </p>
                
                <button
                    onClick={handleButtonClick}
                    className='p-3 sm:p-4 my-4 sm:my-6 bg-red-700 w-full rounded sm:rounded-none text-sm sm:text-base hover:bg-red-800 transition-colors'
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                
                <p
                    onClick={toggleSignInForm}
                    className='py-2 cursor-pointer text-sm sm:text-base hover:text-gray-300 transition-colors'
                >
                    {isSignInForm ? "New to Netflix? Sign up now" : "Already Registered? Sign In now"}
                </p>
            </form>
        </div>
    )
}

export default Login
