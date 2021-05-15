import React,{useContext,useState,useEffect} from 'react'
import { GlobalState } from '../../../GlobalState'
import Navone from '../../header/Navone'
import {Link} from 'react-router-dom';
import './action.css'
import { deleteEvent, getEvents } from '../apiAdmin';
import axios from 'axios';
import { isAuthenticated } from '../auth';
 
function AdminAction() {
   
    const[postsByArrival,setPostsByArrival]=useState([])
    const [error,setError] = useState(false)

    const loadPostsByArrival=()=>{
        getEvents('createdAt').then(data=>{
            if(data.error){
                setError(data.error)
            }else{
                setPostsByArrival(data)
            }
        })
    }
    useEffect(()=>{
       loadPostsByArrival()
       
      },[])


        const [postss, setPosts] = useState([]);
    
        const { user, token } = isAuthenticated();
    
        const loadPosts = () => {
            getEvents().then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setPosts(data);
                }
            });
        };
    
        const destroy = postId => {
            deleteEvent(postId, user._id, token).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    loadPosts();
                }
            });
        };
    
        useEffect(() => {
            loadPosts();
        }, []);
    
    return (
        <>
        <Navone/>
        <h4 id="back"><Link to="/" className="bc"><i class="fas fa-arrow-circle-left"></i> Back</Link></h4>
        <div className="pl-5 pr-5 pt-3 wth">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col" id="tit">Title</th>
                            <th scope="col" id="date">Date</th>
                            <th scope="col" id="venu">Venue</th>
                            <th scope="col" id="dpn">Discription</th>
                            <th scope="col"id="action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                        {
                        postsByArrival.map(post=>(
                            <tr>
                                <td> <img src={'/'+post.image} className="card-img-top" alt="..." height="100px" width="100px"/></td>
                                <td>{post.title}</td>
                                <td>{post.date}</td>
                                <td>{post.venue}</td>
                                <td ><div id="st">
                                {post.discription}</div></td>
                                <td id="bdf">
                                        
                                        <div className="upd">
                                            <button type="button" onClick={() => destroy(post._id)}>Delete</button>
                                        </div>
                                   
                                </td>
                                </tr>
                            ))
                        } 
                      
                    </tbody>
                </table>
        </div>
        </>
    )
}

export default AdminAction
