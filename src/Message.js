import React from "react";

function showMessage() {
  alert("I am Clicked");
}
const Message = () => {
  return (
    <div>
      <button type="button" onClick={showMessage}>
        Click Me
      </button>
    </div>
  );
};

export default Message;
