import React from 'react';
import { UserAuth } from '../context/GoogleAuth';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  /*const goToGroup = async () => {
    try {
      navigate('/group')
    } catch (error) {
      console.log(error);
    }
  };*/

  return (
    <div className='body1'>
      <div className="area" >
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
            
            <div>
              <p className="welcome">Welcome, {user?.displayName}</p>
              <button onClick={handleSignOut} className="logoutBtn">
                Logout
              </button>
            </div>
          
        </div>
      </div >
    </div>
  );
};

export default Main;