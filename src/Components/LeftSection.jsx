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
        <div className="flex-1 p-6 space-y-6 min-h-screen overflow-x-hidden">
        
           <div className="flex items-center justify-between mb-8">
    <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm w-full"
            />
        </div>
        <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
            <Bell className="text-gray-600" size={18} />
        </div>
    </div>
</div>

          
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <div className="relative">
                    <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer shadow-sm">
                        <option value="this-week">This Week</option>
                        <option value="this-month">This Month</option>
                        <option value="last-week">Last Week</option>
                        <option value="last-month">Last Month</option>
                        <option value="this-year">This Year</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

          
            <div className="bg-white p-2">
                <div className="flex items-center justify-between">
                    <div className="flex-1 flex justify-center">
                        <div className="relative">
                           
                            <div className=" relative w-48 h-96">
                                <img
                                    src={Human}
                                    alt="Human Body"
                                    className="w-full h-full object-cover object-top rounded-3xl"
                                />
                            </div>

                        
                            <div className="absolute top-20 -right-10 bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg transform rotate-2">
                                <img src={Heart} alt='heart' className="w-4 h-4" />
                                Healthy Heart
                            </div>

                            <div className="absolute bottom-16 -left-8 bg-cyan-400 text-white px-4 py-2 rounded-full text-sm shadow-lg transform -rotate-2 flex items-center gap-2">
                                <img src={BrokenBone} alt='leg' className="w-4 h-4" /> Healthy Leg
                            </div>
                        </div>
                    </div>

                  
                    <div className="flex-1 space-y-4 ml-12 mt-10">
                        {/* Lungs */}
                        <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img
                                        src={lungs}
                                        alt="Lungs"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 text-lg">Lungs</h3>
                                    <p className="text-sm text-gray-500">Date: 26 Oct, 2021</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                        <div className="bg-red-400 h-2 rounded-full w-3/4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Teeth */}
                        <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img
                                        src={teeth}
                                        alt="Teeth"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 text-lg">Teeth</h3>
                                    <p className="text-sm text-gray-500">Date: 26 Oct, 2021</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                        <div className="bg-teal-400 h-2 rounded-full w-2/3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bone */}
                        <div className="bg-gray-50 rounded-2xl p-4 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img
                                        src={bone}
                                        alt="Bone"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 text-lg">Bone</h3>
                                    <p className="text-sm text-gray-500">Date: 25 Oct, 2021</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                        <div className="bg-orange-400 h-2 rounded-full w-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <a className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors flex items-center gap-2 px-4 py-2">
                                Details
                                <span className="text-lg">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Activity */}
            <div className='bg-gray-50 p-5 '>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Activity</h2>
                    <p className="text-sm text-gray-500">5 appointments this week</p>
                </div>

              
                <ActivityChart />
            </div>
        </div>
    );
};

export default LeftSection;