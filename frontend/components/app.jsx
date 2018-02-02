import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import NavbarContainer from './navbar/navbar_container';

const App = () => {
  console.log('App file');
  return (
    <div>
      <Route path="/" component={NavbarContainer} />
      <Switch>
        <AuthRoute exact path="/login" component={SessionFormContainer} />
        <AuthRoute exact path="/signup" component={SessionFormContainer} />
        <Redirect to="/" />
      </Switch>

    </div>
  );
};
export default App;


// <Switch>
//   <Route exact path="/" component={PostIndexContainer}/>
//   <Route exact path="/posts/:postId" component={PostShowContainer}/>
//   <Route path="/posts/:postId/edit" component={PostFormContainer}/>
// </Switch>
