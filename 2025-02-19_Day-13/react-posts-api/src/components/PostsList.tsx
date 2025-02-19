import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { getPosts, PostType } from "../api_calls";

const PostsList = (props: {
  setPostDetails: React.Dispatch<React.SetStateAction<PostType>>;
}) => {
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
        {postsList.map((post) => (
          <PostItem post={post} key={post.id} onClick={props.setPostDetails} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
