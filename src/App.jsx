import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading</div>}>
                <Routes/>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
