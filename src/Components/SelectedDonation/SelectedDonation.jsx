import { useLoaderData,  useParams } from "react-router-dom";
import { setToLocalStorage } from "../../Utilities/CommonFuctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SelectedDonation = () => {
  const notify = () =>
    toast.success("Your Donation successfully submitted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const datas = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const item = datas.find((data) => idInt === data.id);
  const handleDonateClick = () => {
    notify();
    setToLocalStorage("campaigns", idInt);
  };

  return (
    <div>
      <div className=" md:w-4/5 lg:w-[1000px] md:mx-auto lg:mx-auto my-10 w-auto mx-2">
        <div className="relative border">
          <img
            src={item.banner}
            alt=""
            className="lg:w-[1000px] lg:h-[500px] md:w-full w-full mx-auto"
          />
          <div
            className="absolute bottom-0 w-full md:mx-auto h-16"
            style={{ backgroundColor: "black", opacity: 0.5 }}
          ></div>
          <button
            className="py-2 px-4 rounded ml-8 absolute bottom-3"
            onClick={handleDonateClick}
            style={{ backgroundColor: item.textColor, color: "#FFFFFF" }}
          >
            Donate
          </button>
        </div>
        <h1 className="text-4xl font-bold my-3">{item.title}</h1>
        <p className="text-[#0B0B0BB2]">{item.description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SelectedDonation;
