import React from 'react'
import { UserAuth } from "../context/GoogleAuth";
import { useNavigate } from "react-router-dom";

export default function Account () {
    const { logOut, user } = UserAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
        await logOut();
        } catch (error) {
        console.log(error);
        }
    };

    const handleBack = async () => {
        try {
          navigate("/Main");
        } catch (error) {
          console.log(error);
        }
      };

    return(
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
                                
                    
                <div className="main-card">
                    
                    <div>
                      <h1 className="welcome">Welcome, {user?.displayName}</h1>
                      <div>
                        <button onClick={handleSignOut} className="logoutBtn">
                          Logout
                        </button>
                        <button onClick={handleBack} className="logoutBtn">
                            Back
                        </button>
                      </div>
                    </div>
                                    
                </div>
              </div>
            </div>
          );
}