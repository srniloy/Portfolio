import React from 'react'
import './about.css'
import picture from '../../resources/img/shahriar.jpg'
import { secondaryTextColor } from '../../values/Values'

export const About = () => {
  return (
    <div id="about" className="p-container">
        <div className="about-container c-container">
            <div className="heading">
                <h2 style={{fontFamily: "concert one", color: "white", fontSize:"2em"}}>About Me</h2>
            </div>

            <div className="main-content">
              <div className="content-texts" style={{flex:"6", padding:"5vh"}}>
                <p style={{width: "80%", textAlign: 'justify', color: secondaryTextColor}}>
                  Hello, I am Shahriar, a student of Computer Science and Engineering, a full-stack website developer (MERN Stack). I enjoy building websites (especially the backend). Back in 2018, when I was in the 11th class, I started learning HTML and CSS from my academic subject called ICT. At that time, I was learning those things to get good marks on the subject, but in that process, I started to enjoy building websites. After completing my Intermediate/HSC Exam(2019), I started learning website development seriously to build my career as a website developer. To see my three years (2019 to 2022) learning process, <a href="#studies">scroll down</a>
                </p>
              </div>
              <div className="content-images" style={{flex:"2"}}>
                <img src={picture} style={{width: "200px", height: "200px"}} alt="Shahriar's Photo" />
              </div>
            </div>
        </div>
    </div>
  )
}
