import React from 'react'
import AddCategory from '../../components/addcategory.component'
import Profile from '../../components/profile.component'
import Home from '../../components/home.component'
import Orders from '../../components/orders.component'
import NewOrders from '../../components/neworders.component'
import { BrowserRouter as Router, Route} from "react-router-dom";
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Sidebar from '../../components/include/side_bar'
import Header from '../../components/include/header'
import {Provider} from 'react-redux';
// import PrivateRoute from './components/HOC/PrivateRoute';
import store from '../../store';
import Annoucements from '../../components/announcements'
import { Profiler } from 'react'


function HomeContainer(){

window.store = store;
  return(
    <Provider store={store}>
    <Router>
    
    <Header/>
    
    <Sidebar/>
  
   
   <div className="Container">
       <Route path="/" exact component={Home} />
       <Route path="/orders" component={Orders} />
       <Route path="/neworders" component={NewOrders}/>
       <Route path="/Annoucements" component={Annoucements} />
       <Route path="/profile" component={Profile} />
       <Route path="/addcategory" component={AddCategory} />
   </div>

   
  </Router>
  </Provider>
   )
  }


export default HomeContainer