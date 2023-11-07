// TopBar.js
import './Topbar.css';
import React from 'react';
import { auth, provider} from './firebase';
import { signInWithPopup } from 'firebase/auth';
const TopBar = () => {
  const handleLogin = async () => {
    //const provider = new firebase.auth.GoogleAuthProvider();
    try {
      // User is logged in
      signInWithPopup(auth, provider).then((result)=>{
        localStorage.setItem("isAuth",true);
      })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="top-bar">
      <h1>Your App Name</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default TopBar;
