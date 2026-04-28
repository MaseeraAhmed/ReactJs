//! Conditional rendering
// import React from "react";

const UserDetails = ({ name, isOnline }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Status: {isOnline ? "🟢 Availbale for chat" : "🔴 Offline"}</p>
      {/* <button>{isOnline? "Send Message": "Check back later"}</button> */}
      {isOnline ? (
        <button>Send Message</button>
      ) : (
        <small>Check back later</small>
      )}
    </div>
  );
};

export default UserDetails;
