import { API } from "../../../Config";


export const signup = (user) =>{
    return fetch(`api/register`,{
        method:"post",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    });
    
};

export const signin = (user) =>{
    return fetch(`api/login`,{
        method:"post",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    });
    
};



export const authenticate = (data,next)=>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next();
    }
}

// logout

export const signout = (next)=>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt',JSON.stringify('jwt'));
        next();
        return fetch(`${API}/signout`,{
            method:'GET',
        })
        .then(response=>{
            console.log('signout',response)
        })
        .catch(err=>console.log(err))
    }
}

//replace sign in and signup

export const isAuthenticated=()=>{
    if(typeof window=='undefined'){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }

else{
    return false;
}
}