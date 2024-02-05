import lazyMapper from "./lazyMapper";
interface routeObjectInterface {
  path?: String;
  element?: any;
  index?: boolean;
  children?: any;
}

const createRouteObjects = (routes: any[], hasIndex?: boolean): any => {
  return  routes.map((route) => {
    const routeObject: routeObjectInterface = {
      path: route.path,
      // Default to using lazyMapper to resolve the component, unless overridden below
      element: lazyMapper(route.path)
    };
   

    if (route.redirect) {
      // If there's a redirect, set the element to <Outlet/> and add a child route for the redirect
      routeObject.element = lazyMapper("outlet");
      const redirectRoute: routeObjectInterface = {
        index: true, // This makes it the default route under its parent
        element: lazyMapper("navigate",route.redirect)
      };

      // Ensure children are initialized as an array before adding the redirectRoute
      routeObject.children = [redirectRoute];

      // If there are additional routes, add them as children, making sure to account for the added redirect child
      if (route.routes) {
        const childRoutes = createRouteObjects(route.routes, hasIndex);
        routeObject.children = [...routeObject.children, ...childRoutes];
      }
    } else if (route.routes) {
      // If there are nested routes but no redirect, process them normally
      routeObject.children = createRouteObjects(route.routes, hasIndex);
    }

    return routeObject;
  });

 
};

export default createRouteObjects;