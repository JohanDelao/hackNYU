export default function Form(){
    return (
        <div className="innerForm">
            <h1 id="formTitle">Today's Daily Form</h1>
            <div className="formANQ">
                <div className="leftQuestion">
                    <div className="questionSection">
                        <p className="question">This is a question</p>
                        <input type="range" min="1" max="10" defaultValue={"0"} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">This is a question 2</p>
                        <input type="range" min="1" max="10" defaultValue={"0"} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">This is a question 3</p>
                        <input type="range" min="1" max="10" defaultValue={"0"} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">This is a question 4</p>
                        <input type="range" min="1" max="10" defaultValue={"0"} class="slider" />
                    </div>
                </div>
                <div className="rightSection">
                    <div className="questionSection">
                        <p className="question">This is a question 5</p>
                        <input type="range" min="1" max="10" defaultValue={"0"} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">This is a question 6</p>
                        <input type="range" min="1" max="10" defaultValue={"0"} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">This is a question 7</p>
                        <input type="range" min="1" max="10" defaultValue={"0"} class="slider" />
                    </div>
                    <div className="questionSection">
                        <p className="question">This is a question 8</p>
                        <input type="range" min="1" max="10" defaultValue={"0"} class="slider" />
                    </div>
                </div>
            </div>
            <div className="buttonSection">
                <button id="submitButton">Submit Form</button>
            </div>
        </div>
    )
}