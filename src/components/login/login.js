import React, { Component } from 'react';
import * as Mui from 'material-ui';
import styles from './loginStyle';
import { Link } from 'react-router';

 
class LoginComponent extends Component{
    constructor(props){
        
        super(props);

         this.state = {email:'', password:''};
         this.handleInputChange = this.handleInputChange.bind(this);
         this.handleSubmit = this.handleLoginSubmit.bind(this);
    }
 

handleLoginSubmit(ev){
    ev.preventDefault();
    var email = this.refs.email.getValue();
     var password = this.refs.password.getValue();
     var userObj = {
         email: email, 
     password: password 
    };
    // console.log("email $ password" , userObj)
         this.props.loginRequest(userObj);
 
}
    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


   render() {
      
        return (
            <div style={styles.LoginStyle}>
                <Mui.Card>
                    <Mui.CardTitle title="Login" />
                    <Mui.CardText>
                        {/*<p>Don`t Have account? <Link to="/signup">SignUp</Link></p>*/}
                        <form onSubmit={this.handleSubmit}>
                            <Mui.TextField
                                hintText="name@mail.com"
                                floatingLabelText="Email"
                                ref="email"
                                name="email"
                                required={true}
                                type="email"
                            
                                onChange={this.handleInputChange}
                                /><br />
                            <Mui.TextField
                                hintText=" Password"
                                ref="password"
                                name="password"
                                required={true}
                                type="password"
                                onChange={this.handleInputChange}
                                floatingLabelText="Password" />
                            <br />
                            <Mui.RaisedButton type="submit" label="Submit"  style={styles.Button}  />  { } 
                            <Link to="/signup"> <Mui.RaisedButton type="submit" label="Register"  primary={true} /> </Link>
                        </form>
                    </Mui.CardText>
                </Mui.Card>
            </div>
        );
    }

}
export default LoginComponent;