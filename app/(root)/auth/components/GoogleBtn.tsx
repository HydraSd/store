"use client"
import React from 'react'
import { auth } from '@/app/firebase/firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

type Props = {}

function GoogleBtn({}: Props) {
  // @ts-ignore
  const googleAuth = new GoogleAuthProvider();
  const loging = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  }
  return (
    <div  
    onClick={loging}
    className='p-2 bg-white shadow-md cursor-pointer'>
      Google
    </div>
  )
}

export default GoogleBtn