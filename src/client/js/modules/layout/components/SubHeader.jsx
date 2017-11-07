import React from 'react';

const SubHeader = ({clientVersion, currentRelease, fcpLabel, buildStatus}) => (
    <header className="sub-header sub-header__client-details bg-dark">
        <nav className="navbar navbar-light">
            <div className="container">
                <div className="sub-header__version">
                    <small><strong>FCP Version:</strong> {clientVersion}</small> |
                    <small><strong>Current Release:</strong> {currentRelease}</small> |
                    <small><strong>Label:</strong> {fcpLabel}</small> |
                    <small>
                        <strong>Build status:</strong>
                        {buildStatus &&
                            <i className="sub-header__status sub-header__status--success material-icons">cloud_done</i>}
                        {!buildStatus &&
                            <i className="sub-header__status sub-header__status--failed material-icons">cloud_off</i>}
                    </small>
                </div>
            </div>
        </nav>
    </header>
);

export default SubHeader;
