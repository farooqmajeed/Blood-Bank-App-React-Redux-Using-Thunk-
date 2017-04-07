import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux';
import store from './store'
import SignUpContainer from './containers/Signup';
import LoginContainer from './containers/Login.js';
import BloodRequiredContainer from  './containers/bloodRequired';
import RegisterDonorContainer from './containers/donor'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
<MuiThemeProvider>  
          <Provider store={store}>
              
 <Router history={browserHistory}>
     <Route path="/" component={LoginContainer} />
     <Route path="/signup" component={SignUpContainer} />
     <Route path="/bloodRequired" component={BloodRequiredContainer} />
     <Route path="/donarRegistration" component={RegisterDonorContainer} />
</Router>

          </Provider>
        </MuiThemeProvider>
),
    document.getElementById('root')
);
