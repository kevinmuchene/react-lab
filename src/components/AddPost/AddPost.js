import React, { useState } from "react";

import "./addPost.css";

function AddPost(props) {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    content: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    props.addPost(formData);
  }

  return (
    <div>
      <h2>ADD POST</h2>
      <form onSubmit={handleSubmit}>
        <div className="div-form">
          <label>Title: </label>
          <input
            type="text"
            value={formData.title}
            onChange={(event) => {
              formData.title = event.target.value;
              setFormData({ ...formData });
            }}
          />
        </div>

        <div className="div-form">
          <label>Content: </label>
          <input
            type="text"
            value={formData.content}
            onChange={(event) => {
              formData.content = event.target.value;
              setFormData({ ...formData });
            }}
          />
        </div>

        <div className="div-form">
          <label>Author: </label>
          <input
            type="text"
            value={formData.author}
            onChange={(event) => {
              formData.author = event.target.value;
              setFormData({ ...formData });
            }}
          />
        </div>

        <div className="div-form">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
