import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import Navone from './Navone';
import { isAuthenticated, signout } from '../admin/auth';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

function Header({history}) {
        
    return (
        <div>
            <Navone/>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="col-md-1 non"></div>
                    <Link to="/" className="navbar-brand" href="#" style={{paddingRight:'60px'}}><img src="./images/bfoundationlogo.svg" alt="" height="59px" width="155px" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse whit" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 uls " >
                        <li id="block">Who We Are
                                <div id="cate" className="pt">
                                    <ul id="pad" className="pad">
                                        <li id="men" className="actives"><Link to="" id="li">About Us</Link>
                                            <div id="sec" className="sec">
                                                <ul  id="pt" >
                                                    <h3>About Us</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p>Zero Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/blood.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men1"><Link to="" id="li">Leadership</Link>
                                            <div id="sec1" >
                                                <ul  id="pt" className="sec">
                                                    <h3>Our Leadership</h3>
                                                    <div style={{display:'flex'}}>
                                                            <p> First Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                                magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                                itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                            </p>
                                                            <div style={{marginLeft:'40px'}}>
                                                                <img src="images/clothes.jpg" alt="" height="271px" width="320px" />
                                                            </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men2"><Link to="" id="li">Executive BOard</Link>
                                            <div id="sec2" >
                                                <ul  id="pt" className="sec">
                                                    <h3>Our Executive</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Second Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/traffic.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men3"><Link to="" id="li">Advisory Board</Link>
                                            <div id="sec3">
                                                <ul  id="pt"  className="sec">
                                                    <h3>Adisory Board</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Third Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/water.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men4"><Link to="" id="li">Secreatariat</Link>
                                            <div id="sec4" >
                                                <ul  id="pt"className="sec">
                                                    <h3>Fourth Secretariat</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Second Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/blood.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men5"><Link to="" id="li">Transparency <span style={{paddingRight:'40px'}}>&</span> Accountability</Link>
                                            <div id="sec5" >
                                                <ul  id="pt" className="sec">
                                                    <h3>Transparency & Accountability</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Fourth Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/clothes.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul> 
                                            </div>
                                        </li>
                                        <li  id="men6"><Link to="" id="li">FAQ</Link>
                                            <div id="sec6" >
                                                <ul  id="pt" className="sec">
                                                    <h3>FAQ</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Fifth Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/water.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul> 
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <span className="non" style={{paddingLeft:'30px',paddingRight:'30px'}}></span>
                            <li id="blocks" className="wwd">Who We Do
                                <div id="wwd" className="wws" >
                                    <ul >
                                        <li className="sdgs">SDGS(Sustainable Development Goals)
                                            <div id="dns">
                                                 <ul  className="dns">
                                                    <li><Link to="" id="li">Enterpeneurship</Link></li>
                                                    <li><Link to="" id="li">Education</Link></li>
                                                    <li><Link to="" id="li">Health</Link></li>
                                                    <li><Link to="" id="li">Youth</Link></li>
                                                    <li><Link to="" id="li">Child</Link></li>
                                                    <li><Link to="" id="li">Sports</Link></li>
                                                    <li><Link to="" id="li">Art</Link></li>
                                                    <li><Link to="" id="li">Culture</Link></li>
                                                    <li id="trsm"><Link to="" id="li">Tourism</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="sdgs1" ><Link to="" id="li">Community Based Programs</Link>
                                            <div id="dns1">
                                                 <ul className="dns">
                                                    <li><Link to="" id="li">Humanitarian Aid</Link></li>
                                                   <li><Link to="" id="li">Skill Training</Link></li>
                                                   <li id="trsm"><Link to="" id="li">Awareness Program</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li id="trsm" ><Link to="" id="li">Startup Idea Call Program</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <span className="non" style={{paddingLeft:'30px',paddingRight:'30px'}}></span>
                            <li id="blocka" className="ba">Resource And Media
                                <div id="catea" className="pt1">
                                    <ul id="pada"  className="pad">
                                        <li id="mena " className="actives"><Link to="" id="li">Media Center</Link>
                                            <div id="seca">
                                                <ul  id="pta" className="secs" >
                                                    <h3>What we do</h3>
                                                <div style={{display:'flex'}}>
                                                        <p>Zero Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/blood.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men1a"><Link to="" id="li">Press Release</Link>
                                            <div id="sec1a">
                                                <ul  id="pta" className="secs">
                                                    <h3>Our Leadership</h3>
                                                    <div style={{display:'flex'}}>
                                                            <p> First Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                                magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                                itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                            </p>
                                                            <div style={{marginLeft:'40px'}}>
                                                                <img src="images/clothes.jpg" alt="" height="271px" width="320px" />
                                                            </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men2a"><Link to="" id="li">Successful Stories</Link>
                                            <div id="sec2a">
                                                <ul  id="pta" className="secs">
                                                    <h3>Our Executive</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Second Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/water.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men3a"><Link to="" id="li">News Coverage</Link>
                                            <div id="sec3a">
                                                <ul  id="pta" className="secs">
                                                    <h3>Adisory Board</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Third Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/traffic.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men4a"><Link to="" id="li">Speech</Link>
                                            <div id="sec4a">
                                                <ul  id="pta" className="secs">
                                                    <h3>Fourth Secretariat</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Second Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/water.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men5a"><Link to="" id="li">Annual Reports</Link>
                                            <div id="sec5a">
                                                <ul  id="pta" className="secs">
                                                    <h3>Transparency & Accountability</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Fourth Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/clothes.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul> 
                                            </div>
                                        </li>
                                        <li  id="men6a"><Link to="" id="li">Our Gallery</Link>
                                        
                                            <div id="sec6a">
                                                <ul  id="pta" className="secs">
                                                    <h3>Our Gallery</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Fifth Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/blood.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul> 
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <span className="non" style={{paddingLeft:'30px',paddingRight:'30px'}} id="sp"></span>
                            <li id="blockp">Get Involved
                                <div id="catep" className="pts">
                                    <ul id="padp" className="pad padp" >
                                        <li id="men " className="actives"><Link to="" id="li">Internship</Link>
                                            <div id="secp" >
                                                <ul  id="ptp" className="sec0">
                                                    <h3>What we do</h3>
                                                <div style={{display:'flex'}}>
                                                        <p>Zero Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/traffic.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men1p"><Link to="" id="li">Volunteering</Link>
                                            <div id="sec1p">
                                                <ul  id="ptp" >
                                                    <h3>Our Leadership</h3>
                                                    <div style={{display:'flex'}}>
                                                            <p> First Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                                magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                                itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                            </p>
                                                            <div style={{marginLeft:'40px'}}>
                                                                <img src="images/blood.jpg" alt="" height="271px" width="320px" />
                                                            </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men2p"><Link to="" id="li">Partnership</Link>
                                            <div id="sec2p">
                                                <ul  id="ptp">
                                                    <h3>Our Executive</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Second Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/clothes.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men3p"><Link to="" id="li">Carrer</Link>
                                            <div id="sec3p">
                                                <ul  id="ptp">
                                                    <h3>Adisory Board</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Third Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/water.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li  id="men4p"><Link to="" id="li">Donate</Link>
                                            <div id="sec4a">
                                                <ul  id="ptp">
                                                    <h3>Fourth Secretariat</h3>
                                                    <div style={{display:'flex'}}>
                                                        <p> Second Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                                                            magnam distinctio? Sequi eaque, dicta nihil corrupti ipsum exercitationem tenetur iure asperiores
                                                            itaque distinctio nesciunt nisi sapiente temporibus nobis minus magnam!
                                                        </p>
                                                        <div style={{marginLeft:'40px'}}>
                                                            <img src="images/clothes.jpg" alt="" height="271px" width="320px" />
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <span className="non" style={{paddingLeft:'105px',paddingRight:'0px'}}></span>
                            <li id="blockh"><i class="fas fa-search"></i>
                                <div id="cateh">
                                    <ul id="padh">
                                    <i class="fas fa-times"></i>
                                        <div className="ss">
                                            <form action="">
                                                <input type="text" />
                                                <button>Search</button>
                                            </form>
                                        </div>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Header)
