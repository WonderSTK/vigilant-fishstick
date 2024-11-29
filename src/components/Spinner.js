import React from 'react';

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center py-0 w-full">
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-blue-500 animate-progress"></div>
      </div>
      
    </div>
  );
};

export default Spinner;