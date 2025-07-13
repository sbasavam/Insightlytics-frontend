import React from 'react';
import Account from "../assets/LeftSideBarIcons/account.png";
import Arrow from "../assets/LeftSideBarIcons/ArrowLineRight.png"; 
import Blog from "../assets/LeftSideBarIcons/blog.png";
import ByeWind from "../assets/LeftSideBarIcons/bye_wind.png";
import Corporate from "../assets/LeftSideBarIcons/corporate.png";
import Default from "../assets/LeftSideBarIcons/default.png";
import Documents from "../assets/LeftSideBarIcons/e-commerce.png";
import IdentificationBadge from "../assets/LeftSideBarIcons/IdentificationBadge.png";
import OnlineCourse from "../assets/LeftSideBarIcons/online_courses.png";
import Projects from "../assets/LeftSideBarIcons/projects.png"; 
import Social from "../assets/LeftSideBarIcons/social.png";

const LeftSidebar = () => {
  // Common styles
  const sectionHeaderStyle = "text-gray-500 uppercase text-xs font-medium  mb-2";
  const listItemStyle = "flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer p-1 rounded hover:bg-gray-50";
  const subListItemStyle = "text-gray-600 hover:text-blue-600 cursor-pointer pl-9 pr-2 py-1 rounded hover:bg-gray-50";
  const dotStyle = "w-2 h-2 rounded-full bg-gray-300 flex-shrink-0";

  return (
    <div className="w-64 bg-white border-r border-gray-400 px-6 py-2 text-sm overflow-y-auto flex-shrink-0 h-screen sticky">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-4">
        <img src={ByeWind} alt="ByeMind" className="w-6 h-6" />
        <h1 className="text-lg font-semibold text-gray-800">ByeMind</h1>
      </div>
      
      {/* Favorites Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <p className={sectionHeaderStyle}>Favorites</p>
          <p className={sectionHeaderStyle}>Recently</p>
        </div>
        <ul className="space-y-1">
          <li className={listItemStyle}>
            <div className={dotStyle}></div>
            <img src={IdentificationBadge} alt="Overview" className="w-4 h-4" />
            <span>Overview</span>
          </li>
          <li className={listItemStyle}>
            <div className={dotStyle}></div>
            <img src={Projects} alt="Projects" className="w-4 h-4" />
            <span>Projects</span>
          </li>
        </ul>
      </div>

      {/* Dashboards Section */}
      <div className="mb-2">
        <p className={sectionHeaderStyle}>Dashboards</p>
        <ul className="space-y-1">
          <li className={`${listItemStyle} text-blue-600 font-medium bg-blue-50`}>
            <img src={Arrow} alt="Arrow" className="w-4 h-4" />
            <img src={Default} alt="Default" className="w-4 h-4" />
            <span>Default</span>
          </li>
          <li className={listItemStyle}>
            <img src={Arrow} alt="Arrow" className="w-4 h-4" />
            <img src={Documents} alt="eCommerce" className="w-4 h-4" />
            <span>eCommerce</span>
          </li>
          <li className={listItemStyle}>
            <img src={Arrow} alt="Arrow" className="w-4 h-4" />
            <img src={Projects} alt="Projects" className="w-4 h-4" />
            <span>Projects</span>
          </li>
          <li className={listItemStyle}>
            <img src={Arrow} alt="Arrow" className="w-4 h-4" />
            <img src={OnlineCourse} alt="Online Courses" className="w-4 h-4" />
            <span>Online Courses</span>
          </li>
        </ul>
      </div>

      {/* Pages Section */}
      <div className="mb-8">
        <p className={sectionHeaderStyle}>Pages</p>
        <ul className="space-y-1">
          {/* User Profile with nested items */}
          <li className="flex flex-col">
            <div className={listItemStyle}>
              <img src={Arrow} alt="Arrow" className="w-4 h-4" />
              <img src={IdentificationBadge} alt="User Profile" className="w-4 h-4" />
              <span>User Profile</span>
            </div>
            <ul className="ml-4">
              <li className={subListItemStyle}>Overview</li>
              <li className={subListItemStyle}>Projects</li>
              <li className={subListItemStyle}>Campaigns</li>
              <li className={subListItemStyle}>Documents</li>
              <li className={subListItemStyle}>Followers</li>
            </ul>
          </li>

          {/* Other Pages items */}
          <li className={listItemStyle}>
            <img src={Arrow} alt="Arrow" className="w-4 h-4" />
            <img src={Account} alt="Account" className="w-4 h-4" />
            <span>Account</span>
          </li>
          <li className={listItemStyle}>
            <img src={Arrow} alt="Arrow" className="w-4 h-4" />
            <img src={Corporate} alt="Corporate" className="w-4 h-4" />
            <span>Corporate</span>
          </li>
          <li className={listItemStyle}>
            <img src={Arrow} alt="Arrow" className="w-4 h-4" />
            <img src={Blog} alt="Blog" className="w-4 h-4" />
            <span>Blog</span>
          </li>
          <li className={listItemStyle}>
            <img src={Arrow} alt="Arrow" className="w-4 h-4" />
            <img src={Social} alt="Social" className="w-4 h-4" />
            <span>Social</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;