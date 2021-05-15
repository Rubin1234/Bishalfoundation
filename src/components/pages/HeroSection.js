import React from 'react'
// import vid1 from './videos/video-2.mp4'
import './HeroSection.css'
function HeroSection() {
    return (
        <div className="hero-container">
            <video src="./videos/video-2.mp4" autoPlay loop muted/>
            <div className="don">
                <p> Bishal Foundation is a non-profitable organization working for the prosperity of Nepal. It is a 
                    charitable organization of entrepreneurs who stepped forward intending ...
                </p>
                <div className="dnt">
                    <button id="donate" >Donate</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
