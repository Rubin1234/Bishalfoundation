import React from 'react'
import './Whatwedo.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Whatwedo() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrrows:true,
        slidesToScroll: 1,
        cssEase: "linear",
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

    return (
        <div className="what-we-do pt-5" >
            <div className="data-name">
                    <h1 id="le"> What We Do</h1>
            </div>
            <p style={{textAlign:'center'}}> We Work on the students and rural areas of Nepal which lacks on Education and other things.
                Our only aim is to make Nepal and Nepali Educated. ....... <a href=""> View All</a>
            </p>
            <Slider {...settings}>
            <div className="card-wrapper">
                <div className="carda">
                    <div className="card-image">
                        <img src="./images/wwd1.jpg" />
                    </div>
                    <div className="details">
                        <p> We are providing water and sanitation facilities for schools </p>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="carda">
                    <div className="card-image">
                        <img src="./images/wwd2.jpg" />
                    </div>
                    <div className="details">
                    <p> We are providing water and sanitation facilities for schools </p>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="carda">
                    <div className="card-image">
                        <img src="./images/wwd3.jpg" />
                    </div>
                    <div className="details">
                    <p> We are providing water and sanitation facilities for schools </p>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="carda">
                    <div className="card-image">
                        <img src="./images/wwd3.jpg" />
                    </div>
                    <div className="details">
                    <p> We are providing water and sanitation facilities for schools </p>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
    )
}

export default Whatwedo
