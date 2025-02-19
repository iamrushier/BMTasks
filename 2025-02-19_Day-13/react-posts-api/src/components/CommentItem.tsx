import React from "react";
import { CommentType, PostType } from "../api_calls";

const CommentItem = ({ comment }: { comment: CommentType }) => {
  return (
    <div
      className="card list-group-item border-primary m-1 p-2 shadow-sm"
      key={comment.id}
    >
      <p className="fw-bold mb-1">{comment.name}</p>
      <div className="text-muted">{comment.body}</div>
    </div>
  );
};

export default CommentItem;
