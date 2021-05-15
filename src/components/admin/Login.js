import React,{useState} from 'react'
import Navone from '../header/Navone';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import { authenticate,signin,isAuthenticated} from './auth';
import {Link, Redirect} from 'react-router-dom'

function Login() {
    const {user} = isAuthenticated();

    const[values,setValues]=useState({
        email:'', password:'',error:'',loading:false,redirectToReferrer:false,
       });
       const{email,password,loading,error,redirectToReferrer}=values;
      
       const handleChange=name=>event=>{
         setValues({...values,error:false,[name]:event.target.value});
       }
     
       const clickSubmit=(event)=>{
           event.preventDefault();
           setValues({...values,error:false,loading:true});
           signin({email,password})
           .then(data=>{
               if(data.error){
                   setValues({...values,error:data.error,loading:false})
               }
               else{
                   authenticate(data,()=>{
                    setValues({
                        ...values,
                       redirectToReferrer:true
                     
                   })
                      
                   });
               }
           });
       };
   
       const showError=()=>(
        <div className="alert alert-danger mb-3" style={{display:error?'':'none'}}>
            {error}
        </div>
    );
    
    const redirectUser = ()=>{
        if(redirectToReferrer){
            return <Redirect to="/" />
        }
    }
    return (
        <>
       <Navone/>
       <h4 id="back"><Link to="/" className="bc"><i class="fas fa-arrow-circle-left"></i> Back</Link></h4>
        <div className="pt-5">
            <div className="container col-md-5 si">
                <h3 id="in">Login</h3>
                <form>
                {showError()}
                {redirectUser()}
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email"
                        value={email} onChange={handleChange('email')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" 
                         value={password} onChange={handleChange('password')} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="cent">
                        <button id="sin"  onClick={clickSubmit}>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login
