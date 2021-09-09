import { React, Component } from "react";

//to help us connect the client side with the server side
import axios from 'axios';

export default class Addproduct extends Component {
    constructor(props) {
        super(props)
        
        //Binding the methods to the class
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Setting the state to an empty string
        this.state = {
            fullname: '',
            specialities: '',
            emailaddress: '',
            password: '',
            profile_picture: '',
            phone_number: '',
            bank_details: '',
            categorys: []
        }
    }

//Creating the methods that will handle onChange 
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
      /*Lets pull the categories from the database using axios
   componentDidMount(){
       axios.get('http://localhost:3000/addcategory/')
       .then(response =>{
           if(response.data.length >0){
               this.setState({
                   categories: response.data.map(category => category.specialities),
                   specialities: response.data(0).specialities
               })
           }
       })
   }

*/
   //But we've done it manualy
   //instead it could be from an API or from a online database such as mongodb
    componentDidMount() {
        this.setState({
            categorys: ['Accounting', 'Information Technology ', 'Psychology', 'Nursing', 'Healthcare', 'Management'],
            specialities: 'Oracle'
        });
    }

    //Handling onsubmit
    onSubmit(e) {
        e.preventDefault();
        const prod = {
            fullname: this.state.fullname,
            specialities: this.state.specialities,
            emailaddress: this.state.emailaddress,
            password: this.state.password,
            profile_picture: this.state.profile_picture,
            phone_number: this.state.phone_number,
            bank_details: this.state.bank_details
        }
     
        //Logging the variable prod in the console just for test purposes
        console.log(prod);


        // axios.post('http://localhost:3000/products/add', prod)
        //     .then(res => console.log(res.data));

        this.setState({
            fullname: '',
            specialities: '',
            emailaddress: '',
            password: '',
            profile_picture: '',
            phone_number: '',
            bank_details: '',
        });
    }
    render() {
        return (
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Profile</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Name</label>
                                            <div className="col-md-10">
                                                <input type="text"
                                                    name="fullname"
                                                    onChange={this.onChange}
                                                    value={this.state.fullname}
                                                    className="form-control" />

                                            </div>
                                        </div>
                                     
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Email Address</label>
                                            <div className="col-md-10">
                                                <input type="text"
                                                    value={this.state.emailaddress}
                                                    onChange={this.onChange}
                                                    name="emailaddress" className="form-control"
                                                    placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Password</label>
                                            <div className="col-md-10">
                                                <input type="password"
                                                    value={this.state.password}
                                                    name="password"
                                                    onChange={this.onChange}
                                                    className="form-control" 
                                                    placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Choose profile picture</label>
                                            <div className="col-md-10">
                                                <input className="form-control"
                                                    value={this.state.profile_picture}
                                                    onChange={this.onChange}
                                                    name="profile_picture" type="file" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Phone Number</label>
                                            <div className="col-md-10">
                                                <input type="phone"
                                                    name="phone_number"
                                                    value={this.state.phone_number}
                                                    onChange={this.onChange}
                                                    className="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Select areas of speciality</label>
                                            <div className="col-md-10">
                                                <select name="specialities"
                                                    value={this.state.specialities}
                                                    onChange={this.onChange}
                                                    className="form-control">
                                                    {
                                                        this.state.categorys.map(function (category) {
                                                            return <option
                                                                key={category}
                                                                value={category}>{category}
                                                            </option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Bank Account</label>
                                            <div className="col-md-10">
                                                <input type="text"
                                                    name="bank_details"
                                                    value={this.state.bank_details}
                                                    onChange={this.onChange}
                                                    className="form-control" placeholder="Bank Account" />
                                            </div>
                                        </div>
                                        <center>
                                            <div className="form_row">
                                                &nbsp;<input type="submit" value="Update Profile" />&nbsp;<br />

                                            </div>
                                        </center>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}