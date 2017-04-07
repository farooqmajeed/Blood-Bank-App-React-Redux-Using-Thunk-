import ActionTypes from './actions';
import {browserHistory } from 'react-router';
import * as fbConfig from './../../databaseConfig/config';

 function LoginRequest(loginData) {
  return dispatch =>{
        dispatch(loginRequest());
     fbConfig.fbAuth.signInWithEmailAndPassword(
         loginData.email, loginData.password
     )
     .then((data)=>{
         return fbConfig.database.ref('/users/').on('value', snapshot => {
     var allInfo = snapshot.val()
      dispatch(loginRequestSuccess(allInfo))
      alert("Successfull Login");
      browserHistory.push('/donarRegistration')
      
         })
     }) 
          .catch((error)=>{
           console.log("Error Occured", error);
            dispatch(loginRequestFail(error))
     })
    }
}
   function loginRequest(){ 
       return{
           type : ActionTypes.LoginRequest
       };
   }

   function loginRequestSuccess(data){
       return{
           type : ActionTypes.LoginRequestSuccess,
           data
       };
   }
   
   function loginRequestFail(){
       return{
           type : ActionTypes.LoginRequestFail
       };
   }

   export default LoginRequest;