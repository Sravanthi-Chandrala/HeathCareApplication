import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';


const History = () => <div className="p-6"><h1 className="text-2xl font-bold">#History Page</h1></div>;
const Calendar = () => <div className="p-6"><h1 className="text-2xl font-bold">#Calendar Page</h1></div>;
const Appointments = () => <div className="p-6"><h1 className="text-2xl font-bold">#Appointments Page</h1></div>;
const Statistics = () => <div className="p-6"><h1 className="text-2xl font-bold">#Statistics Page</h1></div>;
const Chat = () => <div className="p-6"><h1 className="text-2xl font-bold">#Chat Page</h1></div>;
const Support = () => <div className="p-6"><h1 className="text-2xl font-bold">#Support Page</h1></div>;
const Settings = () => <div className="p-6"><h1 className="text-2xl font-bold">#Settings Page</h1></div>;

function App() {
  return (
    <Router>
      <div className="flex px-1 min-h-screen">
        <Sidebar />
        
        <main className="flex-1 bg-white ml-2 rounded-r-2xl">
          <Routes>
            {/* Default route redirects to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Dashboard route shows MainContent */}
            <Route path="/dashboard" element={<MainContent />} />
            
            {/* Other routes with placeholder components */}
            <Route path="/history" element={<History />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;