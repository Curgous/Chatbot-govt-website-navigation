import React from 'react'
import './App.css'

const Btn = () => {
  return (
    <div className='btn'>
      <div className='inner-button'><div className='inner'>
        <img src={require('./components/images/robo.svg').default}></img>
      </div></div>
    </div>
  )
}

export default Btn;