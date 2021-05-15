import React,{useContext} from 'react'
import { GlobalState } from '../../GlobalState'
import 'bootstrap/dist/css/bootstrap.min.css';
import './lstyle.css'
import { Link } from 'react-router-dom';
import GoogleMap from './GoogleMap';
import Footer from './Footer';
import Copyright from './Copyright';
import Header from '../header/Header';

function Emore() {
    const state = useContext(GlobalState)
    const [posts]=state.postsAPI.posts
    return (
        <div>
            <Header/>
            <div className="wh">
                <h1 id="le">All Events</h1>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                          {
                        posts.map(post=>(
                            <Link to={`/postdetails/${post._id}`} id="links">
                                <div className="card cards">
                                    <img src={'/'+post.image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                    <h5 className="card-title titles" style={{textAlign:'center'}}>{post.title}</h5>
                                    <div id="df">
                                        <p>By:Smart Innovation</p>
                                        <p>{post.date}</p>
                                    </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    } 
                </div>
            </div>
            <GoogleMap/>
            <Footer/>
            <Copyright/>
        </div>
    )
}

export default Emore
