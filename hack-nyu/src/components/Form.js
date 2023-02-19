import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import {useState} from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';


export default function Form(){
    const [question1, setQuestion1] = useState(0);
    const [question2, setQuestion2] = useState(0);
    const [question3, setQuestion3] = useState(0);
    const [question4, setQuestion4] = useState(0);
    const [question5, setQuestion5] = useState(0);
    const [question6, setQuestion6] = useState(0);
    const [question7, setQuestion7] = useState(0);
    const [question8, setQuestion8] = useState(0);

    const [user, loading] = useAuthState(auth)

    function updateQuestionOne(){
        let slider = document.getElementById("questionOne").value;
        setQuestion1( () => {
          return slider;
        })
    }
    function updateQuestionTwo(){
        let slider = document.getElementById("questionTwo").value;
        setQuestion2( () => {
            return slider;
        })
    }
    function updateQuestionThree(){
        let slider = document.getElementById("questionThree").value;
        setQuestion3( () => {
            return slider;
        })
    }
    function updateQuestionFour(){
        let slider = document.getElementById("questionFour").value;
        setQuestion4( () => {
            return slider;
        })
    }
    function updateQuestionFive(){
        let slider = document.getElementById("questionFive").value;
        setQuestion5( () => {
            return slider;
        })
    }
    function updateQuestionSix(){
        let slider = document.getElementById("questionSix").value;
        setQuestion6( () => {
            return slider;
        })
    }
    function updateQuestionSeven(){
        let slider = document.getElementById("questionSeven").value;
        setQuestion7( ()=>{
            return slider;
        })
    }
    function updateQuestionEight(){
        let slider = document.getElementById("questionEight").value;
        setQuestion8( ()=>{
            return slider;
        })
    }

    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
      
        return date.toLocaleString('en-US', { month: 'long' });
      }

    const submitPost = async (e) => {
        e.preventDefault();
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        month = getMonthName(month).toLowerCase();
        month = month[0] + month[1] + month[2];
        // Make a new form
        const collectionRef = collection(db, 'posts')
        await addDoc(collectionRef,{
            timestamp: serverTimestamp(),
            questionOneAnswer: question1,
            questionTwoAnswer: question2,
            questionThreeAnswer: question3,
            questionFourAnswer: question4,
            questionFiveAnswer: question5,
            questionSixAnswer: question6,
            questionSevenAnswer: question7,
            questionEightAnswer: question8,
            user: user.uid,
            month: month,
            day: day,
        });
        setQuestion1( () => {
            let slider = document.getElementById("questionOne");
            slider.value = 0;
            return 0
        });
        setQuestion2( () => {
            let slider = document.getElementById("questionTwo");
            slider.value = 0;
            return 0
        });
        setQuestion3( () => {
            let slider = document.getElementById("questionThree");
            slider.value = 0;
            return 0
        });
        setQuestion4( () => {
            let slider = document.getElementById("questionFour");
            slider.value = 0;
            return 0
        });
        setQuestion5( () => {
            let slider = document.getElementById("questionFive");
            slider.value = 0;
            return 0
        });
        setQuestion6( () => {
            let slider = document.getElementById("questionSix");
            slider.value = 0;
            return 0
        });
        setQuestion7( ()=>{
            let slider = document.getElementById("questionSeven");
            slider.value = 0;
            return 0
        });
        setQuestion8(()=>{
            let slider = document.getElementById("questionEight");
            slider.value = 0;
            return 0
        });
    };
    const navigate = useNavigate();

    const goToVideoTest = async () => {
        try {
          navigate('/VideoTest')
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div className="innerForm">
            <h1 id="formTitle">Today's Daily Form</h1>
            <form className="formANQ">
                <div className="leftQuestion">
                    <div className="questionSection">
                        <p className="question">How satisfied am I with myself today?</p>
                        <input type="range" min="1" max="10"id="questionOne" defaultValue={question1} onInput={updateQuestionOne} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">Am I feeling content and peaceful today?</p>
                        <input type="range" min="1" max="10" id="questionTwo" defaultValue={question2} onInput={updateQuestionTwo} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">Do I feel optimistic about the future?</p>
                        <input type="range" min="1" max="10" id="questionThree" defaultValue={question3} onInput={updateQuestionThree} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">Overall energy levels right now</p>
                        <input type="range" min="1" max="10" id="questionFour" defaultValue={question4} onInput={updateQuestionFour} class="slider" />
                    </div>
                </div>
                <div className="rightSection">
                    <div className="questionSection">
                        <p className="question">Am I worried or anxious about anything today?</p>
                        <input type="range" min="1" max="10" id="questionFive" defaultValue={question5} onInput={updateQuestionFive} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">Frenquecy of negative questions</p>
                        <input type="range" min="1" max="10" id="questionSix" defaultValue={question6} onInput={updateQuestionSix} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">Do I feel connected to myself and others around me?</p>
                        <input type="range" min="1" max="10" id="questionSeven" defaultValue={question7} onInput={updateQuestionSeven} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">How anxious was I today?</p>
                        <input type="range" min="1" max="10" id="questionEight" defaultValue={question8} onInput={updateQuestionEight} class="slider" />
                    </div>
                </div>
            </form>
            <div className="buttonSection">
                <button onClick={goToVideoTest} id="videoButton">
                    Record Journal
                </button>
                <button id="submitButton" onClick={submitPost}>Submit Form</button>
            </div>
        </div>
    )
}