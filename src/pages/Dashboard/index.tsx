import { Outlet } from 'react-router-dom';
export function Component() {
 
  return (
    <div>
     
      <h2>Dashboard</h2>
       <Outlet />
    </div>

  );
}

Component.displayName = "DashboardPage";