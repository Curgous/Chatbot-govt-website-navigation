import React from "react";
import './tag.css';

const Tags = (props) => {
    console.log(props)
    const options = [
        {
            text: "Pan",
            handler: props.actionProvider.handlePan,
            id: 1,
        },
        {
            text: "Passport",
            handler: props.actionProvider.handlePassport, id: 2
        },
        { text: "Aadhar", handler: props.actionProvider.handleAadhar, id: 3 },
    ];
    const option = options[0];
    const option1 = options[1];
    const option2 = options[2];

    /*<a className="tag" target="_blank"
        href="https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/advanced/widgets"> youtube</a>*/
    return <div className="dv">
        <div className="f" >
            <button key={option.id} onClick={option.handler} className="option-button">
                {option.text}
            </button>
        </div>
        <div className="f"><button key={option1.id} onClick={option1.handler} className="option-button">
            {option1.text}
        </button></div>
        <div className="f" ><button key={option2.id} onClick={option2.handler} className="option-button">
            {option2.text}
        </button></div>
    </div>



}
export default Tags;