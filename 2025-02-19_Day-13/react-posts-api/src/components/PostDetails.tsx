import { useState } from "react";
import { getPostById, PostType } from "../api_calls";

const PostDetails = () => {
  const [postId, setPostId] = useState("");
  const [postDetails, setPostDetails] = useState<PostType>({
    title: "",
    body: "",
  });
  const renderDetails = (): void => {
    getPostById(Number(postId))
      .then((details) => setPostDetails(details))
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
        {!postDetails.id && <div>No posts here..</div>}
        {postDetails.id && (
          <div>
            <span className="d-flex justify-content-between">
              <p>UserID: {postDetails.userId}</p>
              <p>PostID: {postDetails.id}</p>
            </span>
            <h3>{postDetails.title}</h3>
            <h5>{postDetails.body}</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetails;
