import React, { useEffect, useState } from 'react'
  ;
import { Modal, Button, Textarea, Row, Table, Col } from "react-bootstrap";
import Input from './UI/Input';

import './style.css'
// import productReducer from '../reducers/product.reducer';
const NewOrders = (props) => {


  return (
    <div className="page-wrapper">

      <div className="content container-fluid">



        <div className="row">
          <div className="col-sm-12">
            <input type="text" className="search-input" placeholder="Search here" />
            <button className="search-btn">Search</button>
            <br />  <br />
            <h3 className="page-title">New Orders</h3>

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
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default NewOrders