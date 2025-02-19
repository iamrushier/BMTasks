import React from "react";

const postSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
  console.log(e.target);
};
const NewPost = () => {
  return (
    <div className="p-3 rounded-2" style={{ background: "#bbf0ff" }}>
      <form>
        <h4>Add post</h4>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Content:</label>
          <textarea
            required
            name="title"
            id="title"
            className="form-control"
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-2 ms-auto float-end"
          onClick={postSubmit}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
