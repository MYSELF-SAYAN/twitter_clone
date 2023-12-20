import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { MdPeopleOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { isOpen,isClose } from "../Store/Slices/PostSlice";
import { useDispatch,useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.post);
  
  return (
    <div className="sticky top-0 h-screen w-1/5 border-r border-gray-600  overflow-y-auto">
      <h1 className="py-5 text-2xl">
        <FaXTwitter />
      </h1>
      <ul>
        <li className="flex items-center mb-1 cursor-pointer hover:bg-[#202021] max-w-[100%] px-2 py-1 rounded-3xl mr-2">
          <span className="text-xl font-semibold">
            <CiHome />
          </span>
          <p className="ml-3">Home</p>
        </li>
        <li className="flex items-center mb-1 cursor-pointer hover:bg-[#202021] max-w-[100%] px-2 py-1 rounded-3xl mr-2">
          <span className="text-xl font-semibold">
            <CiSearch />
          </span>
          <p className="ml-3">Explore</p>
        </li>
        <li className="flex items-center mb-1 cursor-pointer hover:bg-[#202021] max-w-[100%] px-2 py-1 rounded-3xl mr-2">
          <span className="text-xl font-semibold">
            <IoIosNotificationsOutline />
          </span>
          <p className="ml-3">Notifications</p>
        </li>
        <li className="flex items-center mb-1 cursor-pointer hover:bg-[#202021] max-w-[100%] px-2 py-1 rounded-3xl mr-2">
          <span className="text-xl font-semibold">
            <FaRegEnvelope />
          </span>
          <p className="ml-3">Messages</p>
        </li>
        <li className="flex items-center mb-1 cursor-pointer hover:bg-[#202021] max-w-[100%] px-2 py-1 rounded-3xl mr-2">
          <span className="text-xl font-semibold">
            <CiViewList />
          </span>
          <p className="ml-3">Lists</p>
        </li>
        <li className="flex items-center mb-1 cursor-pointer hover:bg-[#202021] max-w-[100%] px-2 py-1 rounded-3xl mr-2">
          <span className="text-xl font-semibold">
            <MdPeopleOutline />
          </span>
          <p className="ml-3">Community</p>
        </li>
        <li className="flex items-center mb-1 cursor-pointer hover:bg-[#202021] max-w-[100%] px-2 py-1 rounded-3xl mr-2">
          <span className="text-xl font-semibold">
            <CgProfile />
          </span>
          <p className="ml-3">Profile</p>
        </li>
        <li className="flex items-center mb-1 cursor-pointer hover:bg-[#202021] max-w-[100%] px-2 py-1 rounded-3xl mr-2">
          <span className="text-xl font-semibold">
            <CiCircleMore />
          </span>
          <p className="ml-3">More</p>
        </li>
      </ul>
      <button className="bg-[#1DA1F2] text-white rounded-full px-5 py-2 mt-2 w-11/12 font-semibold hover:bg-[#125d8d]" onClick={()=>{
        data.open ? dispatch(isClose()) : dispatch(isOpen())
      }}>
        Post
      </button>
    </div>
  );
};

export default Sidebar;
