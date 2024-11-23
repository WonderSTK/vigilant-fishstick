import React from 'react';
import RegUser from "../assets/register-user-light-theme.svg";

const RegisteredUsers = ({ data }) => {
  const { total, premium, basic } = data;
  const premiumPercentage = (premium / total) * 100;

  return (
    <div className="bg-white rounded-lg shadow p-4 lg:p-6 h-full">
      <h2 className="text-lg font-semibold text-gray-900 mb-2 lg:mb-4">Registered Users</h2>
      <div className="flex items-center justify-center flex-1">
        <div className="relative w-40 h-40 lg:w-56 lg:h-56">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="4"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="4"
              strokeDasharray={`${premiumPercentage}, 100`}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <img src={RegUser} alt="User Icon" className="w-8 h-8 lg:w-10 lg:h-10 mb-1 lg:mb-2 mx-auto" />
            <p className="text-2xl lg:text-3xl font-bold text-gray-900">{total}</p>
            <p className="text-xs lg:text-sm text-gray-500">Total users</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 lg:mt-6">
        <div className="flex items-center">
          <div className="bg-blue-500 w-1 h-6 lg:h-8 mr-2"></div>
          <div>
            <p className="text-base lg:text-lg font-semibold text-gray-900">{premium}</p>
            <p className="text-xs lg:text-sm font-medium text-gray-500">Premium Users</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-right pr-2">
            <p className="text-base lg:text-lg font-semibold text-gray-900">{basic}</p>
            <p className="text-xs lg:text-sm font-medium text-gray-500">Basic Users</p>
          </div>
          <div className="bg-blue-500 w-1 h-6 lg:h-8 mr-2"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisteredUsers;