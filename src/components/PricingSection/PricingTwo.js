import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOnePricingSection";

class PricingSection extends Component {
    state = {
        "iconClass": "far fa-lightbulb text-primary mr-1",
        "preHeading": "Flexible",
        "preHeadingspan": "Pricing",
        "heading": "Access Broker411",
        "headingText": "Carriers finally have a place to let their voices be heard. Sign up and get started for free today.",
        "headingTexttwo": "Carriers finally have a place to let their voices be heard. Sign up and get started for free today.",
        "text": "Not sure what to choose?",
        "textLink": "Contact Us",
        "pricingData": [
            {
                "id": 1,
                "planImage": "/img/price_basic.png",
                "planTitle": "For carriers",
                "priceSub": "$",
                "planPrice": "0",
                "planBtn": "Sign Up",
                "li_1": "Search broker information",
                "li_2": "Search broker reviews",
                // "li_3": "Two searches a day",
                // "li_2": "Search broker reviews",
                // "li_3": "24/7 Tech Support",
                // "li_4": "Daily Backups"
            },
            // {
            //     "id": 2,
            //     "planImage": "/img/price_basic.png",
            //     "planTitle": "For carriers",
            //     "priceSub": "$",
            //     "planPrice": "8",
            //     "planPriceCents": ".99",
            //     "planBtn": "Sign Up",
            //     "li_1": "Search broker information",
            //     "li_2": "Search broker reviews",
            //     "li_3": "Unlimited searches",
            //     // "li_3": "24/7 Tech Support",
            //     // "li_4": "Daily Backups"
            // },
            {
                "id": 3,
                "planImage": "/img/price_premium.png",
                "planTitle": "For brokers",
                "priceSub": "$",
                "planPrice": "9",
                "planPriceCents": ".99",
                "planBtn": "Sign Up",
                "li_1": "Search carrier information",
                // "li_2": "Search broker reviews",
                "li_2": "Reply to carrier reviews",
                // "li_4": "Daily Backups"
            }
        ]
    }
    
    render() {
        return (
            <section id="pricing" className="section price-plan-area bg-gray overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2>{this.state.heading}</h2>
                                <p className="d-none d-sm-block mt-4">{this.state.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.headingTexttwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-lg-12">
                            <div className="row price-plan-wrapper" style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                {this.state.pricingData.map((item, idx) => {
                                    return(
                                        <div key={`p_${idx}`} className="col-12 col-md-4 mt-4">
                                            {/* Single Price Plan */}
                                            <div className="single-price-plan text-center p-5">
                                                {/* Plan Thumb */}
                                                <div className="plan-thumb">
                                                    <img className="avatar-lg" src={item.planImage} alt="" />
                                                </div>
                                                {/* Plan Title */}
                                                <div className="plan-title my-2 my-sm-3">
                                                    <h3 className="text-uppercase">{item.planTitle}</h3>
                                                </div>
                                                {/* Plan Price */}
                                                <div className="plan-price pb-2 pb-sm-3">
                                                    <h1 className="color-primary"><small className="fw-7">{item.priceSub}</small>{item.planPrice}<small className="fw-7">{item.planPriceCents}</small></h1>
                                                </div>
                                                {/* Plan Description */}
                                                <div className="plan-description">
                                                    <ul className="plan-features">
                                                        <li className="border-top py-3">{item.li_1}</li>
                                                        <li className="border-top py-3">{item.li_2}</li>
                                                        <li className="border-top border-bottom py-3">{item.li_3}</li>
                                                        {/* <li className="border-top border-bottom py-3">{item.li_4}</li> */}
                                                    </ul>
                                                </div>
                                                {/* Plan Button */}
                                                <div className="plan-button">
                                                    <a href="https://app.broker411.co/register/" className="btn mt-4">{item.planBtn}</a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PricingSection;