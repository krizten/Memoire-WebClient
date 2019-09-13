import React, { FunctionComponent } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from '../store';

export interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
  component: any;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={routeProps =>
        isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: routeProps.location } }} />
        )
      }
    />
  );
};

const mapStateToProps = ({ auth: { isAuthenticated } }: AppState) => ({
  isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
