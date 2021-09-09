import { React, Component } from "react";
import Table from 'react-bootstrap/Table'
export default class Orders extends Component {
    //constructor(){
    // super()

    // }
    render() {
        return (
            <div className="page-wrapper">

                <div className="content container-fluid">



                    <div className="row">
                        <div className="col-sm-12">
                        <input type="text" className="search-input" placeholder="Search here" />
                                        <button className="search-btn">Search</button>
                                        <br/>  <br/>
                            <h3 className="page-title">Orders</h3>

                        </div>
                    </div>



                    <div className="row">
                        <div className="col-xl-12 col-sm-3 col-12">
                            <div className="card">
                                <div className="card-body">

                                    <Table striped bordered hover>
                                       
                                        <thead>
                                            <tr>
                                                
                                                <th>Order</th>
                                                <th>Title</th>
                                                <th>Deadline</th>
                                                <th>Level</th>
                                                <th>Status</th>
                                                <th>More</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Case Study 1</td>
                                                <td>Short Responses</td>
                                                <td>September 5th 2021, 8:04 pm</td>
                                                <td>University</td>
                                                <td>Completed</td>
                                                <td>More</td>
                                            </tr>
                                            <tr>
                                            <td>Legal and ethical scenarios</td>
                                                <td>Writers choice</td>
                                                <td>August 30th 2021, 10:07 am</td>
                                                <td>University</td>
                                                <td>Completed</td>
                                                <td>More</td>
                                            </tr>
                                            
                                            
                                        </tbody>
                                    </Table>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>



        );

    }
}