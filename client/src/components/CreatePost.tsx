import React, { useState, ChangeEvent, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useSelector, useDispatch } from "react-redux";
import { isOpen, isClose } from "../Store/Slices/PostSlice";
import { login } from "../Store/Slices/DataSlice";
import { doc, setDoc, getDoc,updateDoc, arrayUnion } from "firebase/firestore";
import { db, storage } from "../config/firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const CreatePost = () => {
  const post = useSelector((state: any) => state.post);
  const user = useSelector((state: any) => state.data);
  
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxCharCount = 280;
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const [userData, setUserData] = useState<any>();
  const [imageUrl, setImageUrl] = useState<string>();
  const dispatch = useDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    setText(inputText);
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
    setCharCount(inputText.length);
  };

  const handleImageInputChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0] || null;
    await setSelectedImage(file);
    await setIsImage(!!file);
    console.log(selectedImage);
  };

  const handleEmojiClick = () => {
    setOpenEmoji(!openEmoji);
  };

  const getUser = async () => {
    try {
      const data = await getDoc(doc(db, "user", user.email));
      setUserData(data.data());
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const handleImageUpload = async () => {
    try {
      const timestampInMilliseconds = new Date().getTime();
      const imageRef = ref(
        storage,
        `images/${selectedImage?.name}${timestampInMilliseconds}`
      );
  
      if (selectedImage) {
        const snapshot = await uploadBytes(imageRef, selectedImage);
        const url = await getDownloadURL(snapshot.ref);
        setImageUrl(url);
        return url;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };
  
  const handlePostButtonClick = async () => {
    try {
      const [imageUrl] = await Promise.all([handleImageUpload()]);
      const timestampInMilliseconds = new Date().getTime();
  
      if (userData && imageUrl) {
        // Add your code here
        const postObj = {
          text,
          image: imageUrl,
          likes: [],
          comments: [],
          retweets: [],
          timestamp: new Date().getTime(),
          user: {
            name: userData.name,
            username: userData.username,
            profilePic: userData.profilePic,
          },
        };
        const naming = `${userData.name}${timestampInMilliseconds}`;
        await setDoc(doc(db, "posts", naming), postObj);
        await updateDoc(doc(db, "user", user.email), {
          posts: arrayUnion(postObj),
        });
        dispatch(isClose());
      }
    } catch (err) {
      console.error("Error handling post button click:", err);
      // Handle the error appropriately (e.g., show a user-friendly message)
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      await getUser();
    };

    fetchData();
  }, []);

  return (
    <div className="absolute inset-x-44 top-3 z-50 flex opacity-100 justify-center   ">
      <div className="bg-black h-full w-full px-4 pt-4 rounded-md">
        <div className="h-5 w-full mb-2 sticky top-5 bg-transparent">
          <RxCross2
            className="text-white cursor-pointer"
            size={15}
            onClick={() => {
              dispatch(isClose());
            }}
          />
        </div>
        <div className="flex mb-2 max-h-[30vh] overflow-y-scroll">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D"
              className="rounded-full w-7 h-7 object-cover cursor-pointer"
              alt=""
              onClick={() => document.getElementById("imageInput")?.click()}
            />
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              className="hidden"
              onChange={handleImageInputChange}
            />
          </div>
          <div className="w-full">
            <textarea
              className="w-full h-16 outline-none text-xs bg-black text-white placeholder-gray-400 px-5 resize-none overflow-hidden"
              placeholder="What's happening?"
              onChange={handleInputChange}
              value={text}
            />
            <img
              src={selectedImage ? URL.createObjectURL(selectedImage) : ""}
              className={`rounded-lg w-[100%] ${
                isImage ? "block" : "hidden"
              } object-cover `}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between border-t border-gray-600">
          <div className="flex py-2">
            <FaRegImage
              className="text-[#3469fb] cursor-pointer"
              onClick={() => document.getElementById("imageInput")?.click()}
            />
            <MdEmojiEmotions
              className="text-[#3469fb] cursor-pointer ml-2"
              onClick={handleEmojiClick}
            />
            <div
              className={`absolute left-0  top-[100%] ${
                openEmoji ? "block" : "hidden"
              }`}
              style={{ maxHeight: "200px", overflowY: "hidden" }}
            >
              <Picker
                data={data}
                emojiSize={15}
                emojiButtonSize={20}
                previewPosition={"none"}
                navPosition={"none"}
                onEmojiSelect={(emoji: any) => setText(text + emoji.native)}
              />
            </div>
          </div>
          <div className="py-2 flex justify-center items-center">
            <div className="mr-5">
              <p className="text-xs text-gray-400">{`${charCount}/${maxCharCount}`}</p>
            </div>
            <button
              className={`${
                charCount > maxCharCount
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#3469fb]"
              } text-white rounded-full px-4 py-1 w-full text-xs font-bold`}
              disabled={charCount > maxCharCount}
              onClick={handlePostButtonClick}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
