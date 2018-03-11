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
import EventFormContainer from './events/event_form_container';
import EventShowContainer from './events/event_show_container';
import UserShowContainer from './users/user_show_container';
import RsvpContainer from './rsvp/rsvp_container';

const App = (store) => {
  // console.log('App file');
  return (
    <div>
      <Route path="/" component={NavbarContainer} />
      <Switch>
        <Route exact path="/" component={EventIndexContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path='/users/:userId' component={UserShowContainer} />
        <ProtectedRoute path='/users/:userId/bookmarks' component={UserShowContainer} />
        <ProtectedRoute path='/users/:userId/tickets' component={UserShowContainer} />
        <ProtectedRoute path='/users/:userId/events' component={UserShowContainer} />
        <ProtectedRoute path='/user' component={EventIndexContainer} />
        <ProtectedRoute path='/events/new' component={EventFormContainer} />
        <Route path='/events/:eventId'
          component={EventShowContainer} />
        <Route path="/index" render={() => 'home'} />
        <Route path="/" render={(props) => {
          props.history.push('/index');
          return (<p>placeholder</p>);
            }
          }
        />
      </Switch>
      <ProtectedRoute path='/events/:eventId/rsvp'
      component={RsvpContainer} />
    </div>
  );
};
export default App;

// <Route exact path="/404" component={FourContainer} />
// <Route render={() => <Redirect to="/404" />} />


//
// <Route path="/home" render={() => 'home'} />
// <Route path="/" render={(props) => {
//   props.history.push('/home');
//   return (<p>placeholer</p>);
// }
// }
// />
