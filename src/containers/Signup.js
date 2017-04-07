import {connect} from 'react-redux';
import SignUpComponent from './../components/signup/signup';
import {SignUpRequest} from './../store/actions/signup';


function mapStateToProps(state){
    return{
      
        auth : state.auth
    };
}

 function mapDispatchToProps(dispatch){
     return{
       signUpRequest : (userData) => dispatch(SignUpRequest(userData))  
     };
 }
 

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
export default SignUpContainer;
