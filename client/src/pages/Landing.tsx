import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { provider, auth } from "../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useSelector } from "react-redux";
const Landing = () => {
  const data = useSelector((state: any) => state.data);
 
  return (
    <div className="flex flex-col items-center  justify-center h-screen">
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
        <button
          className="flex items-center justify-center px-10 py-1 rounded-3xl bg-white text-black"
          onClick={() => {
            signInWithPopup(auth, provider);
          }}
        >
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
        <Link to="/signup">
          <button className="flex items-center justify-center px-7 py-1 rounded-3xl bg-[#1d9bf0] text-white">
            Sign up with phone or email
          </button>
        </Link>
      </div>
      <div className="mt-5">
        <h1 className="text-lg text-center">Already have an account?</h1>
        <Link to="/login">
          <button className="px-24 mt-2 py-1 border border-[#1d9bf0] rounded-3xl">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
