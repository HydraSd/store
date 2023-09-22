import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import React from 'react'

type Props = {}

const  GetUser = () => {
 const [user, setUser] =  useAuthState(auth);
 return user 
}

export default GetUser
