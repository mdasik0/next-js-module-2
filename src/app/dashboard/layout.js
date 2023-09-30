import Sidebar from '@/components/DashBoard/SideBars/Sidebar';
import React from 'react';

export const metadata = {
    title: 'DashBoard | Learning Next Js',
    description: 'Learning Next Js Module - 1',
  }

const DashboardPageLayout = ({children}) => {
    return (
        <div>
            <Sidebar />
         {children}
        </div>
    );
};

export default DashboardPageLayout;