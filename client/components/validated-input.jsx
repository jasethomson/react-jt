import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

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
      },
      earlySubmit: ''
    }
  }

  formValid(submission) {
    let errorsCopy = submission.formErrors;
    let firstNameCopy = submission.firstName;
    let lastNameCopy = submission.lastName;
    let emailCopy = submission.email;
    let passwordCopy = submission.password;
    let valid = true;

    Object.values(errorsCopy).forEach( val => {
      val.length > 0 && (valid = false)
    });

    if (!firstNameCopy){
      valid = false;
    } else if (!lastNameCopy){
      valid = false;
    } else if (!emailCopy) {
      valid = false;
    } else if (!passwordCopy) {
      valid = false;
    }

    console.log("valid:", valid);
    return valid;
  }

  handleSubmit(e) {
    console.log(e);
    e.preventDefault();

    if (this.formValid(this.state)) {
      console.log(`
      --SUBMITTING--
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Password: ${this.state.password}
      `);
    } else {
      this.setState({ earlySubmit: "Please correctly fill out all fields before submitting."})
    }
  }

  handleChange(e){
    e.preventDefault();
    const { name, value} = e.target;
    let formErrors = this.state.formErrors;

    const emailRegex = RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    switch(name){
      case 'firstName':
        formErrors.firstName =
        value.length < 2
        ? 'mininum 2 characters required'
        : '';
        break;
      case 'lastName':
        formErrors.lastName =
        value.length < 2
          ? 'mininum 2 characters required'
          : '';
        break;
      case 'email':
        formErrors.email =
        emailRegex.test(value)
          ? ''
          : 'invlaid email address';
        break;
      case 'password':
        formErrors.password =
        value.length < 6
          ? 'mininum 6 characters required'
          : '';
        break;
    }
    this.setState({formErrors, [name]: value}, () => console.log("state:",this.state))
  }

  render() {
    const {formErrors}=this.state;

    return (
      <div>
        <div>
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group firstName col-3">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className={formErrors.firstName.length > 0 ? "error form-control" : "form-control"}
                placeholder="First Name"
                name="firstName"
                noValidate
                onChange={this.handleChange} />
                {formErrors.firstName.length > 0 && (
                <span className="text-danger">{formErrors.firstName}</span>
                )}
            </div>
            <div className="form-group lastName col-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className={formErrors.lastName.length > 0 ? "error form-control" : "form-control"}
                placeholder="Last Name"
                name="lastName"
                noValidate
                onChange={this.handleChange} />
                {formErrors.lastName.length > 0 && (
                  <span className="text-danger">{formErrors.lastName}</span>
                )}
            </div>
            <div className="form-group email col-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={formErrors.email.length > 0 ? "error form-control" : "form-control"}
                placeholder="Email"
                name="email"
                noValidate
                onChange={this.handleChange} />
                {formErrors.email.length > 0 && (
                  <span className="text-danger">{formErrors.email}</span>
                )}
            </div>
            <div className="form-group password col-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={formErrors.password.length > 0 ? "error form-control" : "form-control"}
                placeholder="Password"
                name="password"
                noValidate
                onChange={this.handleChange} />
                {formErrors.password.length > 0 && (
                  <span className="text-danger">{formErrors.password}</span>
                )}
            </div>
            <div className="createAccount">
              <button type="submit" className="btn btn-primary">Create Account</button>
              <div className="text-danger">{this.state.earlySubmit}</div>
              <div>Already have an Account?</div>
            </div>
          </form>
        </div>

      </div>
    );
  }
}


export default ValidatedInput;
