import React, { useState } from "react";
import {
  FiRefreshCw,
  FiPlus,
  FiSearch,
  FiDatabase,
  FiLogOut,
  FiPhoneCall,
  FiBook,
} from "react-icons/fi";
import { HiOutlineHome, HiOutlineCog } from "react-icons/hi";
import { AiOutlineCode, AiOutlineCloud } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const repositories = [
    { name: "design-system", visibility: "Public", language: "React", size: "7320 KB", updated: "Updated 1 day ago" },
    { name: "codeant-ci-app", visibility: "Private", language: "Javascript", size: "5871 KB", updated: "Updated 2 days ago" },
    { name: "analytics-dashboard", visibility: "Private", language: "Python", size: "4521 KB", updated: "Updated 5 days ago" },
    { name: "mobile-app", visibility: "Public", language: "Swift", size: "3096 KB", updated: "Updated 3 days ago" },
    { name: "e-commerce-platform", visibility: "Private", language: "Java", size: "6210 KB", updated: "Updated 6 days ago" },
    { name: "blog-website", visibility: "Public", language: "HTML/CSS", size: "1876 KB", updated: "Updated 4 days ago" },
    { name: "social-network", visibility: "Private", language: "PHP", size: "5432 KB", updated: "Updated 7 days ago" },
  ];

  return (
    <div className="h-screen flex flex-col md:flex-row relative">
      {/* Backdrop overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Header */}
      <header className="bg-white flex items-center justify-between px-4 py-2 fixed top-0 w-full z-50 shadow-md md:hidden">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-700 text-2xl focus:outline-none"
        >
          {isSidebarOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed md:static md:flex md:flex-col top-0 left-0 w-full md:w-56 bg-white border-r shadow-lg z-40 transform md:translate-y-0 transition-transform p-4 md:p-0 ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-left items-left md:flex-col p-2 md:p-6">
          <img src="/logo.png" alt="Logo" className="h-16 md:h-14 hidden md:block" />
          <div className="flex justify-between items-center mt-10 md:mt-0 text-gray-600 border p-2 rounded-md w-full md:w-auto">
            <span>Umang Goyal</span>
            <MdKeyboardArrowDown className="text-gray-500" />
          </div>
        </div>
        <nav className="mt-4 md:mt-0 md:space-y-2 flex-1 flex flex-col items-center">
          <button className="flex items-center px-4 py-2 text-blue-600 bg-blue-100 rounded-md font-medium w-full md:w-5/6">
            <HiOutlineHome className="mr-2" />
            Repositories
          </button>
          <button className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-md w-full md:w-5/6">
            <AiOutlineCode className="mr-2" />
            AI Code Review
          </button>
          <button className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-md w-full md:w-5/6">
            <AiOutlineCloud className="mr-2" />
            Cloud Security
          </button>
          <button className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-md w-full md:w-5/6">
            <FiBook className="mr-2" />
            How to Use
          </button>
          <button className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-md w-full md:w-5/6">
            <HiOutlineCog className="mr-2" />
            Settings
          </button>
        </nav>
        <div className="md:mb-6 flex flex-col items-center">
          <ul className="md:space-y-2 w-full md:w-5/6">
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-md">
              <FiPhoneCall className="mr-2" />
              Support
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-md">
              <FiLogOut className="mr-2" />
              Logout
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-4 md:p-6 rounded-lg overflow-auto pt-16">
        <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Repositories</h2>
            <p className="text-gray-600 text-sm mt-1">33 total repositories</p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button className="flex items-center px-4 py-2 border border-gray-300 hover:bg-gray-200 rounded-md text-gray-700 font-medium">
              <FiRefreshCw className="mr-2" />
              Refresh All
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
              <FiPlus className="mr-2" />
              Add Repository
            </button>
          </div>
        </header>

        {/* Search Bar */}
        <div className="mt-6 flex justify-start">
          <div className="relative w-full md:w-1/3 max-w-[400px] md:max-w-[300px]">
            <FiSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search Repositories"
              className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Repositories List */}
        <div className="mt-4">
          {repositories.map((repo, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border-b border-t last:border-b-0"
            >
              <div>
                <h3 className="text-gray-800 font-medium">
                  {repo.name} <span className="text-xs ml-2 px-2 py-1 rounded-full bg-blue-100 text-blue-600">{repo.visibility}</span>
                </h3>
                <div className="flex flex-wrap md:flex-nowrap items-center text-sm space-x-3 md:space-x-6 mt-1">
                  <span>{repo.language}</span>
                  <span className="text-blue-500 text-lg">•</span>
                  <span className="flex items-center">
                    <FiDatabase className="mr-1 text-gray-400" />
                    {repo.size}
                  </span>
                  <span>{repo.updated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
