import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  }

  formValid() {
    console.log("placeholder");
  }

  handleSubmit(e) {
    e.preventDefault();

    if ((this.state.formErrors)) {
      console.log(`
      --SUBMITTING--
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className=""
                placeholder="First Name"
                noValidate
                onChange={this.handleChange} />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className=""
                placeholder="Last Name"
                noValidate
                onChange={this.handleChange} />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className=""
                placeholder="email"
                noValidate
                onChange={this.handleChange} />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className=""
                placeholder="password"
                noValidate
                onChange={this.handleChange} />
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <div>Already have an Account?</div>
            </div>
          </form>
        </div>

      </div>
    );
  }
}


export default ValidatedInput;
