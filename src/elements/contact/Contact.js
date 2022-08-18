import React from 'react';
import SEO from "../../common/SEO";
import ScrollAnimation from "react-animate-on-scroll";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";

const Contact = () => {
    return (
        <>
            <SEO title="Contact || Doob - React Business  Template" />
            <Layout>
                {/* <BreadcrumbOne 
                    title=""
                    rootUrl="/"
                   
                /> */}
                <div className="main-content">
                    {/* Start Contact Area  */}
                    
                    <div className="rwt-contact-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    
                                <div className={`section-title text-center`}>
                                        <h1 className="title theme-gradient h2" dangerouslySetInnerHTML={{__html: "Have a general enquiry?"}}></h1>

            <ScrollAnimation 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                <h4 className={`subtitle `}><span className="theme-gradient" dangerouslySetInnerHTML={{__html: "Contact Us Today"}}></span></h4>
            </ScrollAnimation>
            
            <ScrollAnimation 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                {/* <h2 className="title w-600 mb--20" dangerouslySetInnerHTML={{__html: title}}></h2> */}
            </ScrollAnimation>

            {/* <ScrollAnimation 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                <p className="description b1" dangerouslySetInnerHTML={{__html: "Because we believe clients have different needs.</br> we tailor offers for every case so you don't have to spend a huge amount without direct returns"}}></p>
            </ScrollAnimation> */}
        </div>
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                    </div>
                    {/* End Contact Area  */}
                </div>
            </Layout>
        </>
    )
}
export default Contact;