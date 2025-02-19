export type PostType = {
  userId?: number;
  id?: number;
  title: string;
  body: string;
};
export async function getPosts(): Promise<PostType[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostType[] = await response.json();
  return posts;
}
export async function getPostById(id: number): Promise<PostType> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post: PostType = await response.json();
  return post;
}
export async function addNewPost(newPost: PostType): Promise<PostType> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const post = await response.json();
  return post;
}
export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
export async function getCommentByPostId(
  postId: number | undefined
): Promise<CommentType[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  const comments = response.json();
  return comments;
}
