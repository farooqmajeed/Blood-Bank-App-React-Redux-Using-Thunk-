import {connect} from 'react-redux';
import RegisterDonor from './../components/Donor/donor';
import DonorRequest from './../store/actions/donorRequest';
import LogoutRequest  from './../store/actions/signout'
 function mapStateToProps(state){
     return{
         app: state.app
     };
 }

  function mapDispatchToProps(dispatch){
      return{
          logoutRequest : () => dispatch(LogoutRequest()),
          donorRequest : (userData) => dispatch(DonorRequest(userData))
      };
  }
   
   const RegisterDonorContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterDonor);
   export default RegisterDonorContainer;