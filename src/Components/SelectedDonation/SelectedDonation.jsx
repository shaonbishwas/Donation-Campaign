import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { setToLocalStorage } from "../../Utilities/CommonFuctions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SelectedDonation = () => {
    const notify = () => toast.success('Your Donation successfully submitted!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  const navigate = useNavigate();
  const datas = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const item = datas.find((data) => idInt === data.id);

  const handleDonateClick = ()=>{
    notify()
    setToLocalStorage('campaigns', idInt);
  }

  return (
    <div>
      <div className="w-[1000px] mx-auto my-10">
        <div className="relative">
          <img
            src={item.banner}
            alt=""
            className="w-[1000px] h-[500px] mx-auto"
          />
          <div
            className="absolute bottom-0 w-full h-16"
            style={{ backgroundColor: "black", opacity: 0.5 }}
          ></div>
          <button className="py-2 px-4 rounded ml-8 absolute bottom-3" onClick={handleDonateClick} style={{backgroundColor: item.textColor, color: "#FFFFFF"}}>Donate</button>
        </div>
        <h1 className="text-4xl font-bold my-3">{item.title}</h1>
        <p className="text-[#0B0B0BB2]">{item.description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SelectedDonation;
