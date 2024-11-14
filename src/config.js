import { createChatBotMessage } from "react-chatbot-kit";
import { BotAvatar } from "./components/BotAvatar";
//import Options from "./components/Options/Options";
import Tags from "./components/widget/tag";
import PassR from "./components/widget/passR";
import PanA from "./components/widget/panA";
import PanP from "./components/widget/panP";
import PanU from "./components/widget/panU";
import AadA from "./components/widget/aadA";
import AadU from "./components/widget/aadU";


const config = {
    botName: "Ekendra",
    initialMessages: [createChatBotMessage(`Hello, Can you please tell you're name`)],
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />
    },
    state: {
        movie: ["gladiator"],
        count: [0],
        pan: [0],
        aadhar: [0],
        passport: [0]
    },
    widgets: [
        {
            widgetName: "tags",
            widgetFunc: (props) => <Tags {...props} />,
        },
        {
            widgetName: "passR",
            widgetFunc: (props) => <PassR {...props} />,
        },
        {
            widgetName: "panA",
            widgetFunc: (props) => <PanA {...props} />,
        },
        {
            widgetName: "panP",
            widgetFunc: (props) => <PanP {...props} />,
        },
        {
            widgetName: "panU",
            widgetFunc: (props) => <PanU {...props} />,
        },
        {
            widgetName: "aadA",
            widgetFunc: (props) => <AadA {...props} />,
        },
        {
            widgetName: "aadU",
            widgetFunc: (props) => <AadU {...props} />,
        },
    ]
    /*{
        widgetName: "options",
        widgetFunc: (props) => <Options {...props} />,
    }]*/

}

export default config