import { useLoaderData, useParams } from "react-router-dom";

const SelectedDonation = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const item = datas.find((data) => idInt === data.id);

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
          <button className="py-2 px-4 rounded ml-8 absolute bottom-3" style={{backgroundColor: item.textColor, color: "#FFFFFF"}}>Donate</button>
        </div>
        <h1 className="text-4xl font-bold my-3">{item.title}</h1>
        <p className="text-[#0B0B0BB2]">{item.description}</p>
      </div>
    </div>
  );
};

export default SelectedDonation;
