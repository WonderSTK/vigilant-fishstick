import React, { useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { toggleDarkMode } from '../slices/themeSlice';
//import { Sun, Moon } from 'lucide-react';
import Home from "../assets/Group 292.png";
import icon from "../assets/SellerApp Icon Logo.png";
import payment from "../assets/payment-icon.svg";
import user from "../assets/customers-icon.svg";
import message from "../assets/messages-icon.svg";
import product from "../assets/product-icon.svg";
import invoice from "../assets/invoice-icon.svg";
import analytic from "../assets/analytics-icon.svg";
import setting from "../assets/setting-icon.svg";
import security from "../assets/security-icon.svg";
import help from "../assets/help-icon.svg";
import logout from "../assets/logout-icon.svg";
import arrowout from "../assets/octicon_arrow-up-16.png";
import arrowin from "../assets/octicon_arrow-in.png";
import textLogo from "../assets/SellerApp Text Logo.png";

const Sidebar = ({ expanded, setExpanded }) => {
  // const dispatch = useDispatch();
  // const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, [setExpanded]);

  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <div className={`bg-white text-gray-600 ${expanded ? 'w-40' : 'w-16'} fixed h-full flex flex-col items-center py-4 transition-width duration-300 overflow-hidden`}>
      <div className="flex items-center justify-between w-full px-4">
        {expanded ? (
          <img src={textLogo} alt="Text Logo" className="mb-4 text-gray-600" />
        ) : (
          <img src={icon} alt="Profile Icon" className="mb-4 text-gray-600" />
        )}
        <img src={expanded ? arrowin : arrowout} alt="Toggle Arrow" className="cursor-pointer mb-4" onClick={handleToggle} />
      </div>
      <div className="flex flex-col items-start w-full px-4">
        <div className="flex items-center mb-4 cursor-pointer" onClick={() => handleNavigation('/')}>
          <img src={Home} alt="Home icon" className="text-gray-600" />
          {expanded && <span className="ml-4 text-blue-500 truncate">Dashboard</span>}
        </div>
        <div className="flex items-center mb-4">
          <img src={payment} alt="Payment icon" className="text-gray-600" />
          {expanded && <span className="ml-4 truncate">Payment</span>}
        </div>
        <div className="flex items-center mb-4">
          <img src={user} alt="User icon" className="text-gray-600" />
          {expanded && <span className="ml-4 truncate">Customers</span>}
        </div>
        <div className="flex items-center mb-4">
          <img src={message} alt="Message icon" className="text-gray-600" />
          {expanded && <span className="ml-4 truncate">Messages</span>}
        </div>
        <hr className="w-full border-black mb-4" />
        <div className="flex items-center mb-4">
          <img src={product} alt="Product icon" className="text-gray-600" />
          {expanded && <span className="ml-4 truncate">Product</span>}
        </div>
        <div className="flex items-center mb-4">
          <img src={invoice} alt="Invoice icon" className="text-gray-600" />
          {expanded && <span className="ml-4 truncate">Invoice</span>}
        </div>
        <div className="flex items-center mb-4">
          <img src={analytic} alt="Analytic icon" className="text-gray-600" />
          {expanded && <span className="ml-4 truncate">Analytics</span>}
        </div>
        <hr className="w-full border-black mb-4" />
        <div className="flex items-center mb-4">
          <img src={setting} alt="Setting icon" className="text-gray-600" />
          {expanded && <span className="ml-4 truncate">Settings</span>}
        </div>
        <div className="flex items-center mb-4">
          <img src={security} alt="Security icon" className="text-gray-600" />
          {expanded && <span className="ml-4 truncate">Security</span>}
        </div>
        <div className="flex items-center mb-4">
          <img src={help} alt="Help icon" className="text-gray-600" />
          {expanded && <span className="ml-4 truncate">Help</span>}
        </div>
        <hr className="w-full border-black mb-4" />
        <div className="flex items-center mb-4">
          <img src={logout} alt="Logout icon" className="text-gray-600" />
          {expanded && <span className="ml-4 truncate">Log Out</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;