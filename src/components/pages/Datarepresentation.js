import React from 'react'
import './Datarepresentation.css'
function Datarepresentation() {
    return (
        <div className="data-representation pt-5">
             <div className="data-name">
                    <h1 id="le"> Data Representation</h1>
                </div>
            <div className="data-container">
                 <div className="col-lg-3 col-12 text-center">
                     <h1 className="data-number"> 42% </h1>
                     <h5> of people of nepal are out of electricity</h5>
                 </div>
                 <div className="col-lg-3 col-12 text-center">
                     <h1 className="data-number"> 700 </h1>
                     <h5> Students go abroad for study</h5>
                 </div>
                 <div className="col-lg-3 col-12 text-center">
                     <h1 className="data-number"> 34% </h1>
                     <h5> cannot eat properly</h5>
                 </div>
            </div>
            
        </div>
    )
}

export default Datarepresentation
