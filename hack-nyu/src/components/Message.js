export default function Message(props){
    return (
        <div className="formBox">
            <p>{props.questionOneAnswer}</p>
            <p>{props.questionTwoAnswer}</p>
            <p>{props.questionThreeAnswer}</p>
            <p>{props.questionFourAnswer}</p>
            <p>{props.questionFiveAnswer}</p>
            <p>{props.questionSixAnswer}</p>
            <p>{props.questionSevenAnswer}</p>
            <p>{props.questionEightAnswer}</p>
            <p>{props.date}</p>
        </div>
    )
}