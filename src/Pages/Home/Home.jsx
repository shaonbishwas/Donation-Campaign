import { useLoaderData } from "react-router-dom";
import DonationCart from "../../Components/DonationCart/DonationCart";


const Home = ({donationClickHandle}) => {
    const campaigns = useLoaderData();
    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl font-bold">I Grow By Helping People In Need</h1>
                <input type="text" placeholder="Search here.." className="border rounded-s-md p-2" />
                <input type="submit" className="bg-[#FF444A] text-white p-2" />
            </div>
            <div className="grid grid-cols-4 gap-5 mt-10 max-w-[1400px] mx-auto">
            {
                campaigns.map(campaign => <DonationCart key={campaign.id} campaign={campaign} donationClickHandle={donationClickHandle}></DonationCart>)
            }
            </div>
        </div>
    );
};

export default Home;