import React, { Suspense, createContext, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Dialog = lazy(() => import('./pages/dialog/Dialog'));
const NotFound = lazy(() => import('./pages/not-found/NotFound'));

import './index.css';

const dialogs = [
    { id: 1, name: 'John', message: 'Hey there!', time: '10:00 AM' },
    { id: 2, name: 'Alice', message: 'How are you?', time: '10:15 AM' },
    { id: 3, name: 'Bob', message: "What's up?", time: '10:30 AM' },
];

export const DialogContext = createContext();

function App() {
    return (
        <DialogContext.Provider value={dialogs}>
            <Suspense fallback={<span>Loading...</span>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/dialog/:id" element={<Dialog />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </DialogContext.Provider>
    );
}

export default App;
