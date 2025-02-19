import React from "react";

const PostDetails = () => {
  return (
    <div className="p-1">
      <div className="input-group">
        <input
          type="number"
          className="form-control"
          placeholder="Enter ID"
          min={0}
        />
        <button className="btn btn-outline-secondary">Search</button>
      </div>
      <div className="post-details card p-3 mt-3 rounded-3">
        <span className="d-flex justify-content-between">
          <p>UserID:</p>
          <p>PostID:</p>
        </span>
        <h3>Title</h3>
        <h5>Description</h5>
      </div>
    </div>
  );
};

export default PostDetails;
