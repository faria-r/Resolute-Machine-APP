import React, { useContext } from "react";
import { AiTwotoneSchedule } from "react-icons/ai";
import { BsFillHouseAddFill } from "react-icons/bs";
import { FaHouse } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { IoIosPersonAdd, IoMdLogOut } from "react-icons/io";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { GiVendingMachine } from "react-icons/gi";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <div>
      <div className="w-auto min-h-[100vh] bg-orange-500 ">
        <div className="text-center">
          <Navbar></Navbar>
        </div>
        <div className="flex text-white">
          {/* sidebar content */}
          <div className="sm:w-[20vw] lg:w-64 min-h-[100vh] bg-orange-600 mt-6">
            <ul className="menu p-4">
              {isAdmin ? (
                <>
                  <li className="rounded-none  text-white lg:text-xl">
                    {" "}
                    <Link to="/dashboard/addUser">
                      <IoIosPersonAdd /> Add User
                    </Link>
                  </li>
                  <li className="rounded-none  text-white lg:text-xl">
                    {" "}
                    <Link to="/dashboard/users">
                      <ImUsers /> All User's
                    </Link>
                  </li>
                  <li className="rounded-none  text-white lg:text-xl">
                    {" "}
                    <Link to="/dashboard">
                      <GiVendingMachine /> Machine's
                    </Link>
                  </li>

                  <li className="rounded-none  text-white lg:text-xl">
                    {" "}
                    <Link to="/dashboard/addMachine">
                      <CgSmartHomeWashMachine /> Add Machines
                    </Link>
                  </li>
                  <li className="rounded-none  text-white lg:text-xl">
                    {" "}
                    <button onClick={handleLogOut}>
                      <IoMdLogOut /> Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="rounded-none  text-white lg:text-xl">
                    {" "}
                    <Link to="/dashboard/myMachines">
                      <FaHouse></FaHouse> My Machines
                    </Link>
                  </li>

                  <li className="rounded-none  text-white lg:text-xl">
                    {" "}
                    <button onClick={handleLogOut}>
                      <IoMdLogOut /> Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex mt-6 bg-white text-center w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
