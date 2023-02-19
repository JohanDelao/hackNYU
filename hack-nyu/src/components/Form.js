import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import {useState} from "react";


export default function Form(){
    const [question1, setQuestion1] = useState(0);
    const [question2, setQuestion2] = useState(0);
    const [question3, setQuestion3] = useState(0);
    const [question4, setQuestion4] = useState(0);
    const [question5, setQuestion5] = useState(0);
    const [question6, setQuestion6] = useState(0);
    const [question7, setQuestion7] = useState(0);
    const [question8, setQuestion8] = useState(0);

    function updateQuestionOne(){
        let slider = document.getElementById("questionOne").value;
        setQuestion1( () => {
          return slider;
        })
        console.log(question1)
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

    const submitPost = async (e) => {
        e.preventDefault();
        console.log("works")
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
        });
    };
    return (
        <div className="innerForm">
            <h1 id="formTitle">Today's Daily Form</h1>
            <form className="formANQ">
                <div className="leftQuestion">
                    <div className="questionSection">
                        <p className="question">This is a question</p>
                        <input type="range" min="1" max="10" id="questionOne" defaultValue={question1} onInput={updateQuestionOne} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">This is a question 2</p>
                        <input type="range" min="1" max="10" id="questionTwo" defaultValue={question2} onInput={updateQuestionTwo} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">This is a question 3</p>
                        <input type="range" min="1" max="10" id="questionThree" defaultValue={question3} onInput={updateQuestionThree} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">This is a question 4</p>
                        <input type="range" min="1" max="10" id="questionFour" defaultValue={question4} onInput={updateQuestionFour} class="slider" />
                    </div>
                </div>
                <div className="rightSection">
                    <div className="questionSection">
                        <p className="question">This is a question 5</p>
                        <input type="range" min="1" max="10" id="questionFive" defaultValue={question5} onInput={updateQuestionFive} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">This is a question 6</p>
                        <input type="range" min="1" max="10" id="questionSix" defaultValue={question6} onInput={updateQuestionSix} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">This is a question 7</p>
                        <input type="range" min="1" max="10" id="questionSeven" defaultValue={question7} onInput={updateQuestionSeven} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">This is a question 8</p>
                        <input type="range" min="1" max="10" id="questionEight" defaultValue={question8} onInput={updateQuestionEight} class="slider" />
                    </div>
                </div>
            </form>
            <div className="buttonSection">
                <button id="submitButton" onClick={submitPost} type="submit">Submit Form</button>
            </div>
        </div>
    )
}