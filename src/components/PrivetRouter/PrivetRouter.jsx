import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivetRouter = ({ children, ...rest }) => {
  // const {children, ...rest} = props
  const { user, loading } = useAuth();
  if (loading) return "loading";
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "./login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivetRouter;
