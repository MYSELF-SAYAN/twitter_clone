import React, { useState, ChangeEvent } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { auth, db } from "../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
const Signup = () => {
  const [imagePreview, setImagePreview] = useState(
    "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-0.png"
  );
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  console.log(name, email, dob, password, username);
  const nextStep = () => {
    setStep(step + 1);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreview(
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYXV0aWZ1bCUyMGluZGlhbiUyMHdvbWFufGVufDB8fDB8fHww"
      );
    }
  };
  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await await setDoc(doc(db, "user", email), {
        email,
        username,
        password,
        profilePic:
          "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        posts: [],
        following: 0,
        followers: 0,
        followingList: [],
        followersList: [],
        dateOfBirth: dob,
        name,
      });
      nextStep();
    } catch (err) {
      console.log(err);
    }
  };
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
      <div className="absolute top-[5%] left-[30%] bg-black rounded-3xl h-[90%] w-[40%] opacity-100 ">
        <div className={step === 1 ? "" : "hidden"}>
          <div className="flex items-center ">
            <RxCross2 className="text-white text-sm my-3 mx-4" />
            <h1 className=" text-sm">Step {step} of 4</h1>
          </div>

          <div className="flex flex-col px-12 py-5">
            <h1 className="text-xl font-bold mb-3">Create your account</h1>
            <input
              type="text"
              className="w-full h-10 border rounded-md mb-5 border-[#242d34] bg-transparent outline-none placeholder:pl-2 pl-2 text-sm "
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="w-full h-10 border rounded-md mb-5 border-[#242d34] bg-transparent outline-none placeholder:pl-2 pl-2 text-sm "
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <h1 className="text-sm mb-5">Date of birth</h1>
              <input
                type="text"
                className="w-full h-10 border rounded-md mb-5 border-[#242d34] bg-transparent outline-none placeholder:pl-2 pl-2 text-sm "
                placeholder="dd/mm/yyyy"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div>
              <button></button>
            <button
              className="px-24 mt-2 py-1 border bg-white text-black rounded-3xl"
              onClick={nextStep}
            >
              Proceed
            </button>
            </div>
           
          </div>
        </div>

        <div className={step === 2 ? "" : "hidden"}>
          <div className="flex items-center ">
            <RxCross2 className="text-white text-sm my-3 mx-4" />
            <h1 className=" text-sm">Step {step} of 4</h1>
          </div>
          <div className="flex flex-col px-12 py-5">
            <h1 className="text-xl font-bold mb-3 ">Choose a password</h1>
            <input
              type="password"
              className="w-full h-10 border rounded-md mb-5 border-[#242d34] bg-transparent outline-none placeholder:pl-2 pl-2 text-sm "
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="px-24 mt-2 py-1 border bg-white text-black rounded-3xl"
              onClick={nextStep}
            >
              Proceed
            </button>
          </div>
        </div>

        <div className={step === 3 ? "" : "hidden"}>
          <div className="flex items-center ">
            <RxCross2 className="text-white text-sm my-3 mx-4" />
            <h1 className=" text-sm">Step {step} of 4</h1>
          </div>
          <div className="flex flex-col px-12 ">
            <h1 className="text-xl font-bold mb-3  ">Select a username</h1>
            <input
              type="text"
              className="w-full h-10 border rounded-md mb-5 border-[#242d34] bg-transparent outline-none placeholder:pl-2 pl-2 text-sm "
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              className="px-24 mt-2 py-1 border bg-white text-black rounded-3xl"
              onClick={handleSignup}
            >
              Proceed
            </button>
          </div>
        </div>

        <div className={step === 4 ? "" : "hidden"}>
          <div className="flex items-center ">
            <RxCross2 className="text-white text-sm my-3 mx-4" />
            <h1 className=" text-sm">Step {step} of 4</h1>
          </div>
          <div className="flex flex-col px-12 ">
            <h1 className="text-xl font-bold mb-3  ">
              Select a Profile picture
            </h1>
            <div className="flex flex-col items-center ">
              <img
                src={imagePreview}
                className="h-32 w-32 rounded-full border border-gray-700 my-3 cover"
                alt=""
              />

              <label className="custom-file-upload">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                  placeholder="Username"
                />
                <MdDriveFolderUpload className="text-3xl m-3  cursor-pointer" />
              </label>
            </div>

            <button
              className="px-24 mt-2 py-1 border bg-white text-black rounded-3xl"
              onClick={nextStep}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
