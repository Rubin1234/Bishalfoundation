import React from 'react'
import { Link } from 'react-router-dom'
import Navone from '../../header/Navone'
import { isAuthenticated } from '../auth/index'





function Admindashboard() {
    const {user:{name,email,role}}=isAuthenticated()
    return (
        <div>
            <Navone/>
            <h4 id="back"><Link to="/" className="bc"><i class="fas fa-arrow-circle-left"></i> Back</Link></h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <h4 className="card-header">Admin Links</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link className="nav-link" to="/createevent">create Event</Link> 
                                </li>
                                <li className="list-group-item">
                                    <Link className="nav-link" to="/adminaction">Delete and Update Event</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-5">
                            <h3 className="card-header">User Information</h3>
                            <ul className="list-group">
                                <li className="list-group-item">{name}</li>
                                <li className="list-group-item">{email}</li>
                                <li className="list-group-item">{role===1?'Admin':'Registered User'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admindashboard
