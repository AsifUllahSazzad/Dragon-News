import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-3">Login With</h3>

      <div className="flex flex-col gap-y-2">
        <button className="btn border-blue-400">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn border-black">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
