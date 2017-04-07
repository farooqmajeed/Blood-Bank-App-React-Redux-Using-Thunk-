import ActionTypes from './actions';
import * as fbConfig from './../../databaseConfig/config';


function BloodRequest(BloodData) {
       return dispatch => {
              dispatch(bloodRequest());
        fbConfig.database.ref('/donors/').orderByChild("bloodType").equalTo(BloodData).once("value", (snap) => {
          return fbConfig.database.ref('/donors').orderByChild('isDonor').equalTo(true).once('value', snap => {
            console.log("snap", snap.val());
            const data = [];
            snap.forEach(childSnapshot => {
                data.push(childSnapshot.val());
                console.log("childSnapshot.val()",childSnapshot.val())
            })

            console.log(" YOU can Get Blood ",data )
            dispatch(bloodRequestSuccess(data))
             
        }); });

   
    }
}
//    dispatch(bloodRequest());
//         return fbConfig.database.ref('/donors/' + BloodData.uid + '/isDonor').set(false, (data) => {
//             return fbConfig.database.ref('/donors').orderByChild('isDonor').equalTo(true).once('value', snap => {
//                 const todo = [];
//                 snap.forEach(childSnapshot => {
//                     todo.push(childSnapshot.val());
//                 })

//     dispatch(bloodRequestSuccess(todo))
//             });
//         });
//     }
// }



function bloodRequest() {
    return {
        type: ActionTypes.BloodRequest
    };
}

function bloodRequestSuccess(data) {
    return {
        type: ActionTypes.BloodRequestSuccess,
        data
    };
}
// function bloodRequestFail() {
//     return {
//         type: ActionTypes.BloodRequestFail
//     };
// }
export default BloodRequest;