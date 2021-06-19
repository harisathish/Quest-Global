import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { Form } from 'react-bootstrap';
import swal from 'sweetalert'

export default class Edit extends Component {
    constructor(props) {
        super(props)

        this.initialstate = {
            firstName: '', firstNameError: '',
            lastName: '', lastNameError: '',
            email: '', emailError: '',
            password: '', passwordError: '',
            confirm_password: '', confirm_passwordError: '',
            gender: '', genderError: '',
            phone: '', phoneError: '',
            dob: '', dobError: '',
            year: '',
            section: '',
            profile: '', redirectToReferrer: false


        }
        this.state = this.initialstate;
        this.baseState = this.initialstate

    }

    componentDidMount() {
        this.nameInput.focus();
    }

    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }


    handleClear = (e) => {
        e.preventDefault();
        this.setState(this.baseState)
    }

    SubmitHandler = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            swal({
                title: "Done!",
                text: "Successfully Inserted",
                icon: "success",
                timer: 2000,
                button: false
            })
            window.location.href = 'http://localhost:3000/payment';
            this.setState(this.initialstate)
            console.log(this.initialstate)
        }
    }

    validate = () => {
        let firstNameError = ''; let lastNameError = ''; let emailError = ''; let passwordError = '';
        let confirm_passwordError = ''; let genderError = ''; let phoneError = '';
        let dobError = ''; let formIsValid = true;

        if (!this.state.firstName) {
            formIsValid = false;
            firstNameError = "First Name can't be blank";
        }

        if (this.state.firstName) {

            var regName = /^[a-zA-Z]+$/;
            if (!regName.test(this.state.firstName)) {
                formIsValid = false;

                firstNameError = "Enter valid First Name"

            }


        }

        if (!this.state.lastName) {
            formIsValid = false;
            lastNameError = "Last Name can't be blank";
        }

        if (this.state.lastName) {

            if (!regName.test(this.state.firstName)) {

                formIsValid = false;
                lastNameError = "Enter valid Last Name"

            }


        }

        if (!this.state.phone) {
            formIsValid = false;
            phoneError = "Phone number can't be blank";

        }

        if (this.state.phone) {

            if (this.state.phone.length < 10 || this.state.phone.length > 10) {

                formIsValid = false;

                phoneError = "Phone number must be exactly 10 digits"
            }
            else {
                phoneError = null;
            }
        }

        if (!this.state.email) {
            formIsValid = false;
            emailError = "Email Id can't be blank";

        }

        if (this.state.email) {

            var EmailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!EmailReg.test(this.state.email)) {
                formIsValid = false;

                emailError = "Enter valid Email Address"

            }

        }

        if (!this.state.password) {
            formIsValid = false;
            passwordError = "Password can't be blank";

        }
        if (this.state.password) {
            if (this.state.password.length < 8) {
                formIsValid = false;
                passwordError = "Password should be minumum 8 character long"
            }

        }
        if (this.state.password) {
            if (!this.state.confirm_password) {
                formIsValid = false;
                confirm_passwordError = "Confirm Password can't be blank";

            }
        }

        if (this.state.confirm_password) {
            if (this.state.password !== this.state.confirm_password) {
                formIsValid = false;
                confirm_passwordError = "Confirm password must match with password "
            }
        }

        var ddlFruits = document.getElementById("gender");
        if (ddlFruits.value === "") {
            formIsValid = false;
            genderError = "Please Select a Gender"
        }

        if (!this.state.dob) {

            formIsValid = false;
            dobError = "Please select a Date Of Birth "
        }

        if (firstNameError) {

            this.setState({ firstNameError })

        }
        if (!firstNameError) {

            this.setState({ firstNameError })

        }

        if (lastNameError) {

            this.setState({ lastNameError })

        }
        if (!lastNameError) {

            this.setState({ lastNameError })

        }
        if (phoneError) {


            this.setState({ phoneError })

        }
        if (!phoneError) {


            this.setState({ phoneError })
        }

        if (!emailError) {

            this.setState({ emailError })

        }
        if (emailError) {

            this.setState({ emailError })

        }

        if (!passwordError) {

            this.setState({ passwordError })

        }
        if (passwordError) {

            this.setState({ passwordError })

        }

        if (!confirm_passwordError) {

            this.setState({ confirm_passwordError })

        }
        if (confirm_passwordError) {

            this.setState({ confirm_passwordError })

        }

        if (dobError) {
            this.setState({ dobError })
        }
        if (!dobError) {
            this.setState({ dobError })
        }
        if (genderError) {
            this.setState({ genderError })
        }
        if (!genderError) {
            this.setState({ genderError })
        }
        return formIsValid;
    }

    render() {
        const { firstName, firstNameError, lastName, lastNameError, phone, phoneError, email, emailError, password, passwordError, confirm_password, confirm_passwordError,
            gender, genderError, dob, dobError } = this.state;


        return (
            <div className="container justify-content-center">
                <div className="card-header" style={{ backgroundColor: "#DDDDE7", marginTop: "20px", borderRadius: "25px" }}>
                    <form onSubmit={this.SubmitHandler} autoComplete="off">
                        <div className="row justify-content-center">
                            <h3 className="mb-4">PROFILE DETAILS</h3>
                        </div>
                        <div className="form-group row center">
                            <div className="col-md-5 ml-3 mt-2">
                                <label htmlFor="ex1" style={{ float: "left" }}><b> FIRST NAME</b> <i className="fa fa-user"></i> <b><span style={{ color: "#D54442" }} className="required" >*</span></b></label>
                                <input autoComplete="none" ref={(input) => { this.nameInput = input; }} className="form-control" value={firstName} name="firstName" type="text" placeholder="First Name" onChange={this.changeHandler} />
                                <span style={{ color: "#D54442", float: "left" }}>{firstNameError}</span>
                            </div>
                            <div className="col-md-5 ml-3 mt-2">
                                <label htmlFor="ex1" style={{ float: "left" }}><b> LAST NAME</b> <i className="fa fa-user"></i> <b><span style={{ color: "#D54442" }} className="required" >*</span></b></label>
                                <input autoComplete="none" className="form-control" value={lastName} name="lastName" type="text" placeholder="Last Name" onChange={this.changeHandler} />
                                <span style={{ color: "#D54442", float: "left" }}>{lastNameError}</span>
                            </div>
                        </div>
                        <div className="form-group row center">
                            <div className="col-md-5 ml-3 mt-2">
                                <label htmlFor="ex2" style={{ float: "left" }}><b>PHONE NUMBER</b> <i className="fa fa-phone"></i> <b><span style={{ color: "#D54442" }} className="required" >*</span></b></label>
                                <input autoComplete="none" ref={(input) => { this.phoneInput = input; }} className="form-control" value={phone} name="phone" type="number" placeholder="Phone Number" onChange={this.changeHandler} />
                                <span style={{ color: "#D54442", float: "left" }}>{phoneError}</span>
                            </div>
                            <div className="col-md-5 ml-3 mt-2">
                                <label htmlFor="ex1" style={{ float: "left" }}><b> EMIAL ID</b> <i className="fa fa-envelope"></i> <b><span style={{ color: "#D54442" }} className="required" >*</span></b></label>
                                <input autoComplete="none" className="form-control" value={email} name="email" type="text" placeholder="Email Id" onChange={this.changeHandler} />
                                <span style={{ color: "#D54442", float: "left" }}>{emailError}</span>
                            </div>
                        </div>
                    
                        <div className="form-group row center">
                            <div className="col-md-5 ml-3 mt-2">
                                <label htmlFor="ex3" style={{ float: "left" }}><b>GENDER</b> <i className="fa fa-id-card"></i></label>
                                <select id="gender" className="form-control" name="gender" value={gender} onChange={this.changeHandler}>
                                    <option value="">
                                        SELECT GENDER
                                    </option>
                                    <option value="MALE">MALE</option>
                                    <option value="FEMALE">FEMALE</option>
                                    <option value="OTHERS">OTHERS</option>
                                </select>
                                <span style={{ color: "#D54442", float: "left" }}>{genderError}</span>
                            </div>
                            <div className="col-md-5 ml-3 mt-2">
                                <Form.Group controlId="dob">
                                    <label htmlFor="ex3" style={{ float: "left" }}><b>DATE OF BIRTH</b> <i className="fa fa-id-card"></i></label>
                                    <Form.Control type="date" name="dob" value={dob} onChange={this.changeHandler} />
                                </Form.Group>
                                <span style={{ color: "#D54442", float: "left" }}>{dobError}</span>
                            </div>
                        </div>
                        <div className="btn-toolbar" style={{ marginLeft: "20px" }}>
                            <button type="button" style={{ borderRadius: "10px" }} onClick={this.handleClear} className="btn btn-secondary btn mr-5"><b>RESET</b> <i className="fa fa-undo"></i></button>
                            <button type="submit" style={{ borderRadius: "10px" }} className="btn btn-primary"><b>SUBMIT</b> <i className="fa fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
