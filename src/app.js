//importing necessary components and modules

import React from  'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import Body from './components/Body';

// Main app layout component with header, body, and footer
const App = () => {
    return (
        <div className='app'>
            <HeaderComponent/>
            <Body/>
            
        </div>
    );
}

// Render the app to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);