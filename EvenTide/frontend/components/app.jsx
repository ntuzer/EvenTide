import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <h1>Hellooo gorgeous!</h1>
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;


// <Switch>
//   <Route exact path="/" component={PostIndexContainer}/>
//   <Route exact path="/posts/:postId" component={PostShowContainer}/>
//   <Route path="/posts/:postId/edit" component={PostFormContainer}/>
// </Switch>
