import React, { Suspense } from 'react';
const About = React.lazy(() => import('../pages/About').then(module => ({ default: module.Component })));
const DashboardLayout = React.lazy(() => import('../pages/Dashboard').then(module => ({ default: module.DashboardLayout })));
const DashboardIndex = React.lazy(() => import('../pages/Dashboard').then(module => ({ default: module.DashboardIndex })));
const DashboardMessages = React.lazy(() => import('../pages/Dashboard').then(module => ({ default: module.DashboardMessages })));

// Define a type for the mapper object
type ComponentMapper = {
    [key: string]: React.ReactNode;
  };

const lazyMapper = (comp: keyof ComponentMapper) => {
    const mapper: ComponentMapper = {
        'about': <About />,
        'dashboard': <DashboardLayout/>,
        'dashboardIndex':<DashboardIndex/>,
        'dashboardMessages':<DashboardMessages/>
        // Add other mappings here
      };

    return <Suspense>{mapper[comp]}</Suspense> || <div>Component not found</div>;

};

export default lazyMapper;