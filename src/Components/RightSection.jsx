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
    <div className="flex-1 p-6 space-y-6 bg-blue-50 h-full">
      {/* User Profile Icons */}
      <div className="flex justify-end gap-2 mb-4">
         <div className="w-12 h-12 bg-cyan-400 rounded-2xl flex items-center justify-center">
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
          <img src={Girl} alt='profile'/>
          </div>
        </div>
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
          <div className="text-white text-2xl font-light">+</div>
        </div>
      </div>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">October 2021</h2>
        <div className="flex items-center gap-4">
          <ChevronLeft className="text-indigo-600 cursor-pointer" size={24} />
          <ChevronRight className="text-indigo-600 cursor-pointer" size={24} />
        </div>
      </div>

      {/* Weekly Calendar */}
      <div>
        <div className="grid grid-cols-7 gap-3 mb-6">
          {weekDays.map((day, index) => (
            <div key={index} className="text-center">
              <div className={getDayBackgroundStyle(day)}>
                <div className="text-xs text-gray-500 font-medium">{day.day}</div>
                <div
                  className={`text-lg font-bold ${day.highlight ? 'bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto' : 'text-gray-900'
                    }`}
                >
                  {day.date}
                </div>
                <div className="space-y-3">
                  {day.times.map((time, timeIndex) => {
                    const isActiveSlot = day.activeSlots && day.activeSlots.includes(timeIndex);

                    return (
                      <div
                        key={timeIndex}
                        className={`text-xs rounded-lg text-center font-medium min-h-[24px] flex items-center justify-center ${time === '—' || time === '' ? 'text-gray-300' :
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
        <div className="flex gap-4 mb-6">
          <div className="bg-indigo-600 text-white p-4 rounded-2xl flex-shrink-0 w-48">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold">Dentist</span>

              <img
                src={Teeth}
                alt="Teeth"
                className="w-8 h-8 rounded-full object-cover ml-[60px]"
              />

            </div>
            <div className="text-sm font-medium mb-1">09:00-11:00</div>
            <div className="text-xs opacity-80">Dr. Cameron Williamson</div>
          </div>

          <div className="bg-blue-100 text-gray-800 p-4 rounded-2xl flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold mr-[50px] whitespace-nowrap">Physiotherapy Appointment</span>
              <img
                src={Muscles}
                alt="Muscles"
                className="w-6 h-6 transform scale-x-[-1]"
              />
            </div>
            <div className="text-sm font-medium mb-1">11:00-12:00</div>
            <div className="text-xs text-gray-600">Dr. Kevin Doyles</div>
          </div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className=" p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">The Upcoming Schedule</h3>

        <div className="space-y-7">
          <div>
            <div className="text-m font-medium text-gray-500 mb-4">On Thursday</div>
            <div className="grid grid-cols-2 gap-4">
              {upcomingAppointments.slice(0, 2).map((appointment, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-2xl">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-semibold text-gray-900">
                      {appointment.title}
                    </div>
                    <img
                      src={appointment.image}
                      alt={appointment.type}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div className="text-xs text-gray-600 font-medium">{appointment.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-m font-medium text-gray-500 mb-4">On Saturday</div>
            <div className="grid grid-cols-2 gap-4">
              {upcomingAppointments.slice(2, 4).map((appointment, index) => (
                <div key={index} className="bg-gray-50 p-6 mt-5 rounded-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-semibold text-gray-900">
                      {appointment.title}
                    </div>
                    <img
                      src={appointment.image}
                      alt={appointment.type}
                      className="w-5 h-5 object-contain"
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