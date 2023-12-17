import React, { useState } from "react";
import { IoIosMore } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
const PostCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="px-2 pt-2 flex border-b border-t border-gray-600">
      <div className="mx-2">
        <img
          src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D"
          alt=""
          className="rounded-full w-8 h-7 object-cover"
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <h1 className="text-sm font-semibold mx-1">Sayan Mukherjee</h1>
            <h3 className="text-xs text-gray-600 mx-1">@itz_sayan</h3>
            <p className="text-xs text-gray-600 mx-1">. 18 Dec 2003</p>
          </div>
        </div>
        <div className="w-[90%]">
          <p className="text-xs my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            sapiente provident voluptates placeat explicabo
          </p>
        </div>
        <div className=" ">
          <img
            src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="rounded-lg w-[90%] object-cover max-h-[70vh]"
          />
        </div>
        <div className=" py-2 max-w-[90%]">
          <ul className="flex justify-between">
            <li className="flex items-center justify-center text-sm">
              <FaRegComment className="text-gray-500 hover:text-[#3469fb] mr-2" />
              <p>500</p>
            </li>
            <li className="flex items-center justify-center text-sm">
              <FaRetweet className="text-gray-500 hover:text-[#3469fb] mr-2 " />
              <p>500</p>
            </li>
            <li className="flex items-center justify-center text-sm">
              <FaRegHeart className="text-gray-500 hover:text-[#3469fb] mr-2 " />
              <p>500</p>
            </li>
            <li className="flex items-center justify-center text-sm ">
              <FaRegBookmark />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-items-end items-center relative">
        <div className="p-1 rounded-full hover:bg-[#242fff] hover:text-[#3469fb] hover:opacity-10">
          <IoIosMore className=" opacity-100" />
        </div>
        <span className="absolute bottom-3">
          <IoShareOutline />
        </span>
      </div>
    </div>
  );
};

export default PostCard;
