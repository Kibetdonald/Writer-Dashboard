import { React, Component } from "react";

export default class Home extends Component {


    render() {
        return (

            <div className="page-wrapper">

                <div className="content container-fluid">


                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="page-title">Welcome Writer!</h3>
                                <ul className="breadcrumb"><i className="fa fa-tachometer" />

                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-3 col-sm-6 col-12">


                        <div className="orderDiv">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon text-warning">
                                        <i className="fa fa-book"></i>
                                    </span>
                                    <div className="dash-count">
                                        <h3>168</h3>
                                    </div>
                                </div>
                                <div className="dash-widget-info">
                                    <h6 className="text-muted">Wallet</h6>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-warning w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="stockDiv">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon text-warning">
                                        <i className="fa fa-credit-card"></i>
                                    </span>
                                    <div className="dash-count">
                                        <h3>1</h3>
                                    </div>
                                </div>
                                <div className="dash-widget-info">

                                    <h6 className="text-muted">Active Orders</h6>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-warning w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="transactionDiv">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon text-warning">
                                        <i className="fa fa-barcode"></i>
                                    </span>
                                    <div className="dash-count">
                                        <h3>45</h3>
                                    </div>
                                </div>
                                <div className="dash-widget-info">

                                    <h6 className="text-muted">Complete Orders</h6>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-warning w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="salesDiv">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon text-warning">
                                        <i className="fa fa-folder"></i>
                                    </span>
                                    <div className="dash-count">
                                        <h3>0</h3>
                                    </div>
                                </div>
                                <div className="dash-widget-info">

                                    <h6 className="text-muted">Revisions</h6>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-warning w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="row">
                    <div className="col-md-6 d-flex">


                        <div className="card card-table flex-fill">
                            <div className="card-header">
                                <h4 className="card-title">Pending Order Timer</h4>
                            </div>
                            <div className="card-body">
                               
                            </div>
                        </div>


                    </div>
                    <div className="col-md-6 d-flex">


                        <div className="card  card-table flex-fill">
                            <div className="card-header">
                                <h4 className="card-title">Wallet</h4>
                            </div>
                            <div className="card-body">
                            <div id="curve_chart" style={{width: "600px", height: "500px"}}></div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>


        );
    }
}