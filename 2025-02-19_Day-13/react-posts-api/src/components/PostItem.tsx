import React from "react";
import { PostType } from "../api_calls";

const PostItem = ({ post }: { post: PostType }) => {
  return (
    <div className="list-group-item list-group-item-action" key={post.id}>
      <div className="d-flex w-100 justify-content-between">
        {/* sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit */}
        {post.title}
      </div>
    </div>
  );
};

export default PostItem;
