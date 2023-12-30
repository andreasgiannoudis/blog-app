import React from 'react';
import { auth, provider } from '../components/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function generateRequestId() {
  return Math.floor(Math.random() * Math.pow(10, 16));
}

function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const cachedRequestId = localStorage.getItem('cachedRequestId');

  const invalidateCachedRequestId = () => {
    if (cachedRequestId) {
      localStorage.removeItem('cachedRequestId');
    }
  };

  const signInWithGoogle = () => {
    const requestId = generateRequestId();

    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');

      if (requestId !== cachedRequestId) {
        invalidateCachedRequestId();
      }
    });
  };

  return (
    <div className='LoginPage'>
      <p>Sign in with Google to continue</p>
      <button
        className='login-with-google-btn'
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
