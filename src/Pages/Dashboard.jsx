import React from 'react';
import DashboardTest from '../Components/DashboardTest';
import ProjectDashboard from '../Components/ProjectDashboard';
import AnaDashborad from '../Components/AnaDashborad';

const Dashboard = () => {
    return (
        <div className='bg-gray-100 rounded-2xl p-3 mt-2'>
            <div>
                <DashboardTest/>
            </div>

            <div>
                <ProjectDashboard/>
            </div>
            <div>
                <AnaDashborad/>
            </div>
            <div></div>
        </div>
    );
};

export default Dashboard;