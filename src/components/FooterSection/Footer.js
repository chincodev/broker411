import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-1/themeOneFooterSection";

class FooterSection extends Component {
    state = {
        "image": "/img/logo.png",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.",
        "linkText_1": "Useful Links",
        "linkText_2": "Product Help",
        "linkText_3": "Download",
        "iconList": [
            {
                "id": 1,
                "link": "facebook",
                "iconClass": "fab fa-facebook-f"
            },
            {
                "id": 2,
                "link": "twitter",
                "iconClass": "fab fa-twitter"
            },
            {
                "id": 3,
                "link": "google-plus",
                "iconClass": "fab fa-google-plus-g"
            },
            {
                "id": 4,
                "link": "vine",
                "iconClass": "fab fa-vine"
            }
        ],
        "footerList_1": [
            {
                "id": 1,
                "link": "home",
                "text": "Home"
            },
            {
                "id": 2,
                "link": "features",
                "text": "Features"
            },
            {
                "id": 3,
                "link": "service",
                "text": "Service"
            },
            {
                "id": 3,
                "link": "pricing",
                "text": "Pricing"
            },
            {
                "id": 4,
                "link": "reviews",
                "text": "Reviews"
            },
        ],
        "footerList_2": [
            {
                "id": 1,
                "text": "FAQ"
            },
            {
                "id": 2,
                "text": "Privacy Policy"
            },
            {
                "id": 3,
                "text": "Cookie policy"
            },
            {
                "id": 4,
                "text": "Terms & Conditions"
            },
            {
                "id": 5,
                "text": "Contact"
            }
        ],
        "footerList_3": [
            {
                "id": 1,
                "image": "/img/google-play-black.png"
            },
            {
                "id": 2,
                "image": "/img/app-store-black.png"
            }
        ],
        "footerList_4": [
            {
                "id": 1,
                "text": "Affiliate program"
            },
            {
                "id": 2,
                "text": "Terms & Conditions"
            },
            {
                "id": 3,
                "text": "Privacy Policy"
            },
            {
                "id": 4,
                "text": "Refund Policy"
            }
        ]
    }
   
    render() {
        return (
            <div>
                <div className="height-emulator d-none d-lg-block" />
                <footer className="footer-area footer-fixed">
                    {/* Footer Top */}
                    <div className="footer-top ptb_100">
                        <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3">
                            {/* Footer Items */}
                            <div className="footer-items">
                                {/* Logo */}
                                <a className="navbar-brand" href="/#">
                                <img className="logo" src={this.state.image} alt="" />
                                </a>
                                <p className="mt-2 mb-3">Broker411 gives carriers the ability to research the companies that they work with before doing business with them.</p>
                                {/* Social Icons */}
                                <div className="social-icons d-flex">
                                    {this.state.iconList.map((item, idx) => {
                                        return(
                                            <a key={`fi_${idx}`} className={item.link} href="/#">
                                                <i className={item.iconClass} />
                                                <i className={item.iconClass} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                            {/* Footer Items */}
                            <div className="footer-items">
                                {/* Footer Title */}
                                <h3 className="footer-title mb-2">{this.state.linkText_1}</h3>
                                <ul>
                                    {this.state.footerList_1.map((item, idx) => {
                                        return(
                                            <li key={`flo_${idx}`} className="py-2"><a href={"#"+item.link}>{item.text}</a></li>
                                        );
                                    })}
                                </ul>
                            </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                            {/* Footer Items */}
                            <div className="footer-items">
                                {/* Footer Title */}
                                <h3 className="footer-title mb-2">{this.state.linkText_2}</h3>
                                <ul>
                                    {this.state.footerList_2.map((item, idx) => {
                                        return(
                                            <li key={`flt_${idx}`} className="py-2"><a href={"#"+item.link}>{item.text}</a></li>
                                        );
                                    })}
                                </ul>
                            </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                            {/* Footer Items */}
                            <div className="footer-items">
                                {/* Footer Title */}
                                <h3 className="footer-title mb-2">{this.state.linkText_3}</h3>
                                {/* Store Buttons */}
                                <div className="button-group store-buttons store-black d-flex flex-wrap">
                                    {this.state.footerList_3.map((item, idx) => {
                                        return(
                                            <a key={`flth_${idx}`} href="/#">
                                                <img src={item.image} alt="" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="container">
                        <div className="row">
                            <div className="col-12">
                            {/* Copyright Area */}
                            <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                {/* Copyright Left */}
                                <div className="copyright-left">© Copyrights 2021 Broker411 All rights reserved.</div>
                                {/* Copyright Right */}
                                <div className="copyright-right">Made with <i className="fas fa-heart" /> In <a href="/#">California</a></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterSection;