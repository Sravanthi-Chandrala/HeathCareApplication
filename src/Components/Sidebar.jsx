import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ArrowUpDown,
  Calendar,
  User,
  TrendingUp,
  MessageSquare,
  Phone,
  Settings
} from 'lucide-react';

const generalLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: ArrowUpDown, label: 'History', path: '/history' },
  { icon: Calendar, label: 'Calendar', path: '/calendar' },
  { icon: User, label: 'Appointments', path: '/appointments' },
  { icon: TrendingUp, label: 'Statistics', path: '/statistics' }
];

const toolsLinks = [
  { icon: MessageSquare, label: 'Chat', path: '/chat' },
  { icon: Phone, label: 'Support', path: '/support' }
];

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen bg-gray-50 w-64 border-r border-gray-200 rounded-l-2xl sticky top-0">
      <div className="p-6">
        <h1 className="text-xl font-semibold">
          <span className="text-cyan-400">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
      </div>
      
      <nav className="px-4">
        {/* General Links */}
        <div className="mb-8">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 px-3">
            General
          </h3>
          <ul className="space-y-1">
            {generalLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                    isActive(link.path)
                      ? 'text-gray-900 bg-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  <link.icon 
                    size={18} 
                    className={`${
                      isActive(link.path)
                        ? 'text-cyan-400'
                        : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                  />
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Tools Links */}
        <div className="mb-8">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 px-3">
            Tools
          </h3>
          <ul className="space-y-1">
            {toolsLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                    isActive(link.path)
                      ? 'text-gray-900 bg-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  <link.icon 
                    size={18} 
                    className={`${
                      isActive(link.path)
                        ? 'text-cyan-400'
                        : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                  />
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Settings Link */}
        <div className="absolute bottom-6 left-4 right-4">
          <Link
            to="/settings"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group w-full ${
              isActive('/settings')
                ? 'text-gray-900 bg-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white'
            }`}
          >
            <Settings 
              size={18} 
              className={`${
                isActive('/settings')
                  ? 'text-cyan-400'
                  : 'text-gray-400 group-hover:text-gray-600'
              }`}
            />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;