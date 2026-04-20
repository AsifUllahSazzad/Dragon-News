import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-3">Find Us On</h3>

      <div className="join join-vertical flex flex-col *:bg-base-100 *:h-14 *:text-[#706F6F]">
        <button className="btn join-item justify-start font-medium">
          <img
            className="p-2 bg-gray-200 rounded-full"
            src={fb}
            alt="fb icon"
          />
          Facebook
        </button>
        <button className="btn join-item justify-start font-medium">
          <img
            className="p-2 bg-gray-200 rounded-full"
            src={twitter}
            alt="twitter icon"
          />
          Twitter
        </button>
        <button className="btn join-item justify-start font-medium">
          <img
            className="p-2 bg-gray-200 rounded-full"
            src={instagram}
            alt="instagram icon"
          />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
