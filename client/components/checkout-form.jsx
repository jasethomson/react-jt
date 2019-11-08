import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      firstName: null,
      lastName: null,
      creditCard: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      formErrors: {
        firstName: '',
        lastName: '',
        creditCard: '',
        address: '',
        city: '',
        state: '',
        zip: ''
      },
      earlySubmit: ''
    }
  }

  formValid(submission) {
    let errorsCopy = submission.formErrors;
    let firstNameCopy = submission.firstName;
    let lastNameCopy = submission.lastName;
    let creditCardCopy = submission.creditCard;
    let addressCopy = submission.address;
    let cityCopy = submission.city;
    let stateCopy = submission.state;
    let zipCopy = submission.zip;
    let valid = true;

    Object.values(errorsCopy).forEach(val => {
      val.length > 0 && (valid = false)
    });

    if (!firstNameCopy) {
      valid = false;
    } else if (!lastNameCopy) {
      valid = false;
    } else if (!creditCardCopy) {
      valid = false;
    } else if (!addressCopy) {
      valid = false;
    } else if (!cityCopy) {
      valid = false;
    } else if (!stateCopy) {
      valid = false;
    } else if (!zipCopy) {
      valid = false;
    }

    return valid;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.formValid(this.state)) {

    } else {
      this.setState({ earlySubmit: "Please correctly fill out all fields before submitting." })
    }
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    const ccRegex = RegExp(
    /^\d{4}([ \-]?)((\d{6}\1?\d{5})|(\d{4}\1?\d{4}\1?\d{4}))$/
    );

    const numRegex = RegExp(
      /^\d+$/
    );

    const letterRegex = RegExp(
      /^[a-zA-Z\s]*$/
    );

    const zipRegex = RegExp(
      /^[0-9]{5}(?:-[0-9]{4})?$/
    );

    switch (name) {
      case 'firstName':
        formErrors.firstName =
          letterRegex.test(value)
          ? ''
          : 'must input valid name, letters only';
        break;
      case 'lastName':
        formErrors.lastName =
          letterRegex.test(value)
          ? ''
          : 'must input valid name, letters only';
        break;
      case 'creditCard':
        formErrors.creditCard =
          ccRegex.test(value)
          ? ''
          : 'invalid credit card number';
        break;
      case 'address':
        formErrors.address =
          value.length < 6
          ? 'mininum 6 characters required'
          : '';
        break;
      case 'city':
        formErrors.city =
          letterRegex.test(value)
          ? ''
          : 'must input valid city, letters only';
        break;
      case 'state':
        formErrors.state =
          letterRegex.test(value)
          ? ''
          : 'must input valid state, letters only';
        break;
      case 'zip':
        formErrors.zip =
          zipRegex.test(value)
          ? ''
          : 'must input valid zip code, numbers only';
        break;
    }
    this.setState({ formErrors, [name]: value })
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        <div>
          <h1>Checkout</h1>
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
            <div className="form-group creditCard col-3">
              <label htmlFor="lastName">Credit Card</label>
              <input
                type="text"
                className={formErrors.lastName.length > 0 ? "error form-control" : "form-control"}
                placeholder="xxxx-xxxx-xxxx-xxxx"
                name="creditCard"
                noValidate
                onChange={this.handleChange} />
              {formErrors.creditCard.length > 0 && (
                <span className="text-danger">{formErrors.creditCard}</span>
              )}
            </div>
            <div className="form-group address col-3">
              <label htmlFor="address">Address</label>
              <input
                type="address"
                className={formErrors.address.length > 0 ? "error form-control" : "form-control"}
                placeholder="Address"
                name="address"
                noValidate
                onChange={this.handleChange} />
              {formErrors.address.length > 0 && (
                <span className="text-danger">{formErrors.address}</span>
              )}
            </div>
            <div className="form-group city col-3">
              <label htmlFor="city">City</label>
              <input
                type="city"
                className={formErrors.city.length > 0 ? "error form-control" : "form-control"}
                placeholder="City"
                name="city"
                noValidate
                onChange={this.handleChange} />
              {formErrors.city.length > 0 && (
                <span className="text-danger">{formErrors.city}</span>
              )}
            </div>
            <div className="form-group state col-3">
              <label htmlFor="state">State</label>
              <input
                type="state"
                className={formErrors.state.length > 0 ? "error form-control" : "form-control"}
                placeholder="State"
                name="state"
                noValidate
                onChange={this.handleChange} />
              {formErrors.state.length > 0 && (
                <span className="text-danger">{formErrors.state}</span>
              )}
            </div>
            <div className="form-group zip col-3">
              <label htmlFor="zip">Zip Code</label>
              <input
                type="zip"
                className={formErrors.zip.length > 0 ? "error form-control" : "form-control"}
                placeholder="Zip Code"
                name="zip"
                noValidate
                onChange={this.handleChange} />
              {formErrors.zip.length > 0 && (
                <span className="text-danger">{formErrors.zip}</span>
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


export default CheckoutForm;
