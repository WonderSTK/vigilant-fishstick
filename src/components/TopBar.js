import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountry } from '../slices/countrySlice';
import { ChevronDown } from 'lucide-react';
import profileIcon from '../assets/profile-icon.svg';

const countries = [
  { name: 'USA', flag: 'https://flagcdn.com/us.svg' },
  { name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
  { name: 'Germany', flag: 'https://flagcdn.com/de.svg' },
  { name: 'India', flag: 'https://flagcdn.com/in.svg' },
];

const CustomDropdown = ({ selectedCountry, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country) => {
    onChange(country);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="appearance-none bg-gray-300 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex items-center"
      >
        <img src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`} className="inline-block w-4 h-4 mr-2 rounded-full" />
        {selectedCountry.name}
        <ChevronDown size={20} className="ml-2" />
      </button>
      {isOpen && (
        <ul className="absolute mt-1 w-full bg-white border border-gray-300 text-gray-700 rounded-md shadow-lg z-10">
          {countries.map((country) => (
            <li
              key={country.name}
              onClick={() => handleSelect(country)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-700 flex items-center"
            >
              <img src={country.flag} alt={`${country.name} Flag`} className="inline-block w-4 h-4 mr-2 rounded-full" />
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TopBar = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.country.selectedCountry);

  const handleCountryChange = (country) => {
    dispatch(setCountry(country.name));
  };

  const selectedCountryData = countries.find((country) => country.name === selectedCountry) || countries[0];

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center">
        <CustomDropdown selectedCountry={selectedCountryData} onChange={handleCountryChange} />
        <img src={profileIcon} alt="Profile Icon" className="ml-4 h-6 w-6 text-gray-600" />
      </div>
    </div>
  );
};

export default TopBar;