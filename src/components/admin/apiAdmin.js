import { API } from "../../Config";

export const createEvents = (userId,token,post)=>{
    return fetch(`api/postPosts/${userId}`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            Authorization:`Bearer ${token}`
        },

        body:post
    })
        .then(response=>{
            return response.json();
        })
        .catch(error=>{
            console.log(error);
        })
   
}

//show events

export const getEvents=()=>{
    return fetch(`api/showposts`,{
        method:'GET'
    })
    .then(response=>{
     return response.json() ;
  })
  .catch(error=>
      console.log(error));
    
}
export const getEventss=(postId)=>{
    return fetch(`api/showposts/${postId}`,{
        method:'GET'
    })
    .then(response=>{
     return response.json() ;
  })
  .catch(error=>
      console.log(error));
    
}

//update events

export const updateEvent = (postId, userId, token, post) => {
    return fetch(`api/updatepost/${postId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: post
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//delete events

export const deleteEvent = (postId, userId, token) => {
    return fetch(`${API}/deletepost/${postId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};