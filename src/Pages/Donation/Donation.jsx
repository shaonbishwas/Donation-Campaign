import { useLoaderData } from "react-router-dom";
import { getFromLocalStorage } from "../../Utilities/CommonFuctions";
import SelectedDonations from "../../Components/SelectedDonations/SelectedDonations";
import { useState } from "react";

const Donation = () => {
  const datas = useLoaderData();
  const selectedCampaign = getFromLocalStorage("campaigns");
  const newData = [];
  for (const item of selectedCampaign) {
    datas.find((dataItem) => {
      if (item === dataItem.id) {
        newData.push(dataItem);
      }
    });
  }
  const [conData, setConData] = useState(4);
  const handleSeeAll = () => {
    setConData(newData.length);
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 max-w-[1400px] mx-auto">
        {newData.slice(0, conData).map((data) => (
          <SelectedDonations key={data.id} data={data}></SelectedDonations>
        ))}
      </div>
      {conData !== newData.length && (
        <p className="text-center mt-10">
          <button
            className="bg-green-600 text-white py-2 px-3 rounded-md"
            onClick={handleSeeAll}
          >
            See All
          </button>
        </p>
      )}
    </div>
  );
};

export default Donation;
