import React from "react";
import PostItem from "./PostItem";

const PostsList = () => {
  return (
    <div className="">
      <span>Available posts:</span>
      <div
        className="mt-2 list-group overflow-auto"
        style={{ height: "300px" }}
      >
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
};

export default PostsList;
