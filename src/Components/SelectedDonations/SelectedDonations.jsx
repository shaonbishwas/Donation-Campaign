import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SelectedDonations = ({ data }) => {
  const { backgroundColor, cBg, textColor, banner, category, title } = data;
  return (
    <div className="flex lg:flex-row md:flex-row flex-col rounded-xl pb-2" style={{ backgroundColor: backgroundColor }}>
      <div>
        <img src={banner} alt="" className="lg:w-[250px] lg:h-[170px] rounded-s-xl " />
      </div>
      <div className="ml-5 mt-5">
        <h1>
          <span className="py-1 px-2 rounded-lg"  style={{ backgroundColor: cBg, color: textColor }}>
            {category}
          </span>
        </h1>
        <h1 className="mt-2 font-semibold text-2xl">{title}</h1>
        <Link>
          <button className="py-2 px-3 rounded-lg mt-2" style={{ backgroundColor: textColor, color: "#FFFFFF" }}>
            ViewDetails
          </button>
        </Link>
      </div>
    </div>
  );
};
SelectedDonations.propTypes = {
  data: PropTypes.object,
};
export default SelectedDonations;
