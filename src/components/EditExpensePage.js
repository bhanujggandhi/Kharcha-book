import React from "react";

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      This is my Edit expense page
      <p>You're at id of {props.match.params.id}</p>
    </div>
  );
};

export default EditExpensePage;
