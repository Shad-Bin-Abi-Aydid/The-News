
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Find Us On</h2>

      <div className="join flex join-vertical ">
        <button className="btn btn-dash justify-start  join-item"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn btn-dash justify-start join-item"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn btn-dash justify-start join-item"><FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
