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
                                <h1 id="lastSeven">Last 7 Days</h1>
                                <div className="formBoxes">
                                    <div className="formBox">2/18/2023</div>
                                    <div className="formBox">2/18/2023</div>
                                    <div className="formBox">2/18/2023</div>
                                    <div className="formBox">2/18/2023</div>
                                    <div className="formBox">2/18/2023</div>
                                    <div className="formBox">2/18/2023</div>
                                    <div className="formBox">2/18/2023</div>
                                </div>
                                <Form />
                            </div>
                            <button onClick={handleSignOut} className="logoutBtn">
                Logout
              </button>
              <button onClick={goToVideoTest} className="logoutBtn">
                VideoTest
              </button>
        </div>
        
        
      </div >
    </div>
  );
};
/* import Form from "../components/Form"
const Main = () => {
    return (
        <div className="container">
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
                            <div className="innerMain">
                                <h1 id="lastSeven">Last 7 Days</h1>
                                <div className="formBoxes">
                                    <div className="formBox">2/18/2023</div>
                                    <div className="formBox">2/18/2023</div>
                                    <div className="formBox">2/18/2023</div>
                                    <div className="formBox">2/18/2023</div>
                                    <div className="formBox">2/18/2023</div>
                                    <div className="formBox">2/18/2023</div>
                                    <div className="formBox">2/18/2023</div>
                                </div>
                                <Form />
                            </div>
                </div>
            </div>
        </div>
    )
}
*/
export default Main;