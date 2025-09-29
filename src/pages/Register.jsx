import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUserEP, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // get from data
    const form = new FormData(e.target);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // Create new User with email and password
    createUserEP(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-start mt-20">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center font-bold text-xl mt-3">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input bg-gray-300"
              placeholder="Your name"
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input bg-gray-300"
              placeholder="Photo URL"
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input bg-gray-300"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input bg-gray-300"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p className="text-center py-3">
          Already have an account ? Please{" "}
          <Link to="/auth/login" className="underline text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
