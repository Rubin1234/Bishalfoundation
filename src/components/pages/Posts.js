import React,{useContext,useState} from 'react'
import { GlobalState } from '../../GlobalState'
import PostItem from './postItem/PostItem'
import './lstyle.css'
import { Link } from 'react-router-dom'

function Posts() {
    const state = useContext(GlobalState)
    const [posts]=state.postsAPI.posts
    const [visible, setVisible] = useState(3)


    return (
        <>
        <div className="wh pt-5">
            <div style={{textAlign:'center'}}>   
                <h1 id="le">Latest Events</h1>
                <div  style={{display:'flex',flexWrap:'wrap'}} className="pt-3">
                {
                    posts.slice(0,visible).map(post=>{
                        return <PostItem key={post._id} post={post}/>
            

                    })
                }  
            </div>
        </div>
        <div className="btn">
           <Link to="/moreevents">  <button id="btn">View All</button></Link>
        </div>
        </div>
        </>
    )
}

export default Posts
