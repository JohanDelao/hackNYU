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
                      <div>
                        <div className='accountContainer'>
                            <div>
                                <h1 className="welcome">{user?.displayName}</h1>
                                <input type="text" placeholder='Address:' className='accountInput'/>
                                <input type="text" placeholder='Phone Number:' className='accountInput'/>
                                <input type="text" placeholder='Emergency Contact Name:' className='accountInput'/>
                                <input type="text" placeholder='Emergency Contact Number:' className='accountInput'/>
                                <input type="text" placeholder='Insurance Name...' className='accountInput'/>
                                <input type="text" placeholder='Insurance Member ID:' className='accountInput'/>
                                <input type="text" placeholder='Medications:' className='accountInput'/>
                            </div>
                            <div>
                                <h1 className="welcome">PCP/Therapist Info</h1>
                                <input type="text" placeholder='Doctor Name:' className='accountInput'/>
                                <input type="text" placeholder='Office Name:' className='accountInput'/>
                                <input type="text" placeholder='Office Address:' className='accountInput'/>
                                <input type="text" placeholder='Contact Number:' className='accountInput'/>
                                <input type="text" placeholder='EME ID Number' className='accountInput'/>
                                <input type="text" placeholder='Last Visit:' className='accountInput'/>
                            </div>
                        </div>
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