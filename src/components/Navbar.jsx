import { useContext } from "react";
import userIcon from "../assets/user.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center pt-10">
      <div className="">{user && user.email}</div>

      <div className="nav space-x-5 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>

      <div className="login flex items-center gap-3">
        <div>
          {user && user?.email ? (
            <div className="flex gap-2 ">
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p>{user?.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        {user && user.email ? (
          <button onClick={logOut} className="btn btn-neutral">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
