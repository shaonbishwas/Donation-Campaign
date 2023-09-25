import { useLoaderData } from "react-router-dom";
import DonationCart from "../../Components/DonationCart/DonationCart";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const campaigns = useLoaderData();
  const [newCampaigns, setNewCampaigns] = useState(campaigns);
  const searchHandle = () => {
    if (inputValue === "") {
      setNewCampaigns(campaigns);
      return;
    }
    const array = [];
    for (const camp of campaigns) {
      if (camp.category === inputValue) {
        array.push(camp);
      }
    }
    setNewCampaigns(array);
  };

  return (
    <div className="mb-10">
      <div className=" relative h-[320px] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-center">
          I Grow By Helping People In Need
        </h1>
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search here.."
            className="border rounded-s-md p-2 z-10"
            name="search"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bg-[#FF444A] text-white p-2"
            onClick={searchHandle}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5 md:mt-5 lg:mt-10 max-w-[1400px] mx-auto">
        {newCampaigns.map((campaign) => (
          <DonationCart key={campaign.id} campaign={campaign}></DonationCart>
        ))}
      </div>
    </div>
  );
};

export default Home;
