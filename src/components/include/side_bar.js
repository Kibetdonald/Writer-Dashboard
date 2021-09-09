import { React} from "react";
import { Link } from "react-router-dom";


function Sidebar(){
    
    return(
                   <div className="sidebar" id="sidebar">
                        <div className="sidebar-inner slimscroll">
                            <div id="sidebar-menu" className="sidebar-menu">
                                <ul>
                                    <li className="menu-title"> 
                                        <span>Main</span>
                                    </li>

                                    <li>
                                        <Link to="/" className="fa fa-home"><span>Dashboard</span></Link>
                                    </li> 
                                        
                                    <li> 
                                        <Link to="/orders" i className="fa fa-eye"><span>My Orders</span></Link>
                                      
                                    </li>
                                    <li> 
                                        <Link to="/neworders" i className="fa fa-edit"><span>New Orders</span></Link>
                                    </li>
                                    <li> 
                                        <Link to="/announcement" i className="fa fa-plus"><span>Announcement</span></Link>
                                    </li>
                                    <li> 
                                        <Link to="/profile" i className="fa fa-plus"><span>Profile</span></Link>
                                    </li>
                                    <li> 
                                        <Link to="/logout" i className="fa fa-plus"><span>Log Out</span></Link>
                                    </li>
							
                                    </ul>
                                    </div>
                                    </div>	
                                </div>
    );}
export default Sidebar;
   



