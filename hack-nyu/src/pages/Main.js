import Form from "../components/Form"
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
export default Main;