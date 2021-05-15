import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getEvents, getEventss, updateEvent } from '../apiAdmin';
import { isAuthenticated } from '../auth';


const UpdateEvent = ({ match }) => {
    const [values, setValues] = useState({
        title: '',
        discription: '',
        date: '',
        venue: '',
        image: '',
        loading: false,
        error: false,
        success: false,
        redirectToProfile: false,
        formData: ''
    });

    const { user, token } = isAuthenticated();
    const {
        title,
        discription,
        date,
        venue,
        image,
        loading,
        error,
        success,
        redirectToProfile,
        formData
    } = values;

    const init = postId => {
        getEventss(postId).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                // populate the state
                setValues({
                    ...values,
                   title: data.title,
                    discription: data.discription,
                    date: data.date,
                    venue: data.venue,
                    formData: new FormData()
                });
            }
        });
    };


    useEffect(() => {
        init(match.params.postId);
    }, []);

    const handleChange = name => event => {
        const value = name === 'image' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]:event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

        updateEvent (match.params.postId, user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    title: '',
                    discription: '',
                    date: '',
                    venue: '',
                    loading: false,
                    error: false,
                    redirectToProfile: true,
                    success: true

                });
            }
        });
    };



    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            <h2>product is updated!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/admin/dashboard" />;
            }
        }
    };

    return (
        <>
          

            <div className="banner-top">
                <div className="container">
                    <h3 >Update Product</h3>
                    <h4><Link to="/">Home</Link><label>/</label>Update Product</h4>
                    <div className="clearfix"> </div>
                </div>
            </div>

            <div className="login">

                <div className="main-agileits">
                    <div className="form-w3agile">
                        <h3>Update Product</h3>
                        {showError()}
                        {showLoading()}
                        {showSuccess()}


                        <form>
                            <div className="key">

                                <input type="text"  className="form-control" required=""  onChange={handleChange('title')} value={title} />
                                <div className="clearfix"></div>
                            </div>

                            <div className="key">

                                <input type="text" name="date" required="" className="form-control"  onChange={handleChange('date')} value={date} />
                                <div className="clearfix"></div>
                            </div>

                            <div className="key">

                                <input type="text" name="venue" required="" className="form-control" onChange={handleChange('venue')} value={venue} />
                                <div className="clearfix"></div>
                            </div>

                            <div className="key">

                                <textarea className="form-control" name="description" required="" placeholder="description" style={{ border: 'none' }} onChange={handleChange('discription')} value={discription}></textarea>

                                <div className="clearfix"></div>
                            </div>


                            <div className="key">

                                <input type="file" name="image" className="form-control" onChange={handleChange('image')} accept="image/*" />

                                <div className="clearfix"></div>
                            </div>
                            <button className="btn btn-success" onClick={clickSubmit}>Update</button>
                        </form>
                    </div>

                </div>
            </div>


            {redirectUser()}

        </>
    );
};

export default UpdateEvent;