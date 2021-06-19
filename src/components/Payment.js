import React, { Component } from 'react'
import swal from 'sweetalert'


export default class Payment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '', nameError: '',
            card: '', cardError: '',
            date: '', dateError: '',
            cvv: '', cvvError: '',
        }
    }


    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
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
            window.location.href = 'http://localhost:3000/edit';
            this.setState(this.initialstate)
        }
    }

    validate = () => {
        let nameError = ''; let cardError = ''; let dateError = ''; let cvvError = '';
        let formIsValid = true;

        if (!this.state.name) {
            formIsValid = false;
            nameError = "Name can't be blank";
        }

        if (this.state.name) {

            var regName = /^[a-zA-Z]+$/;
            if (!regName.test(this.state.name)) {
                formIsValid = false;

                nameError = "Enter valid First Name"

            }
        }

        if (!this.state.card) {
            formIsValid = false;
            cardError = "Card number can't be blank";

        }

        if (this.state.card) {
            if (this.state.card.length !== 16) {
                cardError = "Card number should be 16 digits long"
            }
        }

        if (!this.state.date) {
            formIsValid = false;
            dateError = "Expiry date can't be blank";

        }

        if (!this.state.cvv) {
            formIsValid = false;
            cvvError = "Cvv can't be blank";

        }

        if (this.state.cvv) {
            if (this.state.cvv.length !== 3) {
                cvvError = "Cvv should be 3 digits"
            }
        }

        if (nameError) {

            this.setState({ nameError })

        }
        if (!nameError) {

            this.setState({ nameError })

        }

        if (cardError) {

            this.setState({ cardError })

        }
        if (!cardError) {

            this.setState({ cardError })

        }
        if (dateError) {

            this.setState({ dateError })

        }
        if (!dateError) {

            this.setState({ dateError })

        }
        if (cvvError) {

            this.setState({ cvvError })

        }
        if (!cvvError) {

            this.setState({ cvvError })

        }



    }

    render() {
        const { name, card, date, cvv, nameError, cardError, dateError, cvvError } = this.state;
        return (
            <div>
                <form  onSubmit={this.onSubmit}>
                <div className="container-fluid px-1 px-md-2 px-lg-4 py-5 mx-auto">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-7 col-lg-8 col-md-9 col-sm-11">
                            <div className="card border-0">
                                <div className="row justify-content-center">
                                    <h3 className="mb-4">Payment Page</h3>
                                </div>
                                <div className="row">
                                    <div className="col-sm-7 border-line pb-3">
                                        <div className="form-group">
                                            <p className="text-muted text-sm mb-0">Name on the card</p> <input value={name} type="text" name="name" placeholder="Name" size="15" onChange={this.changeHandler} />
                                            <br />
                                            <span style={{ color: "#D54442", float: "left" }}>{nameError}</span>
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <p className="text-muted text-sm mb-0">Card Number</p>
                                            <div className="row px-3"> <input value={card} type="number" name="card" placeholder="0000 0000 0000 0000" onChange={this.changeHandler} />
                                                <p className="mb-0 ml-3">/</p> <img className="image ml-1" src="https://i.imgur.com/WIAP9Ku.jpg" alt="payemnt card.." />
                                                <span style={{ color: "#D54442", float: "left" }}>{cardError}</span>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <p className="text-muted text-sm mb-0">Expiry date</p> <input value={date} type="text" name="date" placeholder="MM/YY" size="6" id="exp" minLength="5" maxLength="5" onChange={this.changeHandler} /><br />
                                            <span style={{ color: "#D54442", float: "left" }}>{dateError}</span>
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <p className="text-muted text-sm mb-0">CVV/CVC</p> <input value={cvv} type="password" name="cvv" placeholder="000" size="1" minLength="3" maxLength="3" onChange={this.changeHandler} /><br />
                                            <span style={{ color: "#D54442", float: "left" }}>{cvvError}</span>
                                        </div>
                                        {/* <div className="form-group mb-0">
                                            <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" checked /> <label for="chk1" className="custom-control-label text-muted text-sm">save my card for future payment</label> </div>
                                        </div> */}
                                    </div>
                                    <div className="col-sm-5 text-sm-center justify-content-center pt-4 pb-4"> <small className="text-sm text-muted">Order number</small>
                                        <h5 className="mb-5">12345678</h5> <small className="text-sm text-muted">Payment amount</small>
                                        <div className="row px-3 justify-content-sm-center">
                                            <h2 className=""><span className="text-md font-weight-bold mr-2">$</span><span className="text-danger">59.49</span></h2>
                                        </div> <button type="submit" className="btn btn-red text-center mt-4">PAY</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                        </form>
            </div>
        )
    }
}
