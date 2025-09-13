import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold">Login With</h2>
      <div className="flex flex-col space-y-3">
        <button className="btn btn-info">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn btn-info">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
