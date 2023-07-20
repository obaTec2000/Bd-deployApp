import React from "react";
import navImage from "../assests/navImage.png";
import Profile from "../assests/posts/profile.png";
import DownIcon from "../assests/posts/down.png";
import PostImage from "../assests/posts/post1.png";
import Like from "../assests/posts/like.png";
import CommentIcon from "../assests/posts/gif.png";
import shareIcon from "../assests/posts/share.png";
import EmojiIcon from "../assests/posts/emoji.png";
import CameraIcon from "../assests/posts/camera.png";
import gifIcon from "../assests/posts/pics.png";
import SendIcon from "../assests/posts/send.png"; 

const Post = () => {
  
  return (
    <div className="text-white bg-[#353530] rounded-[1rem] px-5 py-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center">
            <div className="w-12 h-12">
              <img src={Profile} alt="Profile" className="" />
            </div>
            <div className="ml-3 text-outfit">
              <p className="font-bold text-sm">Joey Cambel</p>
              <div className="flex">
                <p className="text-xs">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={DownIcon} alt="DownIcon" className="w-3" />
        </div>
      </div>
      {/* Image */}
      <div className="-mx-5">
        <img src={PostImage} alt="Post" className="" />
      </div>
      {/* Number of Likes + Buttons */}
      <div>
        <div className="items-center text-[#8e8d8d font-outfit]">
          <div className="flex items-center py-2 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-[1.1rem] h-[1.1rem]">
                <img src={Like} alt="Like" className="" />
              </div>
              <div className="ml-[2px] w-[1.1rem] h-[1.1rem]">
                <img src={CommentIcon} alt="CommentIcon" className="" />
              </div>
            </div>
            <div className="w-[1.1rem] h-[1.1rem]">
              <img src={shareIcon} alt="ShareIcon" className="" />
            </div>
          </div>
          <p className="text-xs font-outfit">12,345 likes</p>
          <div className="flex text-xs font-outfit">
            <p>
              Joey Cambel Lorem ipsum dolor sit ametconsectetur. Vulputate
              blandit dolor scelerisque proin eu viverra. Semper tincidunt neque
              vulputate eget...
            </p>
          </div>
        </div>
      </div>
      {/* Comment Input */}
      <div className="flex items-center w-full p-3 pt-4">
        <div className="w-8 h-8 shrink-0">
          <img src={navImage} alt="add" className="" />
        </div>
        <div className="flex bg-[#1C1B19] font-outfit text-sm rounded-full items-center ml-2 w-full">
          <input
            type="text"
            placeholder="Add a comment..."
            className="outline-0 bg-[#1C1B19] p-1 pl-3 rounded-full w-full font-outfit"
          />
          <div className="mr-4">
            <img src={EmojiIcon} alt="Emoji" className="w-5 h-3" />
          </div>
          <div className="mr-4">
            <img src={CameraIcon} alt="Camera" className="w-5 h-3" />
          </div>
          <div className="mr-4">
            <img src={gifIcon} alt="giftIcon" className="w-5 h-3" />
          </div>
          <div className="mr-4">
            <img src={CommentIcon} alt="comments" className="w-5 h-3" />
          </div>
          <div className="mr-4">
            <img src={SendIcon} alt="SendIcon" className="w-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
