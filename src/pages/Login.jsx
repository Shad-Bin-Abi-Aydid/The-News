import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

  const navigate = useNavigate();

  const {userLogin, setUser} = useContext(AuthContext);

  const handleLogin = (e) =>{
    e.preventDefault();

    // get form data
    const form = new FormData(e.target);

    const email =  form.get('email');
    const password =  form.get('password');

    userLogin(email,password)
    .then((result) =>{
      const user = result.user;
      setUser(user);
      navigate('/');

    })
    .catch((error) => {
    alert(error.code)
  });
  }

  return (
    <div className="min-h-screen flex justify-center items-start mt-20">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center font-bold text-xl mt-3">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
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
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center py-3">
          Don't have an account ? Please{" "}
          <Link to="/auth/register" className="underline text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
