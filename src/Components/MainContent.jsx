import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const MainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full overflow-y-auto">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default MainContent;
