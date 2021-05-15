import React, { Component } from "react";
import Slider from "react-slick";
import './OurPartner.css'
import styled from 'styled-components';




const HoverText = styled.p`
	color: #fff;
	:hover {
		color: #000;
		cursor: pointer;
        padding-right:60px;
	}
`


export default class Responsive extends Component {
  render() {
    var settings = {
      focusOnSelect: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3,
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
    };
    return (
      <div className="our-partners pt-5" style={{margin:'0'}}>
        <div className="data-name pb-5">
                    <h1 id="le"> Our Partners</h1>
        </div>
        <Slider {...settings}>
          <div className="brand">
            <img src="./images/brand1.svg"/>
            <HoverText> brand 1</HoverText>
          </div>
          <div className="brand">
          <img src="./images/brand2.svg"/>
          <HoverText> brand 2</HoverText>
          </div>
          <div className="brand">
          <img src="./images/brand3.svg"/>
          <HoverText> brand 3</HoverText>
          </div>
          <div className="brand">
          <img src="./images/brand4.svg"/>
          <HoverText> brand 4</HoverText>
          </div>
          <div className="brand">
          <img src="./images/brand5.svg"/>
          <HoverText> brand 5</HoverText>
          </div>
          <div className="brand">
          <img src="./images/brand6.svg"/>
          <HoverText> brand 6</HoverText>
          </div>
          <div className="brand">
          <img src="./images/brand7.svg"/>
          <HoverText> brand 7</HoverText>
          </div>
          <div className="brand">
          <img src="./images/brand4.svg"/>
          <HoverText> brand 1</HoverText>
          </div>
        </Slider>
      </div>
    );
  }
}
