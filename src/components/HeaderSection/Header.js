import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
                <div className="container position-relative">
                    
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-regular" src={this.props.imageData} alt="brand-logo" />
                        <img className="navbar-brand-sticky" src="/img/logo.png" alt="sticky brand-logo" />
                    </a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-inner">
                        {/*  Mobile Menu Toggler */}
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <nav>
                            <ul className="navbar-nav" id="navbar-nav">
                                <li className="nav-item">
                                    <a className={`nav-link ${window.location.pathname.length > 1 ? '' : 'scroll'}`} href="/#home" >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${window.location.pathname.length > 1 ? '' : 'scroll'}`} href="/#features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${window.location.pathname.length > 1 ? '' : 'scroll'}`} href="/#work">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${window.location.pathname.length > 1 ? '' : 'scroll'}`} href="/#service">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${window.location.pathname.length > 1 ? '' : 'scroll'}`} href="/#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${window.location.pathname.length > 1 ? '' : 'scroll'}`} href="/#reviews">Reviews</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${window.location.pathname.length > 1 ? '' : 'scroll'}`} href="/#contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`btn yellow ml-4 pl-3 pr-3`} style={{backgroundColor:'yellow'}} href="https://app.broker411.co/register">Get Started</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`btn yellow ml-4 pl-3 pr-3`} style={{backgroundColor:'yellow'}} href="https://app.broker411.co">Log In</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </header>
        );
    }
}

export default Header;