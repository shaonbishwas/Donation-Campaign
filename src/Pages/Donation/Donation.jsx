import { useLoaderData } from "react-router-dom";
import { getFromLocalStorage } from "../../Utilities/CommonFuctions";
import SelectedDonations from "../../Components/SelectedDonations/SelectedDonations";


const Donation = () => {
    const data = useLoaderData();
    const selectedCampaign = getFromLocalStorage('campaigns');
    const newData = [];
    for(const item of selectedCampaign){
        data.find(dataItem =>{
            if(item === dataItem.id){
                newData.push(dataItem)
            }
        })
    }
    console.log(newData)
    return (
        <div>
            <h1>hi this is donation {newData.length}</h1>
            <div className="grid grid-cols-4 gap-5">
            {
                newData.map(ndata => <SelectedDonations key={ndata.id} ndata={ndata}></SelectedDonations>)
            }
            </div>
        </div>
    );
};

export default Donation;