import React, { Component } from 'react';
import * as Mui from 'material-ui';
import styles from './signupstyle';


class SignUpComponent extends Component {
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
        this.state = { email: '', password: '', };
        this.handleSubmit = this.handleSignupSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSignupSubmit(evt) {
        evt.preventDefault();
        var email = this.refs.email.getValue();
        var password = this.refs.password.getValue();
        var age = this.refs.age.getValue();
         var uObject = {
            email: email,
             password: password,
              age: age
        
               
        };
        this.props.signUpRequest(uObject);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
                [name]: value
        });
    }

    render() {
        
        return (
            <div style={styles.SignupStyle}>
                <Mui.Card>
                    <Mui.CardTitle title="Sign Up" />
                    <Mui.CardText>
                        <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                            <h3>Account Info</h3>
                            <Mui.Divider />
                            <Mui.TextField
                                hintText="email@email.com"
                                floatingLabelText="Email"
                                ref="email"
                                name="email"
                                required={true}
                                type="email"
                                onChange={this.handleInputChange}
                                /><br />
                            <Mui.TextField
                                hintText="password"
                                ref="password"
                                name="password"
                                required={true}
                                type="password"
                                onChange={this.handleInputChange}
                                floatingLabelText="Password" />
                            <br />
                            
                                <Mui.TextField
                                hintText="YourAge"
                                floatingLabelText="Age"
                                ref="age"
                                name="age"
                                required={true}
                                type="number"
                                onChange={this.handleInputChange}
                                /><br />
                         
                            <Mui.RaisedButton type="submit" label="Submit" primary={true} />  
                        </form>
                    </Mui.CardText>
                </Mui.Card>
            </div>
        );
    }
}

export default SignUpComponent;