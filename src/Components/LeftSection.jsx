import React from 'react';
import { Search, Bell } from 'lucide-react';
import lungs from '../assets/Lungs.jpg';
import teeth from '../assets/Teeth.jpg';
import bone from '../assets/bone.jpg';
import Human from '../assets/Human.jpg';
import Heart from '../assets/heart.png';
import BrokenBone from '../assets/broken-bone.png';
import ActivityChart from './ActivityChart';

const LeftSection = () => {
    return (
        <div className="flex-1 p-3 sm:p-4 lg:p-6 space-y-4 lg:space-y-6 min-h-screen overflow-x-hidden">
        
           <div className="flex items-center justify-between mb-4 lg:mb-8">
                <div className="flex items-center gap-2 sm:gap-4 flex-1">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm w-full text-sm"
                        />
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                        <Bell className="text-gray-600" size={16} />
                    </div>
                </div>
            </div>

          
            <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Dashboard</h1>
                <div className="relative">
                    <select className="appearance-none bg-white border border-gray-200 rounded-lg px-3 lg:px-4 py-2 pr-6 lg:pr-8 text-xs sm:text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer shadow-sm">
                        <option value="this-week">This Week</option>
                        <option value="this-month">This Month</option>
                        <option value="last-week">Last Week</option>
                        <option value="last-month">Last Month</option>
                        <option value="this-year">This Year</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

          
            <div className="bg-white p-2 sm:p-4 lg:p-6 rounded-lg">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    {/* Human Body Section */}
                    <div className="flex-1 flex justify-center order-2 lg:order-1">
                        <div className="relative">
                            <div className="relative w-32 h-64 sm:w-40 sm:h-80 lg:w-48 lg:h-96">
                                <img
                                    src={Human}
                                    alt="Human Body"
                                    className="w-full h-full object-cover object-top rounded-3xl"
                                />
                            </div>

                            {/* Health indicators*/}
                            <div className="absolute top-12 sm:top-16 lg:top-20 -right-6 sm:-right-8 lg:-right-10 bg-blue-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-xs sm:text-sm flex items-center gap-1 sm:gap-2 shadow-lg transform rotate-1 sm:rotate-2">
                                <img src={Heart} alt='heart' className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="hidden sm:inline">Healthy Heart</span>
                                <span className="sm:hidden">Heart</span>
                            </div>

                            <div className="absolute bottom-12 sm:bottom-14 lg:bottom-16 -left-4 sm:-left-6 lg:-left-8 bg-cyan-400 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-xs sm:text-sm shadow-lg transform -rotate-1 sm:-rotate-2 flex items-center gap-1 sm:gap-2">
                                <img src={BrokenBone} alt='leg' className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="hidden sm:inline">Healthy Leg</span>
                                <span className="sm:hidden">Leg</span>
                            </div>
                        </div>
                    </div>

                  
                    <div className="flex-1 space-y-3 lg:space-y-4 w-full lg:ml-12 mt-4 lg:mt-10 order-1 lg:order-2">
                        {/* Lungs */}
                        <div className="bg-gray-50 rounded-xl p-3 sm:p-4 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                    <img
                                        src={lungs}
                                        alt="Lungs"
                                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg">Lungs</h3>
                                    <p className="text-xs sm:text-sm text-gray-500">Date: 26 Oct, 2021</p>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mt-2">
                                        <div className="bg-red-400 h-1.5 sm:h-2 rounded-full w-3/4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Teeth */}
                        <div className="bg-gray-50 rounded-xl p-3 sm:p-4 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                    <img
                                        src={teeth}
                                        alt="Teeth"
                                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg">Teeth</h3>
                                    <p className="text-xs sm:text-sm text-gray-500">Date: 26 Oct, 2021</p>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mt-2">
                                        <div className="bg-teal-400 h-1.5 sm:h-2 rounded-full w-2/3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bone */}
                        <div className="bg-gray-50 rounded-xl p-3 sm:p-4 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                    <img
                                        src={bone}
                                        alt="Bone"
                                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg">Bone</h3>
                                    <p className="text-xs sm:text-sm text-gray-500">Date: 25 Oct, 2021</p>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mt-2">
                                        <div className="bg-orange-400 h-1.5 sm:h-2 rounded-full w-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-4 lg:mt-6">
                            <a className="text-blue-600 text-xs sm:text-sm font-medium hover:text-blue-800 transition-colors flex items-center gap-2 px-3 sm:px-4 py-2">
                                Details
                                <span className="text-base sm:text-lg">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Activity */}
            <div className='bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-lg'>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 lg:mb-6 gap-2">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Activity</h2>
                    <p className="text-xs sm:text-sm text-gray-500">5 appointments this week</p>
                </div>

                <ActivityChart />
            </div>
        </div>
    );
};

export default LeftSection;