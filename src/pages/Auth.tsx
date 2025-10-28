import React, { useEffect } from 'react'
import { usePuterStore } from '../lib/puter'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

/* export const meta = () => (
    [
     {title:'ResuME|Auth'},
     {name:'description',content:'log into your account'}
    ]
)
*/
const Auth = () => {
const navigate = useNavigate();
const {isLoading,auth} = usePuterStore();
const location = useLocation();
const next = location.search.split('next=')[1]
useEffect(()=>{
if(auth.isAuthenticated) navigate(next)
},[auth.isAuthenticated,next])
  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className="gradient-border shadow-lg">
            <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
                <div className='flex flex-col items-center gap-2 text-center'>
                    <h1>Welcome</h1>
                    <h2>log in to continue your job journey</h2>
                </div>
            </section>
        </div>
            {isLoading ? (
                <button className="auth-button animate-pause">
                    <p>Signing you in...</p>
                </button>
            ):(
                <>
                {auth.isAuthenticated ? (
                    <button className='auth-button' onClick={auth.signOut}>
                        <p>log out</p>
                    </button>
                ):(
                    <button className="auth-button">
                        <p>log in</p>
                    </button>
                )}
                </>
            )}
    </main>
  )
}

export default Auth