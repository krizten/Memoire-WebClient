import React, { FunctionComponent } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
  component: any;
}

export const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      // tslint:disable-next-line: jsx-no-lambda
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
