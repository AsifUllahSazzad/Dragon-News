import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photoUrl = form.get("photo");
    const password = form.get("password");

    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-base-100 w-full max-w-xl p-10">
        <div className="card-body">
          <h1 className="text-center text-[#403F3F] font-semibold text-4xl mb-2">
            Register your account
          </h1>

          <div className="border-t w-full my-6 text-[#E7E7E7]"></div>

          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label text-lg font-semibold text-[#403F3F]">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              className="input w-full bg-[#F3F3F3] placeholder:text-[#9F9F9F]"
              placeholder="Enter your name"
            />

            <label className="label text-lg font-semibold text-[#403F3F]">
              Photo URL
            </label>
            <input
              name="photo"
              type="url"
              className="input w-full bg-[#F3F3F3] placeholder:text-[#9F9F9F]"
              placeholder="Enter your photo url"
            />

            <label className="label text-lg font-semibold text-[#403F3F]">
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              className="input w-full bg-[#F3F3F3] placeholder:text-[#9F9F9F]"
              placeholder="Enter your email address"
            />

            <label className="label text-lg font-semibold text-[#403F3F]">
              Password
            </label>
            <input
              required
              name="password"
              type="password"
              className="input w-full bg-[#F3F3F3] placeholder:text-[#9F9F9F]"
              placeholder="Enter your password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </form>
        </div>
        <p className="text-center text-[#706F6F] font-semibold">
          Allready have an account?{" "}
          <Link to={"/auth/login"} className="text-red-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
