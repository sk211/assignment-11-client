import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login-form">
      <div className="col-lg-4 offset-4 my-5" id="loginFrom">
        <h2 className="text-center ">Login </h2>

        <div className="d-grid gap-2 mt-3 py-3 ">
          <Button
            variant="danger"
            onClick={handleGoogleLogin}
            size="md"
            className="mb-4 mt-2 "
          >
            <i class="fab fa-google pl-2 mr-2"></i>
            <span> Google Login</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
