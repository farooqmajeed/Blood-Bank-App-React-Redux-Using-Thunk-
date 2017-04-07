import ActionTypes from './../actions/actions';

const int_state = { 
    donordetail : []
};
function appReducer (state = int_state, action) {
    switch (action.type){
      
         case ActionTypes.DonorRequestSuccess: {
            var newState  = Object.assign({}, state,{donor: action.data})
            state = newState;
            return state;
        }
       
       case ActionTypes.BloodRequestSuccess:{
           return  Object.assign({}, state, {donordetail: action.data})
          
       }
         
      
        default:
      return state;
    }
    
}  

export default appReducer;
