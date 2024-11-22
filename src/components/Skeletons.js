import React from 'react';

const Shimmer = () => {
  return (
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-200 via-white to-gray-200" />
  );
};

export const SkeletonBox = ({ className }) => {
  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      <Shimmer />
    </div>
  );
};

export const StatCardSkeleton = () => (
  <div className="bg-white p-6 rounded-lg shadow">
    <SkeletonBox className="h-4 w-24 mb-2" />
    <SkeletonBox className="h-8 w-32 mb-2" />
    <SkeletonBox className="h-4 w-full" />
  </div>
);

export const ChartSkeleton = () => (
  <div className="bg-white p-6 rounded-lg shadow">
    <SkeletonBox className="h-8 w-48 mb-4" />
    <SkeletonBox className="h-64 w-full" />
  </div>
);

export const RegisteredUsersSkeleton = () => (
  <div className="bg-white p-6 rounded-lg shadow">
    <SkeletonBox className="h-8 w-48 mb-4" />
    <div className="flex justify-center mb-4">
      <SkeletonBox className="h-40 w-40 rounded-full" />
    </div>
    <div className="flex justify-between">
      <SkeletonBox className="h-6 w-24" />
      <SkeletonBox className="h-6 w-24" />
    </div>
  </div>
);

export const IntegrationListSkeleton = () => (
  <div className="bg-white p-6 rounded-lg shadow">
    <SkeletonBox className="h-8 w-48 mb-4" />
    {[...Array(3)].map((_, index) => (
      <div key={index} className="flex items-center mb-4">
        <SkeletonBox className="h-12 w-12 rounded-full mr-4" />
        <div className="flex-1">
          <SkeletonBox className="h-4 w-full mb-2" />
          <SkeletonBox className="h-4 w-3/4" />
        </div>
      </div>
    ))}
  </div>
);

