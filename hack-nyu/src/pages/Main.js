import React from 'react';
import { UserAuth } from '../context/GoogleAuth';
import { useNavigate } from 'react-router-dom';
import Form from "../components/Form"

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

  const goToVideoTest = async () => {
    try {
      navigate('/VideoTest')
    } catch (error) {
      console.log(error);
    }
  };

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
                        
            
        <div className="main-card">
            
            <div>
              <h1 className="welcome">Welcome, {user?.displayName}</h1>
              
            </div>
            
            <div className="innerMain">
                                <h1 id="lastSeven">Weekly Submissions</h1>
                                <br></br>
                                <div className="formBoxes">
                                    <div className="formBox">
                                        <div id="month">feb</div>
                                        <div id="day">18</div>
                                    </div>
                                    <div className="formBox">
                                        <div id="month">feb</div>
                                        <div id="day">19</div>
                                    </div>
                                    <div className="formBox">
                                        <div id="month">feb</div>
                                        <div id="day">20</div>
                                    </div>
                                    <div className="formBox">
                                        <div id="month">feb</div>
                                        <div id="day">21</div>
                                    </div>
                                    <div className="formBox">
                                        <div id="month">feb</div>
                                        <div id="day">22</div>
                                    </div>
                                    <div className="formBox">
                                        <div id="month">feb</div>
                                        <div id="day">23</div>
                                    </div>
                                    <div className="formBox">
                                        <div id="month">feb</div>
                                        <div id="day">24</div>
                                    </div>
                                </div>
                                <Form />
                            </div>
                            <button onClick={handleSignOut} className="logoutBtn">
                Logout
              </button>
        </div>
        
        
      </div >
    </div>
  );
};

export default Main;