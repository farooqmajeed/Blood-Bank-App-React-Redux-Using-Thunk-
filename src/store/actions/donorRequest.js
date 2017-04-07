import ActionTypes from './actions'
import {browserHistory} from 'react-router'
import * as fbConfig from './../../databaseConfig/config';

 function DonorRequest(DonorData) {
    return dispatch => {
     dispatch(donorRequest());
     return fbConfig.database.ref('/donors').push(DonorData).then((data)=> {
         alert("Add Donor Successfully");
         dispatch(donorRequestsuccess(data));
        browserHistory.push('/bloodRequired')
     })  
    .catch((error)=>{
           console.log("Error Occured", error);
            dispatch(donorRequestFail(error))
     })
    
    
}
}

function donorRequest(){
    return{
        type: ActionTypes.DonorRequest
    };
}
function donorRequestsuccess(data){
    return{
        type: ActionTypes.DonorRequestSuccess,
        data
    };
}
function donorRequestFail(){
    return{
        type: ActionTypes.DonorRequestFail
    };
}

export default DonorRequest;