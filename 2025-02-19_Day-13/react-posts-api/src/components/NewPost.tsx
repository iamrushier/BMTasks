import React, { useState } from "react";
import { addNewPost, PostType } from "../api_calls";

const NewPost = () => {
  const [newPost, setNewPost] = useState<PostType>({ title: "", body: "" });
  const postSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    addNewPost(newPost)
      .then((res) => alert(`New post added: ${JSON.stringify(res)}`))
      .catch((err: Error) => console.log(err.message))
      .finally(() => setNewPost({ title: "", body: "" }));
  };
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
            value={newPost.title}
            required
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Content:</label>
          <textarea
            required
            name="title"
            id="title"
            className="form-control"
            value={newPost.body}
            rows={3}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
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
