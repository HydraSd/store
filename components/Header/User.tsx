"use client";
import { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '@/app/firebase/firebase';
import Link from 'next/link';


type Props = {}

function User({}: Props) {
    const [user, setUser] =  useAuthState(auth);

  return (
    <div>
        <div className="flex mt-2 font-semibold justify-around text-white text-sm cursor-pointer sm:mt-0">
            {user ? <div>Hello, {user?.displayName}</div> : <Link href="/auth">Sign-in</Link>}
        </div>
    </div>
  )
}

export default User