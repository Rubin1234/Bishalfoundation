import React from 'react'
import './MeetOurTeam.css'

function MeetOurTeam() {
    return (
        <div className="meet-our-team pt-5" >
             <div className="data-name">
                    <h1 id="le"> Meet Our Team</h1>
             </div>
             <div className="team-container">
                    <div className="team">
                        <img src="./images/img-1.jpg" />
                        <div className="name">
                            <h5>Kabir KC</h5>
                            <p>Project Manager</p>
                        </div>
                    </div>
                    <div className="team">
                        <img src="./images/img-2.jpg"/>
                        <div className="name">
                            <h5>Bina Bhandari</h5>
                            <p>Chief Executive</p>
                        </div>
                    </div>
                    <div className="team">
                        <img src="./images/img-3.jpg"/>
                        <div className="name">
                            <h5>Ayushi K.</h5>
                            <p>Chief Executive</p>
                        </div>
                    </div>
             </div>   
        </div>
    )
}

export default MeetOurTeam
