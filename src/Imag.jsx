import React from 'react'
import './components/images/chatbot.jpeg'

const Imag = () => {
    return (
        <div className='img-div'>
            <img className='imag' src={require('./components/images/robo.svg').default}></img>
        </div>
    )
}

export default Imag
//