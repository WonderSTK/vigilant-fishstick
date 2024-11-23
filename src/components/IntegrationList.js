import React from 'react';
import logo1 from '../assets/stripe-icon.svg';
import logo2 from '../assets/shopify-icon.svg';
import logo3 from '../assets/zapier-icon.svg';

const IntegrationList = ({ data }) => {
  const logos = [
    logo1,
    logo2,
    logo3,
  ];
  return (
    <div className="bg-white rounded-lg shadow p-4 lg:p-6 h-full">
      <h2 className="text-lg font-semibold text-gray-900 mb-2 lg:mb-4">
        List of Integrations
      </h2>
      <div className="overflow-x-auto flex-1">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 lg:px-6 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="mr-2" />
                Application
              </th>
              <th className="px-4 lg:px-6 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 lg:px-6 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rate
              </th>
              <th className="px-4 lg:px-6 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Profit
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((integration, index) => (
              <tr key={index}>
                <td className="px-4 lg:px-6 py-2 lg:py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <div className="flex-shrink-0 h-8 w-8 lg:h-10 lg:w-10">
                      <img src={logos[index]} alt={`${integration.name} Logo`} className="h-8 w-8 lg:h-10 lg:w-10 rounded-full" />
                    </div>
                    <div className="ml-2 lg:ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {integration.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 lg:px-6 py-2 lg:py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {integration.type}
                  </div>
                </td>
                <td className="px-4 lg:px-6 py-2 lg:py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${integration.rate}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {integration.rate}%
                  </div>
                </td>
                <td className="px-4 lg:px-6 py-2 lg:py-4 whitespace-nowrap text-sm text-gray-500">
                  ${integration.profit.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntegrationList;