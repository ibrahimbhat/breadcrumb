import { Outlet } from "react-router-dom";



export function Component() {
    return (
      <div>
        <h2>Project List</h2>
      <Outlet/>
      </div>
    );
  }
  
  Component.displayName = "ProjectListPage";