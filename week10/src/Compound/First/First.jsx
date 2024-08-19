import React from "react";

export default function First({
  tryCount,
  user_num,
  handleChange,
  handleKeyDown,
}) {
  return (
    <>
      <p>{tryCount}번째 시도</p>
      <input
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "none",
          borderBottom: "2px solid #F320F6",
          outline: "none",
          width: "100px",
        }}
        type="number"
        min="1"
        max="100"
        value={user_num}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}
