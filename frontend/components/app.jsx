import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  Refresh
} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import NavbarContainer from './navbar/navbar_container';
import FourContainer from './four/four_container';
import EventIndexContainer from './events/event_index_container';


const App = (store) => {
  console.log('App file');
  console.log("APP store", store);
  return (
    <div>
      <Route path="/" component={NavbarContainer} />
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path='/user' component={EventIndexContainer} />
        <Route exact path="/home" render={() => 'home'} />
        <Route path="/" render={(props) => {
              props.history.push('/home');
              return (<p>placeholer</p>);
            }
          }
        />
      </Switch>
    </div>
  );
};
export default App;
// <Route exact path="/404" component={FourContainer} />
// <Route render={() => <Redirect to="/404" />} />


// <Switch>
//   <Route exact path="/" component={PostIndexContainer}/>
//   <Route exact path="/posts/:postId" component={PostShowContainer}/>
//   <Route path="/posts/:postId/edit" component={PostFormContainer}/>
// </Switch>
