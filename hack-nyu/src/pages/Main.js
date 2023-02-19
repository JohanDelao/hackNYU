import React, { useEffect } from "react";
import { UserAuth } from "../context/GoogleAuth";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { useState } from "react";
import {
  collection,
  collectionGroup,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../firebase";
import Message from "../components/Message";

const Main = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const [person, loading] = useAuthState(auth);
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, where("user", "==", person.uid));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

  useEffect(() => {
    getData();
  }, [person, loading]);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const goToVideoTest = async () => {
    try {
      navigate("/VideoTest");
    } catch (error) {
      console.log(error);
    }
  };
  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', { month: 'long' });
  }

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  month = getMonthName(month).toLowerCase();
  month = month[0] + month[1] + month[2];

  // const getData2 = async (m,d) => {
  //   const collectionRef = collection(db, "posts");
  //   const q = query(collectionRef, where('month', '==', m), where('day', '==', d), where('user', '==', person.uid));
  //   const unsubscribe = onSnapshot(q, (snapshot => {
  //     setPosts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //   }))
  //   return unsubscribe;
  // }

  function openForm(m, d){
    console.log(posts)
    console.log(m)
    console.log(d)
    const results = posts.filter((post) => {
      if(post.day == d && post.month == m){
        return true;
      }else{
        return false;
      }
    })
    let modal = document.getElementById("modal");
    let first = document.getElementById("questionOneValue");
    console.log(results)
    console.log(results[0].questionOneAnswer);
    first.innerHTML = results[0].questionOneAnswer;
    modal.classList.add("show");
  }

  return (
    <div className="body1">
      <div className="area">
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
                  <div id="month">{month}</div>
                  <div id="day">{day-6}</div>
                </div>
                <div className="formBox">
                  <div id="month">{month}</div>
                  <div id="day">{day-5}</div>
                </div>
                <div className="formBox">
                  <div id="month">{month}</div>
                  <div id="day">{day-4}</div>
                </div>
                <div className="formBox">
                  <div id="month">{month}</div>
                  <div id="day">{day-3}</div>
                </div>
                <div className="formBox">
                  <div id="month">{month}</div>
                  <div id="day">{day-2}</div>
                </div>
                <div className="formBox">
                  <div id="month">{month}</div>
                  <div id="day">{day-1}</div>
                </div>
                <div className="formBox" onClick={() => openForm(month, day)}>
                  <div id="month">{month}</div>
                  <div id="day">{day}</div>
                </div>
              </div>
              <Form />
              <div className="modal" id="modal">
                  <div>
                    <p id="questionOneValue"></p>
                    <p id="questionTwoValue"></p>
                    <p id="questionThreeValue"></p>
                  </div>
              </div>
            </div>
            <button onClick={handleSignOut} className="logoutBtn">
              Logout
            </button>
          </div>
        </div>
      </div>
  );
};
export default Main;
