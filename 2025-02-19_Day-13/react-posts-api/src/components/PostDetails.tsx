import { useState } from "react";
import { getPostById, PostType } from "../api_calls";

const PostDetails = (props: {
  postDetails: PostType;
  setPostDetails: React.Dispatch<React.SetStateAction<PostType>>;
}) => {
  const [postId, setPostId] = useState("");
  const renderDetails = (): void => {
    getPostById(Number(postId))
      .then((details) => props.setPostDetails(details))
      .then(() => setPostId(""));
  };
  return (
    <div className="p-1">
      <div className="input-group">
        <input
          type="number"
          className="form-control"
          placeholder="Enter ID"
          value={postId}
          min={0}
          onChange={(e) => setPostId(e.target.value)}
        />
        <button className="btn btn-outline-secondary" onClick={renderDetails}>
          Search
        </button>
      </div>

      <div className="post-details card p-3 mt-3 rounded-3">
        {!props.postDetails.id && <div>No posts here..</div>}
        {props.postDetails.id && (
          <div>
            <span className="d-flex justify-content-between">
              <p>UserID: {props.postDetails.userId}</p>
              <p>PostID: {props.postDetails.id}</p>
            </span>
            <h3>{props.postDetails.title}</h3>
            <h5>{props.postDetails.body}</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetails;
