import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-between p-5 items-center max-w-[1400px] mx-auto">
      <div className="h-16">
        <img
          src={"https://i.ibb.co/PQDtb0K/Logo.png"}
          alt=""
          className="h-16"
        />
      </div>
      <ul className="flex gap-10 lg:mr-10 mt-5 lg:mt-0 ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active text-[#FF444A] underline"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active text-[#FF444A] underline"
              : ""
          }
        >
          Donation
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active text-[#FF444A] underline"
              : ""
          }
        >
          Statistics
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
