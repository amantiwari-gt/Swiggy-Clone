//importing necessary components and modules

import React from  'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import Body from './components/Body';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// Main app layout component with header, body, and footer
const App = () => {
    return (
        <div className='app'>
            <HeaderComponent/>
            <Outlet/>
            
        </div>
    );
}

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:  [
                    {
                        path: '/',
                        element: <Body />
                    },
                    {
                        path: '/about',
                        element: <About/>
                    },
                    {
                        path: '/contact',
                        element: <Contact/>
                    }

                ],
        errorElement: <Error/>
    }
]);

// Render the app to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router = {AppRouter}/>);