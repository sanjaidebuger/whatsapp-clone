import React from 'react'
import { Button } from '@mui/material';
import { auth, provider } from "../../firebase";
import { signInWithPopup } from 'firebase/auth';
import "./login.css";

const login = () => {

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    }).catch((err) => {
      alert(err.message)
    })
  }


  return (
    <div className='login'>
      <div className='login_container'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/765px-WhatsApp.svg.png" alt="logo" />
        <div className='login_text'>
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  )
}

export default login