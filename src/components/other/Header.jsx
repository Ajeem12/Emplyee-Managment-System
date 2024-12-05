import React, { useState } from "react";

const Header = ({ data }) => {
  // const [username, setUsername] = useState("");
  // if (!data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(data.firstName);
  // }
  console.log(data);
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold"> 👋</span>
      </h1>
      <button className="bg-red-500 text-lg font-medium px-5 py-2 text-white rounded-md active:scale-95">
        Log out
      </button>
    </div>
  );
};

export default Header;
