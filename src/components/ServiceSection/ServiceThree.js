import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneServiceSection";

class ServiceSection extends Component {
    state = {
        "heading": "Make your Device Manage Everything For you",
        "headingTwo": "Share your photos with friends easily",
        "headingThree": "Discover Everything You Want To Know About Brokers In One Place",
        "headingFour": "More productivity with less effort",
        "headingFive": "Organize all your media content easily",
        "headingSix": "Work faster with powerful filters",
        "headingSeven": "Stay connected with all of your friends",
        "buttonText": "Sign Up For Free Now",
        "thumbOne": "/img/features_thumb.png",
        "thumbTwo": "/img/service_thumb_2.png",
        "thumbThree": "/img/welcome_mockup_2.png",
        "thumbFour": "/img/discover_thumb.png",
        "thumbFive": "/img/service_thumb_1.png",
        "thumbSix": "/img/discover_thumb_2.png",
        "serviceData": [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Research about the companies you are going to work with and find out the truth before you sign a rate confirmation."
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Look up & review individual freight brokers that you worked with."
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "See what you've been missing out on. Signing up will give you instant access to the Broker411 portal, allowing you to research and review different companies."
            },
            // {
            //     "id": 4,
            //     "iconClass": "fas fa-cart-arrow-down",
            //     "text": "Marketing chart dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
            // }
        ]
    }

    render() {
        return (
            <section className="section service-area bg-inherit overflow-hidden ptb_100" id='service'>
                <div className="container">
                    <div className="row justify-content-between">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        {/* Service Text */}
                        <div className="service-text pt-4 pt-lg-0 px-0 px-lg-4">
                        <h2 className="text-capitalize mb-4">{this.state.headingThree}</h2>
                        {/* Service List */}
                        <ul className="service-list style-two">
                            {/* Single Service */}
                            {this.state.serviceData.map((item, idx) => {
                                return(
                                    <li key={`sth_${idx}`} className="single-service py-2">
                                        <div className="service-text">
                                            <p>{item.text}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <a href="/contact-page" className="btn btn-bordered mt-4">{this.state.buttonText}</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2 d-none d-md-block">
                        {/* Service Thumb */}
                        <div className="service-thumb mx-auto">
                        <img src={this.state.thumbThree} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceSection;