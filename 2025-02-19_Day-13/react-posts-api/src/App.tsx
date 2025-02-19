import "bootstrap/dist/css/bootstrap.min.css";
import PostsList from "./components/PostsList";
import NewPost from "./components/NewPost";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <div className="container p-3">
      <h1 className="text-center">Posts</h1>
      <hr />
      <div className="d-flex row h-100">
        <div className="left-container card pt-2 pb-2 col-sm-7">
          <NewPost />
          <hr />
          <PostsList />
        </div>
        <div className="right-container card pt-2 pb-2 col-sm-5">
          <PostDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
