import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 items-center max-w-[1400px] mx-auto">
      <div className="h-16">
        <img src={"https://i.ibb.co/PQDtb0K/Logo.png"} alt="" className="h-16" />
      </div>
      <ul className="flex gap-10 mr-10">
        <Link to="/">Home</Link>
        <Link to="/donation">Donation</Link>
        <Link to="/statistics">Statistics</Link>
      </ul>
    </div>
  );
};

export default Navbar;
