import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneFeatureSection";

class FeatureSection extends Component {
    state = {
        data: {},
        featureData: [
            {
                "id": 1,
                "image": "/img/featured_image_1.png",
                "title": "Search Thousands Of Companies Instantly",
                "text": "Find who you worked with and leave a rating describing the experience you've had."
            },
            {
                "id": 2,
                "image": "/img/featured_image_2.png",
                "title": "Verify Company Information",
                "text": "Verify company details to ensure you are working with an actual company representative and not some shady imposter."
            },
            {
                "id": 3,
                "image": "/img/featured_image_3.png",
                "title": "Holding Each Other Accountable",
                "text": "Carriers are held to strict standards by brokers, but are not given the opportunity to do the same. With Broker411, carriers can research who they are working with before they accept a load."
            },
            
        ],
        featureData_1: [{
            "id": 4,
            "image": "/img/featured_image_4.png",
            "title": "Monitor & Review Who You Work With",
            "text": "Broker411 gives carriers a place to monitor and review who they do business with."
        },
        {
            "id": 5,
            "image": "/img/featured_image_5.png",
            "title": "No More Avoiding Detention Pay",
            "text": "Being stuck at a pickup or delivery and then being lied to about detention pay is frustrating. Describe what you've experienced so other carriers like yourself can know what to expect."
        },
        {
            "id": 6,
            "image": "/img/featured_image_6.png",
            "title": "Cancelled With No TONU",
            "text": "Having a load cancelled hours before it was set to pick up is always a headache. It's common to have a request for TONU denied and ignored. With Broker411, you can describe your experience if this ever happens to you & read about the companies you're going to work with before you accept a load from them."
        }]
    }
    
    render() {
        return (
            <section id="features" className="section features-area overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2>Why Carriers Love Broker411</h2>
                        <p className="d-none d-sm-block mt-4">Want to research and verify a Freight Broker or a particular agent in an instant? We make it super easy for you to understand who you are doing business with. Read about & leave your own experience with a particular freight brokerage or agent for the rest of the carrier community to read.</p>
                        <p className="d-block d-sm-none mt-4">Want to research and verify a Freight Broker or a particular agent in an instant? We make it super easy for you to understand who you are doing business with. Read about & leave your own experience with a particular freight brokerage or agent for the rest of the carrier community to read.</p>
                        </div>
                    </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-6">
                        {/* Features Item */}
                        <ul className="features-item">
                            {this.state.featureData.map((item, idx) => {
                                return(
                                    <li key={`fth_${idx}`}>
                                        {/* Image Box */}
                                        <div className="image-box media px-1 py-3 py-md-4">
                                        {/* Featured Image */}
                                        <div className="featured-img mr-3">
                                            <img className="avatar-sm" src={item.image} alt="" />
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                            <h3 className="mb-2">{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* <div className="col-12 col-lg-4 d-none d-lg-block">
                        
                        <div className="features-thumb text-center">
                        <img src={'/img/features_thumb.png'} alt="" />
                        </div>
                    </div> */}
                    <div className="col-12 col-md-6 col-lg-6">
                        {/* Features Item */}
                        <ul className="features-item">
                            {this.state.featureData_1.map((item, idx) => {
                                return(
                                    <li key={`ftho_${idx}`}>
                                        {/* Image Box */}
                                        <div className="image-box media px-1 py-3 py-md-4">
                                        {/* Featured Image */}
                                        <div className="featured-img mr-3">
                                            <img className="avatar-sm" src={item.image} alt="" />
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                            <h3 className="mb-2">{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureSection;