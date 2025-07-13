import React from 'react';

const RightSidebar = () => {
  const notifications = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      text: "You fixed a bug.",
      time: "Just now"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      text: "New user registered.",
      time: "59 minutes ago"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      text: "You fixed a bug.",
      time: "12 hours ago"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      text: "Andi Lane subscribed to you.",
      time: "Today, 11:59 AM"
    }
  ];

  const activities = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      text: "Changed the style.",
      time: "Just now"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      text: "Released a new version.",
      time: "59 minutes ago"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      text: "Submitted a bug.",
      time: "12 hours ago"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      text: "Modified A data in Page X.",
      time: "Today, 11:59 AM"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      text: "Deleted a page in Project X.",
      time: "Feb 2, 2024"
    }
  ];

  const contacts = ['Natali Craig', 'Drew Cano', 'Andi Lane', 'Koray Okumus', 'Kate Morrison', 'Melady Macy'];

  return (
    <aside className="w-80 bg-white border-l border-gray-200 p-6 text-sm overflow-y-auto">
      {/* Notifications Section */}
      <div className="mb-8">
        <h2 className="text-md font-semibold text-gray-800 mb-4">Notifications</h2>
        <ul className="space-y-4">
          {notifications.map((item, index) => (
            <li key={`notif-${index}`} className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-800">{item.text}</p>
                <p className="text-xs text-gray-400">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Activities Section */}
      <div className="mb-8">
        <h2 className="text-md font-semibold text-gray-800 mb-4">Activities</h2>
        <ul className="space-y-4">
          {activities.map((item, index) => (
            <li key={`activity-${index}`} className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mr-3 mt-0.5">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-800">{item.text}</p>
                <p className="text-xs text-gray-400">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacts Section */}
      <div>
        <h2 className="text-md font-semibold text-gray-800 mb-4">Contacts</h2>
        <ul className="space-y-3">
          {contacts.map((name, index) => (
            <li key={`contact-${index}`} className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600 font-medium mr-3">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-gray-700">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;