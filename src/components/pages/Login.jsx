import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { LogIn, setUser, forgetPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    LogIn(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location.state?.from?.pathname || "/");
      })
      .catch((err) => {
        e.target.reset();
        const errorCode = err.code;
        setError({ ...error, login: errorCode });
      });
  };

  const [email, setEmail] = useState("");

  const handleForgetPassword = (e) => {
    if (!email) {
      alert("Please enter your email first");
      return;
    }

    forgetPassword(email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-base-100 w-full max-w-lg p-10">
        <div className="card-body">
          <h1 className="text-center text-[#403F3F] font-semibold text-4xl mb-2">
            Login your account
          </h1>

          <div className="border-t w-full my-6 text-[#E7E7E7]"></div>

          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label text-lg font-semibold text-[#403F3F]">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full bg-[#F3F3F3] placeholder:text-[#9F9F9F]"
              placeholder="Enter your email address"
            />

            <label className="label text-lg font-semibold text-[#403F3F]">
              Password
            </label>
            <input
              name="password"
              required
              type="password"
              className="input w-full bg-[#F3F3F3] placeholder:text-[#9F9F9F]"
              placeholder="Enter your password"
            />

            {error.login && (
              <div>
                <p className="text-red-500 text-center text-sm">
                  {error.login}
                </p>
              </div>
            )}

            <div>
              <button
                type="button"
                onClick={handleForgetPassword}
                className="link link-hover"
              >
                Forgot password?
              </button>
            </div>

            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
        <p className="text-center text-[#706F6F] font-semibold">
          Dont’t Have An Account ?{" "}
          <Link
            to={"/auth/register"}
            state={location.state}
            className="text-red-400"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
