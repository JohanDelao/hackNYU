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

  useEffect(() =>{
    getData();
  }, [person, loading])

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
            <h1 id="lastSeven">Last 7 Days</h1>
            <div className="formBoxes">
              {posts.map((post) => {
                return <Message {...post}>
                  <div>
                    <p>{post.timestamp}</p>
                  </div>
                </Message>
              })}
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
      </div>
    </div>
  );
};
export default Main;
