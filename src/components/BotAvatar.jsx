import React from 'react'
import './BotAvatar.css'
//import { robo } from "./images/robo.svg"

export const BotAvatar = () => {
    return (
        <div className='botavatar'><div><img className='bot' src={require('./images/robo.svg').default} alt='robo'></img></div></div>
    )
}
