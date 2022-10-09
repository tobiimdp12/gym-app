import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import loading from "../../assets/loading.gif";

const formData = {
  email: "",
  password: "",
};

const formValidations = {
  email: [
    [(value) => value.includes("@"), "The email must have an @"],
    [
      (value) =>
        value.match(
          // eslint-disable-next-line
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        ),
      "The email must have a valid format",
    ],
  ],
  password: [
    [
      (value) => value.length >= 6,
      "The password must have at least 6 characters",
    ],
  ],
};

function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    email,
    password,
    onInputChange,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(formData, formValidations);

  const { status } = useSelector((state) => state.auth);

  const [formSended, setformSended] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("logged")) {
      navigate("/home", {
        replace: true,
      });
    }
  }, []);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: emailValid || passwordValid,
        color: "#fff",
        background: "#000",

        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
    dispatch(startLoginWithEmailPassword({ email, password }));
    setformSended(true);
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");

    dispatch(startGoogleSignIn());

    navigate("/routines", {
      replace: true,
    });
  };
  if (status === "authenticated") {
    navigate("/home", {
      replace: true,
    });
  }
  return (
    <>
      {status === "checking" && isFormValid && formSended ? (
        <div className="loading-container">
          <img src={loading} />
        </div>
      ) : (
        <div className="login-container">
          <div className="center animate__animated animate__zoomIn">
            <h1>Login</h1>

            <form method="post">
              <div className="txt_field">
                <input
                  type="email"
                  value={email}
                  name="email"
                  onChange={onInputChange}
                />
                <span></span>
                <label>Email</label>
              </div>
              <div className="txt_field">
                <input
                  type="password"
                  value={password}
                  name="password"
                  onChange={onInputChange}
                />
                <span></span>
                <label>Password</label>
              </div>
              <input type="submit" value="Login" onClick={onSubmitForm} />
              <button className="signup_gmail" onClick={onGoogleSignIn}>
                {" "}
                <FcGoogle /> <span>SignIn with Google</span>
              </button>

              <div className="signup_link">
                Not a member? <Link to="/register">Signup</Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
