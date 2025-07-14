import React from 'react';
import SideBarIcon from "../assets/Header/sidebar icon.png";
import StarIcon from "../assets/Header/star.png";
import SearchIcon from "../assets/Header/Search.png";
import MoonIcon from "../assets/Header/sun.png";
import BellIcon from "../assets/Header/bell.png";
import ClockCounterClockwise from "../assets/Header/ClockCounterClockwise.png";

const Header = ({ 
  leftSidebarOpen, 
  rightSidebarOpen, 
  toggleLeftSidebar, 
  toggleRightSidebar 
}) => {
    const handleLogout = () => {
    // You can replace this with your actual logout logic
    console.log("Logging out...");
    localStorage.clear(); // Example: clearing user data
    window.location.href = "/login"; // Redirect to login page
  };
  return (
    <header className="h-14 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
      {/* Left side - toggle left sidebar button and breadcrumb */}
      <div className="flex items-center space-x-3">
        <button 
          onClick={toggleLeftSidebar}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
        >
          <img 
            src={SideBarIcon}
            alt="Toggle sidebar"
            className="w-4 h-4"
          />
        </button>
        <img 
          src={StarIcon} 
          alt="Star"
          className="w-4 h-4"
            onClick={handleLogout}
        />
        <div className="text-sm text-gray-600">
          Dashboards / <span className="font-semibold text-gray-800">Default</span>
        </div>
      </div>

      {/* Right side - search and icons */}
      <div className="flex items-center space-x-3">
        {/* Search bar with icons on both ends */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img 
              src={SearchIcon} 
              alt="Search"
              className="w-3.5 h-3.5"
            />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-50 pl-8 pr-7 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200"
          />
          <span className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-md text-gray-400">
            ⌘/
          </span>
        </div>

        {/* Action icons */}
        <div className="flex items-center space-x-1">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <img src={MoonIcon} alt="Dark mode" className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 relative transition-colors duration-200">
            <img src={BellIcon} alt="Notifications" className="w-4 h-4" />
          
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <img src={ClockCounterClockwise} alt="History" className="w-4 h-4" />
          </button>
          <button 
            onClick={toggleRightSidebar}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            <img 
              src={SideBarIcon}
              alt="Toggle right sidebar"
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;