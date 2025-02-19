import React from "react";
import { PostType } from "../api_calls";

const PostItem = ({
  post,
  onClick,
}: {
  post: PostType;
  onClick: React.Dispatch<React.SetStateAction<PostType>>;
}) => {
  return (
    <div
      className="list-group-item list-group-item-action"
      key={post.id}
      onClick={() => onClick(post)}
    >
      <div className="d-flex w-100 justify-content-between">{post.title}</div>
    </div>
  );
};

export default PostItem;
