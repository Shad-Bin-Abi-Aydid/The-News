import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

const routes = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>
    },
    {
        path:'/news',
        element: <h1>News layouts</h1>
    },
    {
        path:'/auth',
        element: <h1>Login</h1>
    },
    {
        path:'*',
        element: <h1>Error</h1>
    }
])

export default routes;