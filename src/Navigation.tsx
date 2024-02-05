import React from 'react';
import { Link, Outlet } from 'react-router-dom';

interface RouteConfig {
    path: string;
    name?: string;
    routes?: RouteConfig[];
    hideInMenu: boolean
}

interface NavigationProps {
    routes: RouteConfig[];
}

// A recursive component function to render navigation links and any nested children
const Navigation: React.FC<NavigationProps> = ({ routes }) => {
    // Function to render a single route and its children if any
    const renderRoute = (route: RouteConfig): JSX.Element | null => {
        // Render the route link and any children
        const { name, path, routes, hideInMenu } = route;
        return (
            <>
                {!hideInMenu && <li key={path}>
                    {name && <Link to={path}>{name}</Link>}
                    {routes && routes.length > 0 && (
                        <ul>
                            {routes.map(childRoute => renderRoute(childRoute))}
                        </ul>
                    )}
                </li>}
            </>
        );
    };

    return (
        <nav>
            <ul>
                {routes.map(route => renderRoute(route))}
            </ul>
            <Outlet />
        </nav>
    );
};

export default Navigation;
