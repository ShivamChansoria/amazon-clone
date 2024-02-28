import React, { useState } from 'react';
import "./Signup.css";
import { auth } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useStataValue } from '../Providers/StateProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [password, setPass]= useState("");
    const [email, setEmail]= useState("");
    const [{basket}, dispatch] = useStataValue();

    
    const navigate= useNavigate();

    const signup = (e) =>{
        e.preventDefault();

         const auth = getAuth();
       createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
    // Signed up 
         const user = userCredential.user;
         toast.success("User is successfully signed up!!!");
         navigate('/login');
    // ...
          })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorCode, errorMessage);
       toast.error(errorMessage);
    // ..
  });

    }

    return (
        
        <div className='login-container'>
            <Link to="/" >
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='amazon-logo' className='amazon-logo'/>
            </Link>
            <div className='login-form'>
              <form>
                <h2>Sign Up</h2>
                <div className='email-input'>
                    <p> Email</p>
                    <input type='email' value={email} placeholder='Enter your email address' onChange={(e)=> {
                        setEmail(e.target.value);
                     }
                      } />
                </div> 
                <div className='password-input'>
                    <p> Password</p>
                    <input type='password' value={password} placeholder='Enter your password' onChange={(e)=> {
                        setPass(e.target.value);
                    }
                     } />
                </div>
                <h4>
                    Please read our privacy and security policy before signing up.
                </h4>
                <button className='sign-in-btn' onClick={signup}>
                    Sign Up
                </button>
              </form>
            </div>
            
        </div>
    );


}

export default Signup;
