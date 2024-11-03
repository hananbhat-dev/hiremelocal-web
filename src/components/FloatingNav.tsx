import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Bell, Briefcase, UserCircle } from 'lucide-react';

export default function FloatingNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [notifications] = React.useState(3);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'search', icon: Search, label: 'Search', path: '/services' },
    { id: 'jobs', icon: Briefcase, label: 'Jobs', path: '/jobs' },
    {
      id: 'notifications',
      icon: Bell,
      label: 'Alerts',
      badge: notifications,
      path: '/messages',
    },
    { id: 'profile', icon: UserCircle, label: 'Profile', path: '/profile' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <nav className="floating-nav shadow-lg">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavClick(item.path)}
          className={`floating-nav-item ${
            location.pathname === item.path ? 'active' : ''
          }`}
        >
          <div className="relative">
            <item.icon className="h-6 w-6" />
            {item.badge && (
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {item.badge}
              </span>
            )}
          </div>
          <span className="text-xs mt-1">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}