import React from "react";

function Comment(props) {
  console.log(props.comments[0]);
  // return <div>{props.comments}</div>;
  return (
    <div>
      {props.comments.length > 0 && (
        <>
          <h3>Comments</h3>
          {props.comments.map((comment) => {
            return <p key={comment.id}>{comment.name}</p>;
          })}
        </>
      )}
    </div>
  );

  // </div>;
}

export default Comment;
