import React, { useState } from "react";
import { FaGithub, FaGitlab, FaBitbucket, FaWindows, FaKey } from "react-icons/fa";

function Signup() {
  const [activeTab, setActiveTab] = useState("SAAS");

  const signinOptions = {
    SAAS: [
      { text: "Sign in with Github", icon: <FaGithub /> },
      { text: "Sign in with Bitbucket", icon: <FaBitbucket /> },
      { text: "Sign in with Azure Devops", icon: <FaWindows /> },
      { text: "Sign in with GitLab", icon: <FaGitlab /> },
    ],
    "Self Hosted": [
      { text: "Sign in with GitLab", icon: <FaGitlab /> },
      { text: "Sign in with SSO", icon: <FaKey /> },
    ],
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Sidebar (Hidden on mobile) */}
      <div className="hidden md:flex bg-white relative items-center justify-center">
        {/* Center Image */}
        <img src="/center.png" alt="Center" className="max-w-lg" />
        {/* Bottom Left Image */}
        <img
          src="/left.png"
          alt="Bottom Left"
          className="absolute bottom-4 left-4 max-w-[13rem]"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center items-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-[90%] max-w-xxl">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="Logo" className="h-14" />
          </div>
          {/* Title */}
          <h1 className="text-center text-xl font-bold mb-6">
            Welcome to CodeAnt AI
          </h1>
          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setActiveTab("SAAS")}
              className={`w-1/2 py-2 rounded-lg  rounded-r-none font-bold ${
                activeTab === "SAAS"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              SAAS
            </button>
            <button
              onClick={() => setActiveTab("Self Hosted")}
              className={`w-1/2 py-2 rounded-lg rounded-l-none font-bold ${
                activeTab === "Self Hosted"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Self Hosted
            </button>
          </div>
          {/* Dynamic Content */}
          <div className="flex flex-col items-center space-y-3 w-full md:w-[70%] mx-auto">
            {signinOptions[activeTab].map((option, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 font-bold"
              >
                <span className="text-lg mx-2">{option.icon}</span>
                <span className="text-gray-600">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Footer Text */}
        <p className="text-sm mt-4">
          By signing in you agree to the{" "}
          <span className="font-bold text-black cursor-pointer">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
