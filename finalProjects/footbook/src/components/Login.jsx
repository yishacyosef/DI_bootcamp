import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from '../firebase';
import '../css/Login.css';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer'

function Login() {
  const [state, dispatch] = useStateValue();

    const signIn =() => {
       auth
        .signInWithPopup(provider)
        .then(result =>{
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });
        })
        .catch((error) => alert(error.message));
    };   
  return (
    <div className='login'> 
        <div className="login__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png?20200820101156" alt="Facebook logo" />
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Facebook logo" />
            </div>
        <Button type='submit' onClick={signIn}>
            Sign In
        </Button> 

    </div>
  )
}

export default Login;