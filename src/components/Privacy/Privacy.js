import React, { Component } from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from '../Blogs/Breadcrumb';
import FaqSection from '../FaqSection/FaqOne'
import DownloadSection from '../DownloadSection/Download';
import ContactSection from '../ContactSection/Contact';
import FooterSection from '../FooterSection/Footer';

class Privacy extends Component {
    render() {

        return (
            <div>
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <Breadcrumb title="Privacy Policy" />
                    <section className="section faq-area style-two ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                {/* <h2 className="text-capitalize">Terms & Conditions</h2> */}
                                <p className="d-none d-sm-block mt-4">sadas asdasd asdasd asda s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default Privacy;