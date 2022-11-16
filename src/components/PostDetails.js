import React from "react";

function PostDetails(props) {
  //   console.log(props.postDetails[0].id);
  console.log(props.postDetails);
  //   console.log(props.postDetails[0].title);
  return (
    <div>
      <h2>MIU</h2>
      {/* <h4>Name: {props.postDetails == {} ? "" : props.postDetails[0].title}</h4> */}
      {/* <h5>Author: {props.postDetails[0].author}</h5> */}
    </div>
  );
}

export default PostDetails;
