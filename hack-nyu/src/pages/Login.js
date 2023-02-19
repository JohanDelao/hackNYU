import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/GoogleAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/Main');
    }
  }, [user]);

  return (
        <div className='body1'>
            
            <div className="area2" >
                        <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
                        <div className="login-card">
                            <h2>Welcome to ZenDoc</h2>
                            <img src="../images/zenDocLogo.PNG" id="logo"/>
                            <h2>Login</h2>
                            <h3>Enter your credentials</h3>
                            <div id="google">
                                <GoogleButton onClick={handleGoogleSignIn}/>
                            </div>
                           
                        </div>
            </div >

        </div>
  );
};

export default Login;