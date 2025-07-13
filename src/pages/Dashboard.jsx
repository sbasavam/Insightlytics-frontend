import React, { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import MainDashboard from "../components/MainDashboard";

const Dashboard = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#F8F8F8]">
      <div className="flex flex-1 min-h-0">
        {/* Left Sidebar with transition */}
        <div className={`${leftSidebarOpen ? 'w-60' : 'w-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
          {leftSidebarOpen && <LeftSidebar />}
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header 
            leftSidebarOpen={leftSidebarOpen}
            rightSidebarOpen={rightSidebarOpen}
            toggleLeftSidebar={() => setLeftSidebarOpen(!leftSidebarOpen)}
            toggleRightSidebar={() => setRightSidebarOpen(!rightSidebarOpen)}
          />
          <div className="flex flex-1 min-h-0 overflow-hidden">
            <MainDashboard />
          </div>
        </div>
        
        {/* Right Sidebar with transition */}
        <div className={`${rightSidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
          {rightSidebarOpen && <RightSidebar />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;