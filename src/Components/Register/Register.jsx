import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmail } from "../../store/auth/thunks";
import loading from "../../assets/loading.gif";

const formData = {
  username: "",
  email: "",
  password: "",
  repeatpassword: "",
};

const formValidations = {
  username: [
    [
      (value) => value.length >= 4,
      "The username must be greater than 4 characters",
    ],
  ],
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

  repeatpassword: [
    [
      (value) => value.length >= 6,
      "The password must have at least 6 characters",
    ],
  ],
};

function Register() {
  const {
    username,
    email,
    password,
    repeatpassword,
    onInputChange,
    usernameValid,
    emailValid,
    passwordValid,
    repeatpasswordValid,
    isFormValid,
    formState,
  } = useForm(formData, formValidations);
  const { status } = useSelector((state) => state.auth);

  const [formSended, setformSended] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitForm = (e) => {
    e.preventDefault();

    if (
      !isFormValid ||
      (password !== repeatpassword && usernameValid) ||
      emailValid ||
      passwordValid ||
      repeatpasswordValid
    ) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        color: "#fff",
        background: "#000",
        text:
          usernameValid || emailValid || passwordValid || repeatpasswordValid,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }

    if (password !== repeatpassword) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords must be identical to each other",
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

    dispatch(startCreatingUserWithEmail(formState));
    setformSended(true);
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
        <div className="register-container">
          <div className="center register-center animate__animated animate__zoomInDown">
            <h1>Register</h1>
            <form method="post">
              <div className="txt_field">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={onInputChange}
                />
                <span></span>
                <label>Username</label>
              </div>

              <div className="txt_field">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
                <span></span>
                <label>Email</label>
              </div>
              <div className="txt_field">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                />
                <span></span>
                <label>Password</label>
              </div>

              <div className="txt_field">
                <input
                  type="password"
                  name="repeatpassword"
                  value={repeatpassword}
                  onChange={onInputChange}
                />
                <span></span>
                <label>Confirm Password</label>
              </div>

              <input
                type="submit"
                value="Create Account"
                onClick={onSubmitForm}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
