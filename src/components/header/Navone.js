import React from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated, signout } from '../admin/auth';
import { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
function Navone({history}) {
    return (
        <>

            <div id="fnav">
                <div className="col-md-6"></div>
                    <div >
                        <ul className="nof">
                            {!isAuthenticated() &&(
                                    <Fragment>
                                        <li>
                                            <Link to="/login"><button id="si">Sign in</button></Link>
                                        </li>
                                    </Fragment>
                                )} 
                                {isAuthenticated()&&(
                            <Fragment>
                            <div className="dropdown">
                                    <a className="d-flex" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" 
                                    style={{textDecoration:'none',fontSize:'20px',color:'white'}}>
                                    <span style={{paddingTop:'10px'}}> {isAuthenticated().user.name}<i class="fas fa-sort-down"></i></span>   
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" id="vl">

                                        <div style={{textAlign:'center',borderBottom:'1px solid pink'}}>
                                            <a  href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" 
                                            style={{textDecoration:'none',fontSize:'20px',color:'black',display:'flex'
                                            }}>
                                            <p style={{paddingLeft:'10px',paddingTop:'10px',paddingRight:'30px'}}><i class="fas fa-user"></i></p>
                                            <p style={{paddingTop:'10px'}}>{isAuthenticated().user.name}</p>
                                            </a>
                                        </div>
                                        {isAuthenticated() && isAuthenticated().user.role===1 && (
                                            <li>
                                                <Link to='/admin/dashboard' className="oh">My Profile</Link>
                                            </li>
                                            )}   
                                              <li onClick={()=>signout(()=>{
                                                    history.push('/')
                                                })}>
                                                
                                                <Link to='/' className="oh" >Log Out</Link>
                                            
                                              </li>
                                        </ul>
                                </div>
                            </Fragment>
                            )}
                            <li id="select">
                                <select id="select">
                                    <option value="">English</option>
                                    <option value="">Nepali</option> 
                                </select>
                            </li>
                            <li id="vc">Volunteer</li>
                            <li id="vc">Contact us</li>
                        </ul>
                    </div>
            </div>
        </>
    )
}

export default withRouter(Navone)
