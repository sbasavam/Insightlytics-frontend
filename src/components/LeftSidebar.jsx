import React from 'react';

const LeftSidebar = () => {
  return (
    <div className="w-60 bg-white border-r border-gray-200 p-6 text-sm overflow-y-auto flex-shrink-0">
      <h1 className="text-xl font-semibold mb-8 text-gray-800">ByeMind</h1>
      
      {/* Favorites Section */}
      <div className="mb-8">
        <p className="text-gray-400 uppercase text-xs mb-3 font-medium tracking-wider">Favorites</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <img src="/assets/home-icon.svg" alt="Home" className="w-4 h-4 text-gray-500" />
            <span>Overview</span>
          </li>
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <img src="/assets/chart-icon.svg" alt="Projects" className="w-4 h-4 text-gray-500" />
            <span>Projects</span>
          </li>
        </ul>
      </div>

      {/* Dashboards Section */}
      <div className="mb-8">
        <p className="text-gray-400 uppercase text-xs mb-3 font-medium tracking-wider">Dashboards</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 text-blue-600 font-medium cursor-pointer">
            <img src="/assets/chart-icon.svg" alt="Default" className="w-4 h-4 text-blue-600" />
            <span>Default</span>
          </li>
          <li className="flex items-center gap-3 text-gray-600 hover:text-blue-600 cursor-pointer">
            <img src="/assets/shopping-icon.svg" alt="eCommerce" className="w-4 h-4 text-gray-500" />
            <span>eCommerce</span>
          </li>
          <li className="flex items-center gap-3 text-gray-600 hover:text-blue-600 cursor-pointer">
            <img src="/assets/book-icon.svg" alt="Projects" className="w-4 h-4 text-gray-500" />
            <span>Projects</span>
          </li>
          <li className="flex items-center gap-3 text-gray-600 hover:text-blue-600 cursor-pointer">
            <img src="/assets/award-icon.svg" alt="Online Courses" className="w-4 h-4 text-gray-500" />
            <span>Online Courses</span>
          </li>
        </ul>
      </div>

      {/* Pages Section */}
      <div className="mb-8">
        <p className="text-gray-400 uppercase text-xs mb-3 font-medium tracking-wider">Pages</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <img src="/assets/user-icon.svg" alt="User Profile" className="w-4 h-4 text-gray-500" />
            <span>User Profile</span>
          </li>
          <li className="ml-9 text-gray-600 hover:text-blue-600 cursor-pointer">Overview</li>
          <li className="ml-9 text-gray-600 hover:text-blue-600 cursor-pointer">Projects</li>
          <li className="ml-9 text-gray-600 hover:text-blue-600 cursor-pointer">Campaigns</li>
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <img src="/assets/file-icon.svg" alt="Documents" className="w-4 h-4 text-gray-500" />
            <span>Documents</span>
          </li>
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <img src="/assets/users-icon.svg" alt="Followers" className="w-4 h-4 text-gray-500" />
            <span>Followers</span>
          </li>
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <img src="/assets/settings-icon.svg" alt="Account" className="w-4 h-4 text-gray-500" />
            <span>Account</span>
          </li>
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <img src="/assets/message-icon.svg" alt="Corporate" className="w-4 h-4 text-gray-500" />
            <span>Corporate</span>
          </li>
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <img src="/assets/message-icon.svg" alt="Blog" className="w-4 h-4 text-gray-500" />
            <span>Blog</span>
          </li>
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <img src="/assets/users-icon.svg" alt="Social" className="w-4 h-4 text-gray-500" />
            <span>Social</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;