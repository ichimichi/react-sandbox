import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    <>
        <div className="sidebar" data-color="rose" data-background-color="black"
             data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
                <a href="http://www.creative-tim.com" className="simple-text logo-mini">
                    NI
                </a>
                <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                    Nice Infotech
                </a>
            </div>
        </div>
        <div className="main-panel">
        </div>
    </>,
    document.getElementById('root')
);
