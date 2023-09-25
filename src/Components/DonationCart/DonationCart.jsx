import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DonationCart = ({campaign}) => {
    const { id, title, category, banner, textColor, backgroundColor, cBg} = campaign;
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(`/selectedDonation/${id}`)
    }
    return (
        <div className="w-[312px] rounded-lg mx-auto my-3 md:my-3" style={{backgroundColor: backgroundColor}} onClick={handleClick}>
            <div>
                <img src={banner} alt="" className='w-[312px] h-[194px]' />
            </div>
            <h1 className='p-3'>
                <span className="text-sm font-medium py-1 px-2 rounded-md" style={{color: textColor, backgroundColor: cBg}}>{category}</span>
            </h1>
            <h1 className="text-xl font-semibold mb-3 mx-2" style={{color: textColor}}>{title}</h1>
        </div>
    );
};
DonationCart.propTypes = {
    campaign : PropTypes.object
}
export default DonationCart;