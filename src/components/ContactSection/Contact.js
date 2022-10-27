import React, { Component } from 'react';
import ContactForm from './ContactForm';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-1/themeOneContactSection";

class ContactSection extends Component {
    state = {
        "heading": "Have A Question, Concern, Or Suggestion?",
        // "headingText": "Fill out the form the information below if you have any questions, concerns, or suggestions and a team member will get back to you within 48h.",
        // "headingTexttwo": "Fill out the form the information below if you have any questions, concerns, or suggestions and a team member will get back to you within 48h.",
        // "content": "Fill out the form the information below if you have any questions, concerns, or suggestions and a team member will get back to you within 48h.",
       
        "iconList": [
            // {
            //     "id": 1,
            //     "iconClass": "fas fa-home",
            //     "text": "Vestibulum nulla libero, convallis, tincidunt suscipit diam, DC 2002"
            // },
            // {
            //     "id": 2,
            //     "iconClass": "fas fa-phone-alt",
            //     "text": "+1 230 456 789-012 345 6789"
            // },
            {
                "id": 3,
                "iconClass": "fas fa-envelope",
                "text": "support@broker411.co"
            }
        ]
    }
   
    render() {
        return (
            <section id="contact" className="contact-area bg-gray ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        
                        <div className="section-heading text-center">
                        <h2 className="text-capitalize">{this.state.heading}</h2>
                        <p className="d-none d-sm-block mt-4">{this.state.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.headingTexttwo}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-between">
                    <div className="col-12 col-md-5">
                        {/* Contact Us */}
                        
                        <div className="contact-us">
                        <p className="mb-3">{this.state.content}</p>
                            <ul>
                                {this.state.iconList.map((item, idx) => {
                                    return(
                                        <li key={`ci_${idx}`} className="py-2">
                                            <a className="media" href="/#">
                                                <div className="social-icon mr-3">
                                                    <i className={item.iconClass} />
                                                </div>
                                                <span className="media-body align-self-center">{item.text}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-4 pt-md-0">
                        <ContactForm />
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;