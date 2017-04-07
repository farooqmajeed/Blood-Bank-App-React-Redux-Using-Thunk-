import ActionTypes from './actions';
// import {browserHistory, Link} from 'react-router'
import * as fbConfig from './../../databaseConfig/config';
import {browserHistory} from 'react-router';

export function SignUpRequest(SignUpData) {
    return dispatch =>{
        dispatch(signUpRequest());
        fbConfig.fbAuth.createUserWithEmailAndPassword(
            SignUpData.email, SignUpData.password
        )   
            .then((data) =>{
                const userRef = fbConfig.database.ref('/users/' );
                userRef.set({
                    uid : data.uid,
                    email: data.email,

                }, signUpSuccessData => {
                    dispatch(signUpRequestSuccess({ uid: data.uid, userEmail: data.email  }));
                });
                alert("SucessFully SignUp")
                 browserHistory.push('/donarRegistration')
      
            })
            .catch((error) =>{
                console.log("Error Occurred Please try again.",error    );
                dispatch(signUpRequestFail (error));
            });
    }   
}

function signUpRequest() {
    return {
        type: ActionTypes.SignUpRequest
    };
}

function signUpRequestSuccess(data) {
    return {
        type: ActionTypes.SignUpRequestSuccess,
        data
    };
}

function signUpRequestFail() {
    return {
        type: ActionTypes.SignUpRequestFail
    };
}