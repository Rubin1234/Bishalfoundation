import React from 'react'

function GoogleMap() {
    return (
        <div className="pt-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3904809304177!2d85.33030251438525!3d27.736099630836144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cc064b8ac7%3A0xf81ec58f08b492d0!2sBishal%20Media%20Group!5e0!3m2!1sen!2snp!4v1619422822257!5m2!1sen!2snp"
               width="100%"
               height="450" 
               style={{ border: 0 }}
               allowfullscreen="" 
               loading="lazy">
               </iframe>
        </div>
    )
}

export default GoogleMap
