import React,{Component} from 'react'
import './Footer.css'
import { FacebookProvider, Page } from 'react-facebook';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container pt-4 pb-2">
                    <div className="footer-div1 col-md-4">
                        <img src="./images/bfoundationlogo.svg" />
                        <p> विशाल फाउण्डेशन सामाजिक गतिविधिका माध्यमबाट नेपालको विकास र समृद्धीमा योगदान गर्न चाहने उद्यमीहरुको च्यारिटेवल संस्था हो । नेपाल अधिराज्यभर कार्यक्षेत्र रहेको यो संस्थाले शिक्षा, स्वास्थ्य, खेलकुद, सरसफाई, कला, संस्कृतिको प्रवद्र्धनलगायतका सचेतनामुलक कार्यक्रमहरु गदैं आईरहेको छ । </p>
                    </div>

                    <div className="footer-div2 col-md-4">
                            <FacebookProvider appId="213771887177534" > 
                            <Page href="https://www.facebook.com/buyandsellNCE" tabs="timeline" height="300px" />
                            </FacebookProvider>  
                    </div>

                    <div className="footer-div3 col-md-4">
                        <h3>Contact us</h3>
                        <ul className="footerul">
                            <li>  Maharajgunj-03,Kathmandu,Nepal</li>
                            <li> <i class="fas fa-phone-alt"></i> 977-01-4442444/445</li>
                            <li><i class="fas fa-mail-bulk"></i>Fax: 977-1-444/445</li>
                            <li><i class="far fa-envelope"></i>info@bishalfoundation.org</li>
                        </ul>
                    </div>   
            </div>
        </div>
      )
}

export default Footer
