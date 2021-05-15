import { post } from 'jquery'
import React,{useContext,useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import './detail.css'

function Eventdetail() {
    
    const params = useParams()
    const state = useContext(GlobalState)
    const [posts] = state.postsAPI.posts 
    const [postDetail,setPostDetail] = useState([])

    
    useEffect(()=>{
        if(params.id){
            posts.forEach(post=>{
                if(post._id === params.id) setPostDetail(post)
            })
        }
    },[params.id,posts])
    
    if(postDetail.length===0)return null;
      
    return (
        <>
        <div className="detail container pb-5">
           <div className="container mt-4  pt-2">
                <div className="row mt-4 ims">
                       
                    <div id="tvd" className="pt-5 pb-4">
                            <div className="col-md-4">
                                <span className="tit"> {postDetail.title}</span><br/>
                                <span id="span">{postDetail.venue}</span>
                            </div>
                            <div className="col-md-5"></div>
                            <p id="date"><span>Date:</span> {postDetail.date}</p>
                    </div>
                    <img src={"/"+postDetail.image} alt="" />
                </div>
            </div>
            <div className="pd ">
                <h3 id="le" className="ae">About Events</h3>
                <p className="desc">{postDetail.discription}</p>
            </div>
        </div>
        </>
    )
}

export default Eventdetail
