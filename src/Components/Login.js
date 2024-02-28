import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AlternateEmail, Height } from '@material-ui/icons';
import { useStataValue } from '../Providers/StateProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [password, setPass]= useState("");
    const [email, setEmail]= useState("");
    const [{basket}, dispatch] = useStataValue();

    
    const history= useNavigate();
    
    const logIn = (e) =>{
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch({
              type:"SET_USER",
              user: user
            })
            console.log(user.email);
            toast.success("User is logged in with: "+ user.email+ "!!!");
            history('/');

         // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error( errorMessage);
          });

    };
  
    const handleSignUp = () => {
      history.push("/signup");
    };


    return (
        <div className='login-container'>
            <Link to="/" >
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='amazon-logo' className='amazon-logo'/>
            </Link>
            <div className='login-form'>
              <form>
                <h2>Sign In</h2>
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
                <button className='sign-in-btn' onClick={logIn}>
                    Sign In
                </button>
                <h4>
                    Please read our privacy and security policy before signing in.
                </h4>
                <button className='sign-up-btn' onClick={handleSignUp}>
                    Create your Amazon Account 
                </button>
              </form>
            </div>
            
        </div>
    );
}

export default Login;
