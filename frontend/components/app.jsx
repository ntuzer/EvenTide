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

const App = () => {
  console.log('App file');
  return (
    <div>
      <Route path="/" component={NavbarContainer} />
      {console.log(1)}
      <Switch>
        {console.log(2)}
        <AuthRoute path="/login" component={SessionFormContainer} />
        {console.log(3)}
        <AuthRoute path="/signup" component={SessionFormContainer} />
        {console.log(4)}

        <Route exact path="/home" render={() => 'home'} />
        <Route path="/" render={(props) => {
          props.history.push('/home');
          return (<p>placeholer</p>);
        }
      } />
        {console.log(5)}
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
