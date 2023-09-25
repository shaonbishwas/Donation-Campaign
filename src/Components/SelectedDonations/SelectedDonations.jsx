import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SelectedDonations = ({ ndata }) => {
  const { banner, category, title } = ndata;
  return (
    <div>
      <div>
        <img src={banner} alt="" />
      </div>
      <div>
        <h1>{category}</h1>
        <h1>{title}</h1>
        <Link>ViewDetails</Link>
      </div>
    </div>
  );
};
SelectedDonations.propTypes = {
  ndata: PropTypes.object,
};
export default SelectedDonations;
