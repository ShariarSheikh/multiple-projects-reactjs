import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} token={token} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
