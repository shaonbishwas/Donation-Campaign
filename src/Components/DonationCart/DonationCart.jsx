import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DonationCart = ({campaign}) => {
    const {title, category, banner, textColor, backgroundColor, cBg} = campaign;
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/selectedDonation")
    }
    return (
        <div className={`bg-[${backgroundColor}]`} onClick={handleClick}>
            <div>
                <img src={banner} alt="" />
            </div>
            <h1 className={`text-[${textColor}] bg-[${cBg}]`}>{category}</h1>
            <h1 className={`text-[${textColor}]`}>{title}</h1>
        </div>
    );
};
DonationCart.propTypes = {
    campaign : PropTypes.object
}
export default DonationCart;