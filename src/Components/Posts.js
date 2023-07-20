import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="w-screen sm:w-full">
      <div className="my-6 max-w-[40rem] sm:max-w-[40rem] mx-auto">
        <Post />

        <div className="mt-4">
          <Post />
        </div>
        <div className="mt-4">
          <Post />
        </div>
        <div className="mt-4">
          <Post />
        </div>
        <div className="mt-4">
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Posts;
