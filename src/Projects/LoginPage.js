import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-red-200 p-20 h-screen w-screen ">
      <div className="h-full w-full flex justify-center ">
        <div className="h-full w-1/3 bg-white rounded-tl-2xl rounded-bl-2xl shadow-2xl ">
          <h1 className="text-4xl text-black font-black text-center mt-32">
            Login
          </h1>

          <div className="flex justify-center mt-12 mb-10 gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <circle
                cx="128"
                cy="128"
                r="96"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></circle>
              <path
                d="M168,88H152a23.9,23.9,0,0,0-24,24V224"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></path>
              <line
                x1="96"
                y1="144"
                x2="160"
                y2="144"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M128,128h88a88.1,88.1,0,1,1-25.8-62.2"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center items-center -mt-2 gap-3">
            <p>or use your account</p>
            <input
              type="text"
              className="bg-gray-200 p-3 rounded-md w-3/4"
              placeholder="Email"
            />
            <input
              type="pssword"
              className="bg-gray-200 p-3 rounded-md w-3/4 mb-5"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center mb-3 ">
            <a href="/">Forgot password</a>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-red-500 rounded-full text-basw px-16 py-2 w-max text-white text-semibold font-black hover:-translate-y-2 shadow-lg transition-all 0.2">
              Log IN
            </button>
          </div>
        </div>
        <div className="h-full w-1/3 bg-red-500 rounded-tr-2xl rounded-br-2xl flex flex-col justify-center items-center shadow-2xl">
          <h1 className="text-4xl text-white font-bold text-center">
            React Tailwind Login <br /> Form
          </h1>
          <p className="text-base text-white font-semibold text-center mt-5">
            This login form is created using pure <br /> HTML and CSS For social
            icons. <br /> FontAwesome is used.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
