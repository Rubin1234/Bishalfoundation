import React from 'react'
import './SuccessfullStories.css'
function SuccessfullStories() {
    return (
        <div className="pt-5">
            
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"style={{height:'400px',width:'80%',margin:'auto',backgroundColor:'#F0F0EB'}}>
            <h1 id="le">Successful Stories</h1>
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <div id="flexs">
                            <div className="col-md-1"></div>
                            <div className="col-md-6 ci">
                                <h3>Educated Nepal</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id nulla repellendus 
                                    corrupti mollitia consequuntur, est delectus natus molestias!
                                    Optio assumenda reiciendis facere aut cumque a. Commodi hic excepturi rem?</p>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <img src="./images/wwd1.jpg" className="d-block" alt="..." style={{height:'200px',width:'300px'}}/>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                    <div className="carousel-item"  >
                        <div id="flexs">
                            <div className="col-md-1"></div>
                            <div className="col-md-6 ci">
                                <h3> Educated Nepal</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id nulla repellendus 
                                    corrupti mollitia consequuntur, est delectus natus molestias!
                                    Optio assumenda reiciendis facere aut cumque a. Commodi hic excepturi rem?</p>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <img src="./images/wwd2.jpg" className="d-block" alt="..." style={{height:'200px',width:'300px'}}/>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <div id="flexs">
                            <div className="col-md-1"></div>
                            <div className="col-md-6 ci">
                                <h3> Educated Nepal</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id nulla repellendus 
                                    corrupti mollitia consequuntur, est delectus natus molestias!
                                    Optio assumenda reiciendis facere aut cumque a. Commodi hic excepturi rem?</p>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <img src="./images/wwd3.jpg" className="d-block" alt="..." style={{height:'200px',width:'300px'}}/>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default SuccessfullStories
