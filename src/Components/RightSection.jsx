import React from 'react';
import { ChevronLeft, ChevronRight, Heart, Eye, Edit, User, Brain } from 'lucide-react';
import Teeth from '../assets/Teeth.jpg';
import Muscles from '../assets/muscles.png';
import MedicalCheckup from '../assets/medical-checkup.png';
import EyeIcon from '../assets/eye.png';
import HeartIcon from '../assets/heart.png';
import Doctor from '../assets/doctor.png';
import Girl from '../assets/girl.png';

const RightSection = () => {
  const weekDays = [
    { day: 'Mon', date: '25', times: ['10:00', '11:00', '12:00'], activeSlots: [] },
    {
      day: 'Tues',
      date: '26',
      times: ['08:00', '09:00', '10:00'],
      highlight: false,
      activeSlots: [1]
    },
    { day: 'Wed', date: '27', times: ['12:00', '__', '13:00'], activeSlots: [] },
    {
      day: 'Thurs',
      date: '28',
      times: ['10:00', '11:30', '16:00'],
      activeSlots: [0]
    },
    { day: 'Fri', date: '29', times: ['—', '14:00', '15:00'], activeSlots: [] },
    {
      day: 'Sat',
      date: '30',
      times: ['12:00', '14:00', '15:00'],
      highlight: false,
      activeSlots: [0]
    },
    {
      day: 'Sun',
      date: '31',
      times: ['09:00', '10:00', '11:00'],
      activeSlots: [0]
    }
  ];

  const upcomingAppointments = [
    {
      title: 'Health checkup complete',
      time: '11:00 AM',
      type: 'checkup',
      image: MedicalCheckup,
      color: 'text-gray-500'
    },
    {
      title: 'Ophthalmologist',
      time: '14:00 PM',
      type: 'eye',
      image: EyeIcon,
      color: 'text-purple-600'
    },
    {
      title: 'Cardiologist',
      time: '12:00 AM',
      type: 'heart',
      image: HeartIcon,
      color: 'text-red-500'
    },
    {
      title: 'Neurologist',
      time: '16:00 PM',
      type: 'brain',
      image: Doctor,
      color: 'text-orange-500'
    }
  ];

  const getDayBackgroundStyle = (day) => {
    const hasActiveSlots = day.activeSlots && day.activeSlots.length > 0;
    return hasActiveSlots ? 'bg-gray-100 rounded-2xl p-1' : '';
  };

  return (
    <div className="flex-1 p-3 sm:p-4 lg:p-6 space-y-4 lg:space-y-6 bg-blue-50 min-h-screen lg:h-full">
      {/* User Profile Icons */}
      <div className="flex justify-end gap-2 mb-4">
         <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400 rounded-2xl flex items-center justify-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-400 rounded-full flex items-center justify-center overflow-hidden">
            <img src={Girl} alt='profile' className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
          <div className="text-white text-xl sm:text-2xl font-light">+</div>
        </div>
      </div>

      {/* Calendar  */}
      <div className="flex items-center justify-between mb-4 lg:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">October 2021</h2>
        <div className="flex items-center gap-2 sm:gap-4">
          <ChevronLeft className="text-indigo-600 cursor-pointer" size={20} />
          <ChevronRight className="text-indigo-600 cursor-pointer" size={20} />
        </div>
      </div>

      {/* Weekly Calendar */}
      <div>
        <div className="grid grid-cols-7 gap-1 sm:gap-2 lg:gap-3 mb-4 lg:mb-6">
          {weekDays.map((day, index) => (
            <div key={index} className="text-center">
              <div className={getDayBackgroundStyle(day)}>
                <div className="text-xs text-gray-500 font-medium mb-1">{day.day}</div>
                <div
                  className={`text-sm sm:text-base lg:text-lg font-bold mb-2 ${day.highlight ? 'bg-indigo-600 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mx-auto text-sm' : 'text-gray-900'
                    }`}
                >
                  {day.date}
                </div>
                <div className="space-y-1 sm:space-y-2 lg:space-y-3">
                  {day.times.map((time, timeIndex) => {
                    const isActiveSlot = day.activeSlots && day.activeSlots.includes(timeIndex);

                    return (
                      <div
                        key={timeIndex}
                        className={`text-xs rounded-lg text-center font-medium min-h-[20px] sm:min-h-[24px] flex items-center justify-center px-1 ${time === '—' || time === '' ? 'text-gray-300' :
                          isActiveSlot ? 'bg-indigo-600 text-white' :
                            'text-gray-700 bg-blue-50'
                          }`}
                      >
                        {time === '' ? '' : time}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Cards */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 lg:mb-6">
          <div className="bg-indigo-600 text-white p-3 sm:p-4 rounded-2xl flex-shrink-0 sm:w-48">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold">Dentist</span>
              <img
                src={Teeth}
                alt="Teeth"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
              />
            </div>
            <div className="text-sm font-medium mb-1">09:00-11:00</div>
            <div className="text-xs opacity-80">Dr. Cameron Williamson</div>
          </div>

          <div className="bg-blue-100 text-gray-800 p-3 sm:p-4 rounded-2xl flex-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold flex-1 pr-2">Physiotherapy Appointment</span>
              <img
                src={Muscles}
                alt="Muscles"
                className="w-5 h-5 sm:w-6 sm:h-6 transform scale-x-[-1] flex-shrink-0"
              />
            </div>
            <div className="text-sm font-medium mb-1">11:00-12:00</div>
            <div className="text-xs text-gray-600">Dr. Kevin Doyles</div>
          </div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 lg:mb-6">The Upcoming Schedule</h3>

        <div className="space-y-5 lg:space-y-7">
          <div>
            <div className="text-sm font-medium text-gray-500 mb-3 lg:mb-4">On Thursday</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {upcomingAppointments.slice(0, 2).map((appointment, index) => (
                <div key={index} className="bg-gray-50 p-4 sm:p-5 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-semibold text-gray-900 flex-1 pr-2">
                      {appointment.title}
                    </div>
                    <img
                      src={appointment.image}
                      alt={appointment.type}
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain flex-shrink-0"
                    />
                  </div>
                  <div className="text-xs text-gray-600 font-medium">{appointment.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-500 mb-3 lg:mb-4">On Saturday</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {upcomingAppointments.slice(2, 4).map((appointment, index) => (
                <div key={index} className="bg-gray-50 p-4 sm:p-5 lg:p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-2 lg:mb-3">
                    <div className="text-sm font-semibold text-gray-900 flex-1 pr-2">
                      {appointment.title}
                    </div>
                    <img
                      src={appointment.image}
                      alt={appointment.type}
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain flex-shrink-0"
                    />
                  </div>
                  <div className="text-xs text-gray-600 font-medium">{appointment.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;