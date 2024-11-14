import { React } from 'react';
import './App.css';
import 'react-chatbot-kit/build/main.css'
import Chatbot from 'react-chatbot-kit';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';
import Btn from './Btn.jsx';
import Imag from './Imag.jsx';
import { chatbot } from './components/images/chatbot.jpeg'
import { useState } from 'react';
import UseVisiblityToggler from './useVisibilityToggler.js';

function App() {
  const [vis, setVis] = useState(false);


  function handleClick(a) {

    if (vis == true) {
      setVis(false)
      console.log(vis)
    }
    else if (vis == false && a == 1) {
      setVis(true);
      console.log(vis)
    }

  }

  //document.getElementById
  {/*} const [chatbotComponent, toggleCardVisibility] = UseVisiblityToggler(
    <Chatbot config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider} />, false
  );*/}

  let Count = 0;
  function count() {

    if (Count == 0) {
      Count = 1;
    }
    else {
      Count = 0;
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        {/*<div className='divImag'>
          <img className='fast' src={require('./components/images/chatbot.jpeg').default}></img>

        </div>*/}
        <div className='clr'> </div>
        <div className='idiv'>


          {vis && <Chatbot config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider} />}

          <button className='ss ' style={{ top: 0 }} onClick={() => {

            handleClick(1);
          }}><Btn></Btn></button></div>

      </header>
    </div>
  );
}

export default App;
