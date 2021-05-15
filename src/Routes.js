import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import App from './Home'
import AdminAction from './components/admin/adminAction/AdminAction'
import UpdateEvent from './components/admin/adminAction/UpdateEvent'
import AdminRoute from './components/admin/adminroute/Adminroute'
import Admindashboard from './components/admin/dashboard/Admindashboard'
import Login from './components/admin/Login'
import CreatEvent from './components/pages/createevent/CreatEvent'
import Emore from './components/pages/Emore'
import Eventdetail from './components/pages/eventdetail/Eventdetail'


function Routes() {
    return (
        <div>
             <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/moreevents" component={Emore}/>
                <Route exact path='/postdetails/:id' component={Eventdetail} />
                <AdminRoute exact path='/admin/dashboard' component={Admindashboard} />
                <AdminRoute exact path='/createevent' component={CreatEvent} />
                <AdminRoute exact path='/adminaction' component={AdminAction} />
                {/* <AdminRoute exact path='/updateevent/:id' component={UpdateEvent} /> */}
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default Routes