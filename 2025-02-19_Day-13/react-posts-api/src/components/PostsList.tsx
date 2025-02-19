import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { getPosts, PostType } from "../api_calls";

const PostsList = () => {
  const [postsList, setPostsList] = useState<PostType[]>([]);
  useEffect(() => {
    getPosts().then((posts) => {
      setPostsList(posts);
    });
  });
  return (
    <div className="">
      <span>Available posts:</span>
      <div
        className="mt-2 list-group overflow-auto"
        style={{ height: "300px" }}
      >
        {postsList.slice(0, 10).map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
        {/* <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem /> */}
      </div>
    </div>
  );
};

export default PostsList;
