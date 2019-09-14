import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupUser } from '../../../store/actions/authActions'

import './Signup.scss'

const Mylist = ({users}) => {
  console.log('usersooo', users)
return ( <li>{users.map(user => { return user})}</li>)
}

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log('this state', this.state)
    this.props.onSignupUser(this.state)
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  render() {
    return (
      <section className="container">

       <div className="row mt-10">
        <div className="col">
          <Link to="/" ><img src="../public/assets/images/logo.svg" alt="QuickCredit Logo" className="mt-10__logo mb-5" /></Link>
          <img src="../public/assets/images/heroIllustration.svg" alt="QuickCredit Hero Illustration" className="hero-background" />
          <div>
            QuickCredit is the fastest short term loan app on the web.
            We help you meet your business, or personal goal easily by providing the required funds.
            It is absolutely easy!
          </div>
        </div>
        <div className="col mt-7">
        <h1>We want to know you</h1>
        <form 
          className="needs-validation"
          onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="First name"
                onChange={ this.handleChange} 
                required
              />
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Last name" onChange={ this.handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="email">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Email" onChange={ this.handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" onChange={ this.handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12 mb-3">
            <label htmlFor="address">Address</label>
            <textarea className="form-control" id="address" placeholder="Address" onChange={ this.handleChange} required></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" required />
              <label className="form-check-label">
              By checking this box, you are agreeing to our terms and conditions.
              </label>
            </div>
          </div>
          <button className="btn btn-primary signup-button" type="submit">Continue</button>
        </form>
        </div>
       </div>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignupUser: (user) => dispatch(signupUser(user))
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.auth.users
//   }
// }

export default connect(null, mapDispatchToProps)(Signup)
