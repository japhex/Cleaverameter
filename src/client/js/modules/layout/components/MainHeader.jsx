import React from 'react';

const MainHeader = ({brandName}) => (
    <header>
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">{brandName}</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/client/parameters">Parameters</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default MainHeader;
