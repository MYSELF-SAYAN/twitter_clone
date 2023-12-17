import React from "react";
import Sidebar from "../components/Sidebar";
import PostCard from "../components/PostCard";
import { CiSearch } from "react-icons/ci";
const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-1/2 ">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
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
          <h1>
            Who to follow
          </h1>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
            <div className="mr-1"><img src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D" alt="" className="rounded-full w-7 h-7 object-cover"/></div>
            <div>
              <h1 className="text-sm">Sayan Mukherjee</h1>
              <h3 className="text-xs text text-gray-400">@itz_sayan</h3>
            </div>
            </div>
            
            <div>
              <button className="text-sm h-7 bg-white text-black px-2 rounded-3xl font-bold">Follow</button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
            <div className="mr-1"><img src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D" alt="" className="rounded-full w-7 h-7 object-cover"/></div>
            <div>
              <h1 className="text-sm">Sayan Mukherjee</h1>
              <h3 className="text-xs text text-gray-400">@itz_sayan</h3>
            </div>
            </div>
            
            <div>
              <button className="text-sm h-7 bg-white text-black px-2 rounded-3xl font-bold">Follow</button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
            <div className="mr-1"><img src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D" alt="" className="rounded-full w-7 h-7 object-cover"/></div>
            <div>
              <h1 className="text-sm">Sayan Mukherjee</h1>
              <h3 className="text-xs text text-gray-400">@itz_sayan</h3>
            </div>
            </div>
            
            <div>
              <button className="text-sm h-7 bg-white text-black px-2 rounded-3xl font-bold">Follow</button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
            <div className="mr-1"><img src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D" alt="" className="rounded-full w-7 h-7 object-cover"/></div>
            <div>
              <h1 className="text-sm">Sayan Mukherjee</h1>
              <h3 className="text-xs text text-gray-400">@itz_sayan</h3>
            </div>
            </div>
            
            <div>
              <button className="text-sm h-7 bg-white text-black px-2 rounded-3xl font-bold">Follow</button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
            <div className="mr-1"><img src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D" alt="" className="rounded-full w-7 h-7 object-cover"/></div>
            <div>
              <h1 className="text-sm">Sayan Mukherjee</h1>
              <h3 className="text-xs text text-gray-400">@itz_sayan</h3>
            </div>
            </div>
            
            <div>
              <button className="text-sm h-7 bg-white text-black px-2 rounded-3xl font-bold">Follow</button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
