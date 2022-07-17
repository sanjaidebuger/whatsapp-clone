import React from 'react'
import { Button } from '@mui/material';
import { auth, provider } from "../../firebase";
import { signInWithPopup } from 'firebase/auth';
import "./login.css";
import { useStateValue } from '../ContextApi/StateProvider';
import { actionTypes } from '../ContextApi/reducer';

const Login = () => {
  // eslint-disable-next-line
const [state, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

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

export default Login ;
