import React from "react";
import Sidebar from "../components/Sidebar";

import { CiSearch } from "react-icons/ci";
const Profile = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-1/2 ">
          <div className="h-[65%] w-full max-h-[80%] border-b border-gray-800 relative">
            <div className="max-h-[38%]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtTptIhUTSm6WSXfMSF18C1tti17Qf0CaZA&usqp=CAU"
                alt=""
                className="w-full min-h-full max-h-[8.5rem] object-cover"
              />
            </div>
            <span className="">
            <img
              src="https://images.unsplash.com/photo-1496440737103-cd596325d314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlYXV0aWZ1bCUyMGluZGlhbiUyMHdvbWFufGVufDB8fDB8fHww"
              className="h-24 w-24 rounded-full  my-3 cover absolute top-[20%] left-6 border-[3px] border-black"
              alt=""
            />
            </span>
           
            <div className="mt-14 px-5">
                <h1 className="text-xl font-bold ">Sayan Mukherjee</h1>
                <h3 className="text-xs text-gray-400">@itz_sayan</h3>
                <h3 className="text-xs text-gray-400 mt-2">Joined 3rd july 2003</h3>
                <div className="flex mt-5">
                    <p className="cursor-pointer mr-5 text-xs font-bold ">150 followers</p>
                    <p className="cursor-pointer mr-5 text-xs font-bold ">150 following</p>
                </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-[30%] py-3 px-2 sticky top-0 overflow-y-auto h-screen border-l border-gray-600">
          <div className="flex items-center justify-center ">
            <span className="bg-[#202327] h-8 px-3 flex items-center justify-center rounded-l-3xl text-xs">
              <CiSearch className=" " />
            </span>
            <input
              type="text"
              className="w-full text-xs placeholder:text-xs h-8 rounded-r-3xl bg-[#202327] "
              placeholder="Search"
            />
          </div>
          <div className="bg-[#16181c] mt-5 rounded-3xl p-3  ">
            <h1>Who to follow</h1>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <div className="mr-1">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    className="rounded-full w-7 h-7 object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-sm">Sayan Mukherjee</h1>
                  <h3 className="text-xs text text-gray-400">@itz_sayan</h3>
                </div>
              </div>

              <div>
                <button className="text-sm h-7 bg-white text-black px-2 rounded-3xl font-bold">
                  Follow
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <div className="mr-1">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    className="rounded-full w-7 h-7 object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-sm">Sayan Mukherjee</h1>
                  <h3 className="text-xs text text-gray-400">@itz_sayan</h3>
                </div>
              </div>

              <div>
                <button className="text-sm h-7 bg-white text-black px-2 rounded-3xl font-bold">
                  Follow
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <div className="mr-1">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    className="rounded-full w-7 h-7 object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-sm">Sayan Mukherjee</h1>
                  <h3 className="text-xs text text-gray-400">@itz_sayan</h3>
                </div>
              </div>

              <div>
                <button className="text-sm h-7 bg-white text-black px-2 rounded-3xl font-bold">
                  Follow
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <div className="mr-1">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    className="rounded-full w-7 h-7 object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-sm">Sayan Mukherjee</h1>
                  <h3 className="text-xs text text-gray-400">@itz_sayan</h3>
                </div>
              </div>

              <div>
                <button className="text-sm h-7 bg-white text-black px-2 rounded-3xl font-bold">
                  Follow
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <div className="mr-1">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    className="rounded-full w-7 h-7 object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-sm">Sayan Mukherjee</h1>
                  <h3 className="text-xs text text-gray-400">@itz_sayan</h3>
                </div>
              </div>

              <div>
                <button className="text-sm h-7 bg-white text-black px-2 rounded-3xl font-bold">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
