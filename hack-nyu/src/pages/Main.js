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

  const handleAccount = async () => {
    try {
      navigate('/Account')
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

    return date.toLocaleString("en-US", { month: "long" });
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
      if (post.day == d && post.month == m) {
        return true;
      } else {
        return false;
      }
    });
    let modal = document.getElementById("modal");
    let first = document.getElementById("questionOneValue");
    let second = document.getElementById("questionTwoValue");
    let third = document.getElementById("questionThreeValue");
    let four = document.getElementById("questionFourValue");
    let five = document.getElementById("questionFiveValue");
    let six = document.getElementById("questionSixValue");
    let seven = document.getElementById("questionSevenValue");
    let eight = document.getElementById("questionEightValue");
    let date = document.getElementById("date");
    // let length = results.length;
    if (results[results.length-1]) {
      first.innerHTML = results[results.length-1].questionOneAnswer;
      second.innerHTML = results[results.length-1].questionTwoAnswer;
      third.innerHTML = results[results.length-1].questionThreeAnswer;
      four.innerHTML = results[results.length-1].questionFourAnswer;
      five.innerHTML = results[results.length-1].questionFiveAnswer;
      six.innerHTML = results[results.length-1].questionSixAnswer;
      seven.innerHTML = results[results.length-1].questionSevenAnswer;
      eight.innerHTML = results[results.length-1].questionEightAnswer;
      date.innerHTML = "2" + "/" + d + "/2023";
    }else{
      first.innerHTML = "No Response Recorded";
      second.innerHTML = "No Response Recorded";
      third.innerHTML = "No Response Recorded";
      four.innerHTML = "No Response Recorded";
      five.innerHTML = "No Response Recorded";
      six.innerHTML = "No Response Recorded";
      seven.innerHTML = "No Response Recorded";
      eight.innerHTML = "No Response Recorded";
      date.innerHTML = "2" + "/" + d + "/2023";
    }

    modal.classList.add("show");
  }

  function switchShow() {
    let modal = document.getElementById("modal");
    modal.classList.remove("show");
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
            
            <div id="navbar">
              <h1 className="welcome">Welcome, {user?.displayName}</h1>
              <div id="navbarBtn-container">
                <button onClick={handleSignOut} className="navbarBtn">
                  Logout
                </button>
                <button onClick={handleAccount} className="navbarBtn">
                  Account
                </button>
              </div>
            </div>

          <div className="innerMain">
            <h1 id="lastSeven">Weekly Submissions</h1>
            <br></br>
            <div className="formBoxes">
              <div className="formBox" onClick={() => openForm(month, day-6)}>
                <div id="month">{month}</div>
                <div id="day">{day - 6}</div>
              </div>
              <div className="formBox" onClick={() => openForm(month, day-5)}>
                <div id="month">{month}</div>
                <div id="day">{day - 5}</div>
              </div>
              <div className="formBox" onClick={() => openForm(month, day-4)}>
                <div id="month">{month}</div>
                <div id="day">{day - 4}</div>
              </div>
              <div className="formBox" onClick={() => openForm(month, day-3)}>
                <div id="month">{month}</div>
                <div id="day">{day - 3}</div>
              </div>
              <div className="formBox" onClick={() => openForm(month, day-2)}>
                <div id="month">{month}</div>
                <div id="day">{day - 2}</div>
              </div>
              <div className="formBox" onClick={() => openForm(month, day-1)}>
                <div id="month">{month}</div>
                <div id="day">{day - 1}</div>
              </div>
              <div className="formBox" onClick={() => openForm(month, day)}>
                <div id="month">{month}</div>
                <div id="day">{day}</div>
              </div>
            </div>
            <Form />
            <div className="modal" id="modal">
              <h1 id="date"></h1>
              <p id="X" onClick={switchShow}>
                X
              </p>
              <div>
                <h3>1. How satisfied am I with myself today?</h3>
                <p id="questionOneValue"></p>
                <h3>2. Am I feeling content and peaceful today?</h3>
                <p id="questionTwoValue"></p>
                <h3>3. Do I feel optimistic about the future? </h3>
                <p id="questionThreeValue"></p>
                <h3>4. What are my overall energy levels right now?</h3>
                <p id="questionFourValue"></p>
                <h3>5. Am I worried or anxious about anything today? </h3>
                <p id="questionFiveValue"></p>
                <h3>6. Frequency of negative thoughts?</h3>
                <p id="questionSixValue"></p>
                <h3>7. Do I feel connected to myself and others around me? </h3>
                <p id="questionSevenValue"></p>
                <h3>8. How anxious was I today?</h3>
                <p id="questionEightValue"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
