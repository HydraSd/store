"use client";
import React, { useEffect } from 'react'
import GoogleBtn from './components/GoogleBtn'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '@/app/firebase/firebase';

type Props = {}

function AuthPage({}: Props) {
  const [user, setUser] =  useAuthState(auth);
  
  return (
    <main className='mx-2 md:mx-20 mt-10 h-full flex justify-around'>
        
      <center>
        <GoogleBtn />
      </center>
    </main>
  )
}

export default AuthPage