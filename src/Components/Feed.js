import React from 'react';
import LeftSiderbar from "./LeftSiderbar"
import Stories from "./Stories"
import CreatePost from "./CreatePost"
import Posts from './Posts';
import RightSidebar from './RightSidebar';

const Feed = () => {
    return (
        <div className="flex mx-auto h-full bg-zinc-900 ">
      {/* LeftSidebar */}
      <LeftSiderbar />
      <div className="mx-auto">
        {/* Stories */}
        <Stories/>
        {/* CreatePost */}
       <CreatePost/>
        {/* Posts */}
        <Posts />
      </div>
        {/* RightSidebar */}
        <RightSidebar />
        </div>
    )
}

export default Feed