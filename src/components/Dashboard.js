import React, { useEffect } from 'react';
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

  useEffect(() => {
    dispatch(fetchData(selectedCountry));
  }, [dispatch, selectedCountry]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="p-6 flex-1 overflow-auto">
          {loading ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <StatCardSkeleton key={i} />
                ))}
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <ChartSkeleton />
                <ChartSkeleton />
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <RegisteredUsersSkeleton />
                <IntegrationListSkeleton />
              </div>
            </div>
          ) : (
            data && (
              <div className="space-y-6">
                <StatCards data={data} />
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <SalesOverview data={data.salesOverview} />
                  <SalesByRegion data={data.salesByRegion} />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <RegisteredUsers data={data.registeredUsers} />
                  <IntegrationList data={data.integrations} />
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

