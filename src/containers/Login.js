import { connect } from 'react-redux';
import LoginComponent from './../components/login/login';
import LoginRequest from './../store/actions/Login'

function mapStateToProps(state){
    return{
         auth : state.auth
   
    };
}

function mapDispatchToProps(dispatch){
   return{
      loginRequest : (userData) => dispatch(LoginRequest(userData))
   };
    
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export default LoginContainer;