import ActionTypes from './actions';
import * as fbConfig from '../../databaseConfig/config';

function LogoutRequest(loginData) {
    return dispatch => {
        dispatch(logoutRequest());
        return fbConfig.fbAuth.signOut()
            .then((data) => {
                dispatch(logoutRequestSuccess());
            })
            .catch((error) => {
                dispatch(logoutRequestFail());
            });
    }
}

function logoutRequest() {
    return {
        type: ActionTypes.LogoutRequest
    };
}

function logoutRequestSuccess() {
    return {
        type: ActionTypes.LogoutRequestSuccess
    };
}

function logoutRequestFail() {
    return {
        type: ActionTypes.LogoutRequestFail
    };
}
export default LogoutRequest;