import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../slices/dataSlice';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import StatCards from './StatCards';
import SalesOverview from './SalesOverview';
import SalesByRegion from './SalesByRegion';
import RegisteredUsers from './RegisteredUsers';
import IntegrationList from './IntegrationList';
import { StatCardSkeleton, ChartSkeleton, RegisteredUsersSkeleton, IntegrationListSkeleton } from './Skeletons';

const Dashboard = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.country.selectedCountry);
  const { loading, data } = useSelector((state) => state.data);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  useEffect(() => {
    dispatch(fetchData(selectedCountry));
  }, [dispatch, selectedCountry]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar expanded={sidebarExpanded} setExpanded={setSidebarExpanded} />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarExpanded ? 'ml-40' : 'ml-16'}`}>
        <TopBar />
        <div className="p-4 lg:p-6 flex-1 overflow-auto">
          {loading ? (
            <div className="space-y-4 lg:space-y-6">
              {/* Stat Cards - responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {[...Array(4)].map((_, i) => (
                  <StatCardSkeleton key={i} />
                ))}
              </div>
              
              {/* Charts - responsive layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                <div className="md:col-span-2 lg:col-span-2">
                  <ChartSkeleton />
                </div>
                <div className="md:col-span-1 lg:col-span-1">
                  <ChartSkeleton />
                </div>
              </div>
              
              {/* Bottom section - responsive layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                <div className="md:col-span-1 lg:col-span-1">
                  <RegisteredUsersSkeleton />
                </div>
                <div className="md:col-span-1 lg:col-span-2">
                  <IntegrationListSkeleton />
                </div>
              </div>
            </div>
          ) : (
            data && (
              <div className="space-y-4 lg:space-y-6">
                {/* Stat Cards - responsive grid */}
                <StatCards data={data} />
                
                {/* Charts - responsive layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  <div className="md:col-span-2 lg:col-span-2">
                    <SalesOverview data={data.salesOverview} />
                  </div>
                  <div className="md:col-span-1 lg:col-span-1">
                    <SalesByRegion data={data.salesByRegion} />
                  </div>
                </div>
                
                {/* Bottom section - responsive layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  <div className="md:col-span-1 lg:col-span-1">
                    <RegisteredUsers data={data.registeredUsers} />
                  </div>
                  <div className="md:col-span-1 lg:col-span-2">
                    <IntegrationList data={data.integrations} />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;