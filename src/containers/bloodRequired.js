import {connect} from 'react-redux';
import BloodRequired from './../components/BloodRequired/bloodRequired';
import BloodRequest from './../store/actions/bloodRequest';
import LogoutRequest  from './../store/actions/signout'


function mapStateToProps(state){
    console.log("state",state);
    return {
        app: state.app
    };
}

function mapDispatchToProps(dispatch){
    return {
        logoutRequest : () => dispatch(LogoutRequest()),
        bloodRequest : (userData)=> dispatch(BloodRequest(userData))
    };
}

 const BloodRequiredContainer = connect(mapStateToProps, mapDispatchToProps)(BloodRequired);
 export default BloodRequiredContainer;
 