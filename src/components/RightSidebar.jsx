import React from 'react';
import BugBeetle from "../assets/RightSideBarIcons/BugBeetle.png";
import Andi from "../assets/RightSideBarIcons/Andi.png";
import NewUser from "../assets/RightSideBarIcons/new_user.png";

// Sample image URLs (replace with your actual image paths if needed)
const profileImages = {
  natali: "https://randomuser.me/api/portraits/women/44.jpg",
  drew: "https://randomuser.me/api/portraits/men/32.jpg",
  andi: "https://randomuser.me/api/portraits/women/65.jpg",
  koray: "https://randomuser.me/api/portraits/men/75.jpg",
  kate: "https://randomuser.me/api/portraits/women/22.jpg",
  melody: "https://randomuser.me/api/portraits/women/33.jpg"
};

const RightSidebar = () => {
  // Notification data with imported icons
  const notifications = [
    {
      icon: BugBeetle,
      text: "You fixed a bug.",
      time: "Just now"
    },
    {
      icon: NewUser,
      text: "New user registered.",
      time: "59 minutes ago"
    },
    {
      icon: BugBeetle,
      text: "You fixed a bug.",
      time: "12 hours ago"
    },
    {
      icon: Andi,
      text: "Andi Lane subscribed to you.",
      time: "Today, 11:59 AM"
    }
  ];

  // Activities data with profile images
  const activities = [
    {
      text: "Changed the style.",
      time: "Just now",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      text: "Released a new version.",
      time: "59 minutes ago",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
      text: "Submitted a bug.",
      time: "12 hours ago",
      image: "https://randomuser.me/api/portraits/men/24.jpg"
    },
    {
      text: "Modified A data in Page X.",
      time: "Today, 11:59 AM",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      text: "Deleted a page in Project X.",
      time: "Feb 2, 2024",
      image: "https://randomuser.me/api/portraits/women/36.jpg"
    }
  ];

  // Contacts data with profile images
const contacts = [
    { name: 'Priya Sharma', image: profileImages.natali },
    { name: 'Rahul Patel', image: profileImages.drew },
    { name: 'Ananya Gupta', image: profileImages.andi },
    { name: 'Arjun Singh', image: profileImages.koray },
    { name: 'Divya Iyer', image: profileImages.kate },
    { name: 'Vikram Joshi', image: profileImages.melody }
];

  return (
    <aside className="w-80 bg-white border-l border-gray-200 px-6 py-2 text-sm overflow-y-auto h-screen sticky top-0">
      {/* Notifications Section */}
      <div className="mb-4">
        <h2 className="text-md font-semibold text-gray-800 mb-1">Notifications</h2>
        <ul className="space-y-3">
          {notifications.map((item, index) => (
            <li key={`notif-${index}`} className="flex items-start gap-3">
              <div className="flex-shrink-0" style={{
                width: '35px',
                height: '35px',
                borderRadius: '8px',
                padding: '8px',
                backgroundColor: '#EFF6FF'
              }}>
                <img 
                  src={item.icon} 
                  alt="" 
                  className="w-full h-full object-contain" 
                  style={{
                    borderRadius: '8px',
                    opacity: 1
                  }}
                />
              </div>
              <div>
                <p className="text-gray-800">{item.text}</p>
                <p className="text-xs text-gray-500 mt-1">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Activities Section */}
      <div className="mb-4">
        <h2 className="text-md font-semibold text-gray-800 mb-2">Activities</h2>
        <ul className="space-y-4">
          {activities.map((item, index) => (
            <li key={`activity-${index}`} className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt="Profile"
                  style={{
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div>
                <p className="text-gray-800">{item.text}</p>
                <p className="text-xs text-gray-500 mt-1">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacts Section */}
      <div>
        <h2 className="text-md font-semibold text-gray-800 mb-2">Contacts</h2>
        <ul className="space-y-3">
          {contacts.map((contact, index) => (
            <li key={`contact-${index}`} className="flex items-center gap-3">
              <div>
                <img
                  src={contact.image}
                  alt={contact.name}
                  style={{
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <span className="text-gray-700">{contact.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;