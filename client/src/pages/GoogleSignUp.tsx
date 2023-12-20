import React,{useState} from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const GoogleSignUp = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
  return (
    <div className='relative'>
      <div className='absolute top-[5%] left-[30%] bg-black rounded-3xl h-[90%] w-[40%] opacity-100'>
          <div className="flex items-center ">
            <RxCross2 className="text-white text-sm my-3 mx-4" />
       
          </div>
          <div className="flex flex-col px-12 ">
            <h1 className="text-xl font-bold mb-3  ">
              Complete Profile
            </h1>
            <div>
            <input
              type="text"
              className="w-full h-10 border rounded-md mb-5 border-[#242d34] bg-transparent outline-none placeholder:pl-2 pl-2 text-sm "
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="w-full h-10 border rounded-md mb-5 border-[#242d34] bg-transparent outline-none placeholder:pl-2 pl-2 text-sm "
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            </div>

            <button
              className="px-24 mt-2 py-1 border bg-white text-black rounded-3xl"
             
            >
              Proceed
            </button>
          </div>
        </div>
    </div>
  );
}

export default GoogleSignUp;
