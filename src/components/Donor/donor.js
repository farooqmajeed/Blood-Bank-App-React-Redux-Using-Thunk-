import React, { Component } from 'react';
import * as Mui from 'material-ui';
import styles from './donorStyle';
import {
  Link,

} from 'react-router';

class RegisterDonor extends Component {
  bloodgroups;
  constructor(props) {
    super(props);
    this.bloodgroups = [
      "A+",
      "B+",
      "AB+",
      "O+",
      "A-",
      "B-",
      "AB-",
      "O-"
    ]
    this.state = { email: '', password: '', name: '', address: '', bloodType: "A+", isDonor: true };
    this.handleSubmit = this.handleDonorSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChangeInDate = this.handleChangeInDate.bind(this);
  }


  handleBloodTypeChange = (event, index, value) => this.setState({ bloodType: value });
  handleGenderTypeChange = (event, index, value) => this.setState({ gender: value });

  handleDonorSubmit(evt) {
    evt.preventDefault();
    var name = this.refs.name.getValue();
    var nDate = this.state.nDate;
    var address = this.refs.address.getValue();
    var bloodType = this.state.bloodType;
    var gender = this.state.gender;
    var contactNo = this.refs.contactNo.getValue();
    var isDonor = this.state.isDonor;

    var uObject = {
      name: name,
      nDate: nDate,
      address: address,
      bloodType: bloodType,
      contactNo: contactNo,
      gender: gender,
      isDonor: isDonor
    };
    // console.log("Complete object " , uObject)
    this.props.donorRequest(uObject);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleChangeInDate(e, newDate) {
    this.setState({ nDate: newDate });
  }

  logoutRequest = () => {
    this.props.logoutRequest();
  }


  render() {

    return (

      <div>
        <Mui.AppBar title="Blood Bank Management App" showMenuIconButton={false} >

          <Link to="/bloodRequired" ><Mui.FlatButton type="submit" label="Available Blood" backgroundColor="transparent" style={styles.logButton} /> </Link>

          <Link to="/" ><Mui.FlatButton type="submit" label="Logout" backgroundColor="transparent" style={styles.logButton} onClick={this.logoutRequest} /> </Link>

        </Mui.AppBar>
        <br />

        <div style={styles.donorStyle}>
          <Mui.AppBar
            title="Donor Registration"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
          />

          <Mui.Paper style={styles.paper}>

            <Mui.Divider />
            <form onSubmit={this.handleSubmit} >

                    <Mui.TextField
                      hintText="Your Name"
                      floatingLabelText="Name"
                      ref="name"
                      name="name"
                      required={true}
                      type="text"
                      onChange={this.handleInputChange}
                    /><br />

                    <Mui.TextField
                      hintText="Address"
                      ref="address"
                      name="address"
                      required={true}
                      type="text"
                      onChange={this.handleInputChange}
                    /><br />

                    <Mui.TextField
                      ref="contactNo"
                      name="contactNo"
                      hintText="Contact No."
                      floatingLabelText="Contact No."
                      onChange={this.handleInputChange}
                      fullWidth={true}
                    />

                    <Mui.SelectField
                      ref="bloodType"
                      name="bloodType"
                      floatingLabelText="Blood Type"
                      onChange={this.handleBloodTypeChange}
                      value={this.state.bloodType}
                      required={true}
                    >
                        {
                          this.bloodgroups.map(bloodgroup => {
                            return <Mui.MenuItem key={bloodgroup} value={bloodgroup} primaryText={bloodgroup} />
                          })
                        }
                    </Mui.SelectField>

                    <Mui.SelectField
                      ref="gender"
                      name="gender"
                      floatingLabelText="Gender"
                      onChange={this.handleGenderTypeChange}
                      value={this.state.gender}
                      required={true}
                    >
                      <Mui.MenuItem value={1} primaryText="Male" />
                      <Mui.MenuItem value={2} primaryText="Female" />
                    </Mui.SelectField>

                    <Mui.DatePicker
                      ref="nDate"
                      hintText="Date "
                      floatingLabelText="Date"
                      value={this.state.nDate}
                      onChange={this.handleChangeInDate}
                      fullWidth={true}
                    />


              <div style={styles.buttons}>
                    <Link to="/">
                      <Mui.RaisedButton label="Cancel" />
                    </Link>

                    <Mui.RaisedButton type="submit" label="Save" style={styles.saveButton} primary={true} />

              </div>
            </form>

            <div style={styles.clear} />
          </Mui.Paper>
        </div>
      </div>
    );
  }
}

export default RegisterDonor;