import { IMG_CDN_URL } from "../utils/constants";

const Moviecard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-3">
      <img src={IMG_CDN_URL + posterPath} alt="movie card" />
    </div>
  );
};
export default Moviecard;
