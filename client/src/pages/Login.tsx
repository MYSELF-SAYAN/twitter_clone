import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Login = () => {
  return (
    <div>
      <div className="flex flex-col items-center  justify-center h-screen opacity-40 relative bg-[#242d34] pointer-events-none">
        <div className=" ">
          <h1 className="text-4xl font-black px-52 mb-5">
            See what's happening in the world right now
          </h1>
          <h3 className="flex items-center px-52  text-3xl font-black">
            Join
            <span className="mx-2">
              <FaXTwitter />
            </span>
            today.
          </h3>
        </div>
        <div className="mt-5">
          <button className="flex items-center justify-center px-10 py-1 rounded-3xl bg-white text-black">
            <FcGoogle className="mr-3" />
            Sign up with Google
          </button>
          <div>
            <h1 className="flex items-center justify-center my-3">
              <span className="border-b border-gray-400 w-1/5"></span>
              <span className="mx-5">or</span>
              <span className="border-b border-gray-400 w-1/5"></span>
            </h1>
          </div>
          <button className="flex items-center justify-center px-7 py-1 rounded-3xl bg-[#1d9bf0] text-white">
            Sign up with phone or email
          </button>
        </div>
        <div className="mt-5">
          <h1 className="text-lg text-center">Already have an account?</h1>
          <button className="px-24 mt-2 py-1 border border-[#1d9bf0] rounded-3xl">
            Sign in
          </button>
        </div>
      </div>
      <div className="absolute top-[5%] left-[30%] bg-black rounded-3xl h-[90%] w-[40%] opacity-100 flex flex-col">
        <div className="flex items-center ">
          <RxCross2 className="text-white text-sm my-3 mx-4" />
          
        </div>
        <div className="px-10 flex items-center justify-center flex-col">
            <h1 className="text-2xl mb-5">Login in your account</h1>
            <button className="flex items-center justify-center px-10 py-1 rounded-3xl bg-white text-black">
              <FcGoogle className="mr-3" />
              Sign up with Google
            </button>
           </div>
           <div>
              <h1 className="flex items-center justify-center my-3">
                <span className="border-b border-gray-400 w-1/5"></span>
                <span className="mx-5">or</span>
                <span className="border-b border-gray-400 w-1/5"></span>
              </h1>
              </div>
              <div className="px-10 flex items-center flex-col justify-center">
              <input
                type="text"
                className="w-full h-10 border rounded-md mb-5 border-[#242d34] bg-transparent outline-none placeholder:pl-2 pl-2 text-sm "
                placeholder="Enter email"
              />
              <input
                type="password"
                className="w-full h-10 border rounded-md mb-5 border-[#242d34] bg-transparent outline-none placeholder:pl-2 pl-2 text-sm "
                placeholder="Enter password"
              />
              <button className="flex items-center justify-center px-7 py-1 rounded-3xl bg-[#1d9bf0] text-white">
                Login
              </button>
              </div>
      </div>
    </div>
  );
};

export default Login;
