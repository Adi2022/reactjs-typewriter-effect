import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import developer from "../../../src/assets/images/developer.png";
import './Home.css'
const Home = () => {

    const[state]=useState({
        title:'Hi,',
        titleOne:"I 'm ",
        titleTwo:'Aditya Trivedi'
      
    });
  return (
    <div className='home'>
      <div className='home-intro'>
      <h2 className='heading'>
        <div className='title1'>{state.title}</div>
        <div className='title1'>{state.titleOne}</div>
        <div className='title1'>{state.titleTwo}</div>
      </h2>

      <div className='text'>
        <Typewriter 
        options={{autoStart:true,
          loop:true,
          delay:40,
          strings:[
            "I am a Frontend Developer",
            "I am also a Full Stack Devloper",
            "I am also a YouTuber"
          ]
        }}
        />
      </div>
      <div className='contact-me'>
    <button className='button'>Conatct Me</button>
      </div>
      </div>
      <div className='home-image'>
     <img className='developer' src={developer} alt="developer"/>
      </div>
    </div>
  )
}

export default Home