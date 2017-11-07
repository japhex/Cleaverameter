import React from 'react';

const Toolbar = () => (
    <header className="sub-header sub-header__client-actions sticky-header">
        <nav className="navbar navbar-light">
            <div className="container">
                <form action="/client/parameters" method="get" className="form-inline">
                    <div className="form-group">
                        <input className="form-control form-control-sm" type="text" name="searchTerm" id="searchTerm" />
                        <button type="submit" className="btn btn-success btn-sm">Search</button>
                    </div>
                </form>
                <div className="justify-content-end">
                    <a href="/client/parameters" className="btn btn-dark btn-sm">Reset Filters</a>
                    <button type="button" className="btn btn-success btn-sm">Export</button>
                </div>
            </div>
        </nav>
    </header>
);

export default Toolbar;
