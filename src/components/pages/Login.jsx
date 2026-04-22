import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { LogIn, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    LogIn(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorCode)
      })
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

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
        <p className="text-center text-[#706F6F] font-semibold">
          Dont’t Have An Account ?{" "}
          <Link to={"/auth/register"} className="text-red-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
