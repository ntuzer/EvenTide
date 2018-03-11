import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';



const Auth = ({ component: Component, path, loggedIn }) => {
  // console.log('AUTH');
  // console.log("route util auth");
  return (
    <Route path={path} render={(props) => {
      if (!loggedIn) {
        return (<Component {...props} />);
      } else {
        return (<Redirect to="/user" />);
      }
    }} />
  );
};

const Protected = ({ component: Component, path, loggedIn }) => {
  // console.log('PROTECTED');
  // console.log("route util protected");
  return (<Route path={path} render={(props) => (
       loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )} />
  );
};

const mapStateToProps = (state, ownProps) => {

  return (
    {loggedIn: Boolean(state.session.currentUser)}
  );
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);


//
// const Auth = ({ component: Component, path, loggedIn }) => {
//
//   console.log("route util auth");
//   return (
//     <Route path={path} render={(props) => (
//       !loggedIn ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/feed" />
//       )
//     )} />
//   );
// };
