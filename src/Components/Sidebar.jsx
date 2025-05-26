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
    <div className="h-screen bg-gray-50 border-r border-gray-200 rounded-l-2xl sticky top-0 w-16 md:w-20 lg:w-64 transition-all duration-300 flex flex-col">
      {/* Logo/Header */}
      <div className="p-3 lg:p-6 flex-shrink-0">
        <h1 className="text-xl font-semibold hidden lg:block">
          <span className="text-cyan-400">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
        <div className="lg:hidden flex justify-center">
          <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="px-2 lg:px-4 flex-1 overflow-y-auto">
        {/* General Links */}
        <div className="mb-6 lg:mb-8">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 px-3 hidden lg:block">
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
                  } lg:justify-start justify-center`}
                  title={link.label} 
                >
                  <link.icon 
                    size={18} 
                    className={`${
                      isActive(link.path)
                        ? 'text-cyan-400'
                        : 'text-gray-400 group-hover:text-gray-600'
                    } flex-shrink-0`}
                  />
                  <span className="text-sm font-medium hidden lg:block">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Tools Links */}
        <div className="mb-6 lg:mb-8">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 px-3 hidden lg:block">
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
                  } lg:justify-start justify-center`}
                  title={link.label} 
                >
                  <link.icon 
                    size={18} 
                    className={`${
                      isActive(link.path)
                        ? 'text-cyan-400'
                        : 'text-gray-400 group-hover:text-gray-600'
                    } flex-shrink-0`}
                  />
                  <span className="text-sm font-medium hidden lg:block">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Settings Link - Fixed at bottom */}
      <div className="p-2 lg:p-4 flex-shrink-0">
        <Link
          to="/settings"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group w-full ${
            isActive('/settings')
              ? 'text-gray-900 bg-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-white'
          } lg:justify-start justify-center`}
          title="Settings" 
        >
          <Settings 
            size={18} 
            className={`${
              isActive('/settings')
                ? 'text-cyan-400'
                : 'text-gray-400 group-hover:text-gray-600'
            } flex-shrink-0`}
          />
          <span className="text-sm font-medium hidden lg:block">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;