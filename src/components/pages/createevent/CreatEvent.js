import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cevent.css'
import { createEvents } from '../../admin/apiAdmin';
import { isAuthenticated } from '../../admin/auth';
import Navone from '../../header/Navone';


const CreatEvent=()=> {
    const{user,token}=isAuthenticated();
    const [values,setValues]=useState({
        title:'',
        discription:'',
        date:'',
        venue:'',
        image:'',
        loading:false,
        success:false,
        error:'',
        redirectToProfile:false,
        formData:''
    })
    const {
        title,
        date,
        venue,
        discription,
        loading,
        success,
        error,
        redirectToProfile,
        formData

    } =values;

    const init=()=>{
       
                setValues({...values,formData:new FormData});//new form data defined
            
    }
    
    useEffect(()=>{
        init();
      },[])
    
    const handleChange=name=>event=>{
        const value= name==='image' ? event.target.files[0] : event.target.value
        formData.set(name,value)
        setValues({...values,[name]:value})
    }
    const clickSubmit=(event)=>{
        event.preventDefault()
        setValues({...values,error:'',loading:true});
        createEvents(user._id,token,formData)
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error})
            }else{
                setValues({
                   ...values,title:'',image:'',date:'',discription:'',venue:'',
                   loading:false,success:true 
                });
            }

        });
    };
const newPostForm=()=>(
		<div className="modal-dialog mt-5">	
        <div className="modal-content">
            <div className="modal-body modal-body-sub_agile">
                <div className="modal_body_left modal_body_left1">
        <h3 className="agileinfo_sign" id="ap">Add Event</h3>
        {showError()}
        {showSuccess()}
        <form>
            <div className="mb-3">
                <label  className="form-label" id="label">Event Title</label>
                <input type="text" className="form-control" name="title" required="required" onChange={handleChange('title')} value={title}/>
            </div>
            <div className="mb-3">
                <label  className="form-label" id="label">Date</label>
                <input  className="form-control" type="text"  name="date" required="required" onChange={handleChange('date')} value={date} />
            </div>
            <div className="mb-3">
                <label  className="form-label" id="label">Venue</label>
                <input  className="form-control"  name="venue" required="required" onChange={handleChange('venue')} value={venue}/>
            </div>
            <div className="mb-3">
                <label  className="form-label" id="label"> Description</label>
                <div><textarea name="discription" required="required" id=""
                 cols="60" rows="5" onChange={handleChange('discription')} value={discription}> </textarea></div>
            </div>
            <div className="styled-input">
                <input type="file" className="form-control" placeholder="choose Image" name="product_image"  onChange={handleChange('image')} type="file" name="product_image" accept="image/*" required="required" />
            </div>
            <div id="btns">
                <button onClick={clickSubmit} className="btnss">
                    Add Event
                </button>
            </div>
        </form>
    </div>
    </div>    
            </div>
        </div>
     );
     const adminLinks=()=>{
         return(
     <div className="card">
         <h4 className="card-header">Admin Links</h4>
        <ul className="list-group">
       <li className="list-group-item">
           <Link className="nav-link" to="/createevent">Create Event</Link>
       </li>
        </ul>
     </div>
 );
         } 
 const showError=()=>(
 <div className="alert alert-danger" style={{display: error ? '':'none'}}>
  {error}
 </div>
 
 );
 const showSuccess=()=>(
     <div className="alert alert-info" style={{display:success ? '':'none'}}>
      <h2>Event is added!</h2>
     </div>
     
     );
 const showLoading=()=>(
         loading && (
         <div className="alert alert-success" >
          <h2>Loading....</h2>
         </div>
         )
         
         );
    return (
        <>
        <Navone/>
        <h4 id="back"><Link to="/" className="bc"><i class="fas fa-arrow-circle-left"></i> Back</Link></h4>
       <div  className="container">
        <div className="row">
        <div className="col-md-4">
            {adminLinks()}
        </div> 
        <div className="col-md-6">      
            {showLoading()}
            {newPostForm()}
         </div>
         </div>
         </div>  
        </>
    )
}

export default CreatEvent