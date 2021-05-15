import React,{useState,useEffect} from 'react'
import axios from 'axios'
function PostsAPI() {
    const [posts,setPosts]=useState([])


    const getPosts = async ()=>{
        const res = await axios.get(`/api/showposts`)
        setPosts(res.data)
    }
    useEffect(()=>{
        getPosts()
    },[])
    return{
        posts: [posts,setPosts],
        
    }
}

export default PostsAPI
