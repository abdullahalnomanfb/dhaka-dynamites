import React from 'react';
import teamLogo from '../../img/favicon.ico';
import './Header.css';

const Header = () => {
    return (
        <div className="header ">
            <nav className="navbar navbar-expand-lg  navbar-light container  ">
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand " href="#"><img className="teamLogo" src={teamLogo} alt="" /></a>
                    <div className="col-auto">
                        <div className="collapse navbar-collapse  " id="navbarTogglerDemo03">
                            <ul className=" list-item navbar-nav me-auto mb-2 mb-lg-0 text-center ml-auto  ">
                                <li className="nav-item list-item">
                                    <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                                </li>
                                <li className="nav-item list-item">
                                    <a className="nav-link active" href="/About">About Us</a>
                                </li>
                                <li className="nav-item list-item">
                                    <a className="nav-link active " href="/Gallery"  >Gallery</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;