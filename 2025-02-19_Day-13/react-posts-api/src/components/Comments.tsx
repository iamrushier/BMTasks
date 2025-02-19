import { useEffect, useState } from "react";
import { CommentType, getCommentByPostId } from "../api_calls";
import CommentItem from "./CommentItem";

const Comments = (props: { postId: number | undefined }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  useEffect(() => {
    getCommentByPostId(props.postId).then((commentsData) => {
      setComments(commentsData);
    });
  });
  return (
    comments[0] && (
      <div className="p-2 overflow-auto" style={{ maxHeight: "250px" }}>
        <p className="m-1">Comments:</p>
        {comments.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
      </div>
    )
  );
};

export default Comments;
