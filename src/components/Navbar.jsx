import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {

  const {user} = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div>{user && user.name}</div>
      <div className="space-x-5 mx-auto text-lg text-gray-600">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>

      <div className="flex items-center gap-2">
        <img src={userIcon} alt="User Icon" />

        <Link to={"/auth/login"} className="btn w-30 bg-[#403F3F] rounded-none text-white">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
