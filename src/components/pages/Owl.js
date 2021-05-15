import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './owl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const options = {
    loop:true,
    autoplay:7000,
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,

        }
    },
};
export class Owl extends Component {
    render() {
        return (
            <div className="pt-5" style={{width:'85%', margin:'auto'}}> 
             <h1 id="le">News Coverage</h1>
            <div className="bg-light pt-5">
                <OwlCarousel {...options}
                 navText={["<i class='fa arrow-circle-left'><</i>","<i class='fa arrow-right'>></i>"]}
    
                    >
                        <div className="item" >
                            <Link to="https://ekantipur.com/news/2021/05/11/162072665965885376.html" id="owll" target="blank">
                                <img src="images/covid.jfif" alt="" />
                                <p id="prp"><span id="hes">शुक्रराज अस्पतालमा किट अभावले पीसीआर परीक्षण रोकियो</span></p>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="https://ekantipur.com/news/2021/05/11/162071325512744134.html" id="owll" target="blank">
                                <img src="images/dewa.jfif" alt="" />
                                <p id="prp"><span id="hes">कांग्रेसको पदाधिकारी बैठक बस्दै</span></p>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="https://thahakhabar.com/news/125307/" id="owll" target="blank">
                                <img src="images/oxyzen.jpg" alt="" />
                                <p id="prp"><span id="hes">अक्सिजन उद्योगमा विद्युत् आपूर्ति नियमित गर्न सरकारको निर्देशन</span></p>
                            </Link>
                        </div>
                
                        <div className="item">
                            <Link to="https://gorkhapatraonline.com/mainnews/2021-05-11-37238" id="owll" target="blank">
                                <img src="images/oli.jpg" alt="" />
                                <p id="prp"><span id="hes">सहमतिका साथ अगाडि बढौँ :प्रधानमन्त्री</span></p>
                            </Link>
                        </div>
                 </OwlCarousel>
                </div>
            </div>
        )
    }
}

export default Owl
