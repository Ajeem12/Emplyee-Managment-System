import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-500 rounded-xl p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-500 text-xl outline-none bg-transparent py-3 px-5 rounded-lg placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-500 text-xl outline-none mt-5 bg-transparent py-3 px-5 rounded-lg placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="border-none bg-emerald-500 text-xl mt-5 outline-none  py-3 px-5 rounded-md placeholder:text-white active:scale-95">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
