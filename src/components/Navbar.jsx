import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div>{user && user.name}</div>
      <div className="space-x-5 mx-auto text-lg text-gray-600">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>

      <div className="flex items-center gap-2">
        {user && user?.email ? (
          <div>
            <img className="size-10 rounded-full" src={user.photoURL} alt={user.displayName} />
          </div>
        ) : (
          <img src={userIcon} alt="User Profile" />
        )}

        {user && user?.email ? (
          <button
            onClick={logOut}
            className="btn w-30 bg-[#403F3F] rounded-none text-white"
          >
            Log Out
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn w-30 bg-[#403F3F] rounded-none text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
