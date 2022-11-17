import axios from "axios";
import React, { useEffect, useState } from "react";
import AddPost from "../components/AddPost/AddPost";
import PostDetails from "../components/PostDetails/PostDetails";
import Posts from "../components/Posts/Posts";

function Dashboard() {
  const [title, setTitle] = useState("");

  const [postData, setPostData] = useState([]);

  const [postDetails, setPostDetails] = useState("");

  const [postId, setPostId] = useState(0);

  const [trackDeleteBtn, setTrackDeleteBtn] = useState(false);

  const [newPostFormData, setNewPostFormData] = useState({});

  useEffect(() => {
    function fetchData() {
      axios
        .get("http://localhost:8080/api/v1/posts")
        .then((response) => setPostData(response.data))
        .catch(new Error());
    }
    fetchData();
  }, [trackDeleteBtn]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const copy = [...postData];

    copy[0].title = title === "" ? "Happiness" : title;

    setPostData(copy);
    setTitle("");
  };

  const fetchPostIdWhenClicked = (id) => {
    let details = postData.filter((post) => post.id === id);
    setPostId(id);
    setPostDetails(details);
  };

  function deletePostById() {
    axios.delete(`http://localhost:8080/api/v1/posts/${postId}`).then(() => {
      setTrackDeleteBtn(!trackDeleteBtn);
      setPostDetails([]);
    });
  }

  function addPost(post) {
    console.log(post);
    // axios.post(`localhost:8080/api/v1/users/${id}/posts`)
    axios
      .post(`http://localhost:8080/api/v1/users/1/posts`, post)
      .then(() => setTrackDeleteBtn(!trackDeleteBtn));
  }

  return (
    <div>
      <Posts data={postData} fetchPostIdWhenClicked={fetchPostIdWhenClicked} />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button>Change Name</button>
      </form>

      <div>
        <PostDetails
          postDetails={postDetails}
          deletePostById={deletePostById}
        />
      </div>

      <div>
        {/* <AddPost setNewPostFormData={setNewPostFormData} addPost={addPost} /> */}
        <AddPost addPost={addPost} />
      </div>
    </div>
  );
}

export default Dashboard;
