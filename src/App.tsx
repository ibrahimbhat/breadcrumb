import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Navigation from "./Navigation";

import breadcrumbs from './utils/breadcrumb.json';
import createRouteObjects from "./utils/createRouteObjects";



const router = createBrowserRouter([{
  path: "/",
  element: <Navigation routes={breadcrumbs} />,
  children: [{
    index: true,
    element: <></>,
  },
...createRouteObjects(breadcrumbs)]}]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/> 
}




