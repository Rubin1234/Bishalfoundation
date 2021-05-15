import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './pitem.css'
import { Link } from 'react-router-dom';

function PostItem({post}) {
    return (
        <Link to={`/postdetails/${post._id}`} id="links">
            <div className="card cards" >
                <img src={'/'+post.image} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title titles">{post.title}</h5>
                <div id="df">
                    <p>By:Smart Innovation</p>
                    <p>{post.date}</p>
                </div>
                </div>
            </div>
        </Link>   
    )
}

export default PostItem
