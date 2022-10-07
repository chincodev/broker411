import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneWorkSection";

class Work extends Component {
    state = {
        "heading": "How Does Broker411 Work?",
        "headingText": "When carriers haul freight and something unexpected comes up, they usually have no real leverage over the situation. They must do what the broker says even if it's not what was agreed upon beforehand. Broker411 allows carriers to describe the experience they've had with different companies for all other carriers to read.",
        "workData": [
            {
                "id": 1,
                "image": "/img/work_thumb_1.png",
                "title": "Create an account",
                "content": "To signup for Broker411, you must be a registered carrier within the US. Whenever you input your DOT or MC number to sign up, a confirmation email will be automatically sent to the email registered with the FMSCA."
            },
            {
                "id": 2,
                "image": "/img/work_thumb_2.png",
                "title": "Search Through Companies",
                "content": "After you confirm your email and account, you'll have access to Broker411. Search through thousands of companies & read real reviews about the different experiences carriers like yourself have had."
            },
            {
                "id": 3,
                "image": "/img/work_thumb_3.png",
                "title": "Leave A Review",
                "content": "If you've had an experience that's worth leaving a review for, you're came to the right place. Broker411 is the only platform allowing carriers to rate the experience they had with the companies they worked with."
            }
        ]
    }
    
    render() {
        return (
            <section className="section work-area bg-overlay overflow-hidden ptb_100" id='work'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            {/* Work Content */}
                            <div className="work-content text-center">
                                <h2 className="text-white">{this.state.heading}</h2>
                                <p className="text-white my-3 mt-sm-4 mb-sm-5">{this.state.headingText}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.workData.map((item, idx) => {
                            return(
                                <div key={`w_${idx}`} className="col-12 col-md-4">
                                {/* Single Work */}
                                <div className="single-work text-center p-3">
                                    {/* Work Icon */}
                                    <div className="work-icon">
                                        <img className="avatar-md" src={item.image} alt="" />
                                    </div>
                                    <h3 className="text-white py-3">{item.title}</h3>
                                    <p className="text-white">{item.content}</p>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;