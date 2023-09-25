import { useLoaderData } from "react-router-dom";
import DonationCart from "../../Components/DonationCart/DonationCart";


const Home = () => {
    const campaigns = useLoaderData();
    return (
        <div className="mb-10">
            <div className=" relative h-[320px] flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-6">I Grow By Helping People In Need</h1>
                <div className="mb-10">
                <input type="text" placeholder="Search here.." className="border rounded-s-md p-2 z-10" />
                <input type="submit" className="bg-[#FF444A] text-white p-2" />
                </div>
                
            </div>
            <div className="grid grid-cols-4 gap-5 mt-10 max-w-[1400px] mx-auto">
            {
                campaigns.map(campaign => <DonationCart key={campaign.id} campaign={campaign}></DonationCart>)
            }
            </div>
        </div>
    );
};

export default Home;