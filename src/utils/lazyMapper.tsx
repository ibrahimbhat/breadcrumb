import React, { Suspense } from 'react';
import { Navigate } from "react-router-dom";
const Login = React.lazy(() => import('../pages/Login').then(module => ({ default: module.Component })));
const Dashboard = React.lazy(() => import('../pages/Dashboard/index').then(module => ({ default: module.Component })));
const Analysis = React.lazy(() => import('../pages/Dashboard/analysis').then(module => ({ default: module.Component })));
const Monitor = React.lazy(() => import('../pages/Dashboard/monitor').then(module => ({ default: module.Component })));
const Workplace = React.lazy(() => import('../pages/Dashboard/workplace').then(module => ({ default: module.Component })));
const ProjectList = React.lazy(() => import('../pages/Projects/projectList').then(module => ({ default: module.Component })));
const ProjectDetails = React.lazy(() => import('../pages/Projects/projectDetails').then(module => ({ default: module.Component })));
const ProjectSettings = React.lazy(() => import('../pages/Projects/projectSettings').then(module => ({ default: module.Component })));
import { Outlet } from 'react-router-dom';
// Define a type for the mapper object
type ComponentMapper = {
    [key: string]: React.ReactNode;
  };

const lazyMapper = (comp: keyof ComponentMapper,redirect?:String) => {
    const mapper: ComponentMapper = {
        '/user/login': <Login />,
        '/dashboard': <Dashboard/>,
        '/dashboard/analysis':<Analysis/>,
        '/dashboard/monitor': <Monitor/>,
        '/dashboard/workplace':<Workplace/>,
        '/projects/list':<ProjectList/>,
        '/projects/:id':<ProjectDetails/>,
        '/projects/:id/settings':<ProjectSettings/>,
        'navigate':<>{typeof(redirect) === "string"&&<Navigate to={redirect} replace/>}</>,
        'outlet':<><Outlet/></>

        // Add other mappings here
      };

      return <Suspense>{mapper[comp]}</Suspense> || <div>Component not found</div>;

};





export default lazyMapper;