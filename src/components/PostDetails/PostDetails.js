import React from "react";
import Comment from "../Comments/Comment";

function PostDetails(props) {
  console.log(props.postDetails);
  return (
    <div>
      {props.postDetails.length > 0 && (
        <>
          <h1>{props.postDetails[0].title}</h1>
          <h3>{props.postDetails[0].author}</h3>
          <p>
            This is the content in the post: by {props.postDetails[0].content}
          </p>

          <div>
            <Comment comments={props.postDetails[0].comments} />
          </div>

          <div>
            <button>Edit</button>
            <button onClick={() => props.deletePostById()}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(PostDetails);
