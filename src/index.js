import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SideBar from "./sidebar";

const SignIn = lazy(() => import('./auth/signin'));

ReactDOM.render(
    <>
        <SideBar/>
        <div className="main-panel">
            <Suspense fallback={<div>Loading...</div>}>
                <SignIn/>
            </Suspense>
        </div>
    </>,
    document.getElementById('root')
);
