import React from 'react';
import Typed from 'react-typed';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import HeaderTwo from '../common/header/HeaderTwo';
import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import AboutOne from '../elements/about/AboutOne';
import ServiceFive from '../elements/service/ServiceFive';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import TeamTwo from '../elements/team/TeamTwo';
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import Mission from "../elements/about/Mission";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
import FooterThree from '../common/footer/FooterThree';
var BlogListData = BlogClassicData.slice(0, 3);




const BusinessConsulting2 = () => {
    return (
        <>
            <SEO title="Venture Media Agency" />
            <main className="page-wrapper " >
                <HeaderTwo btnStyle="round" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent variation-2 height-750" style={{ paddingTop:"5rem", position:"relative"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="inner text-left">
                                    <h1 className="title theme-gradient display-two" style={{zIndex:"100", position:"relative"}}>We guarantee more {" "}
                                        <Typed
                                            strings={[
                                                "Sales",
                                                "Leads",
                                                "Traffic",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                                    <p className="description">Stop wasting time and money on faulty and ineffective ad campaigns.

It's time to make your ad-budget count, scale your business and blow up your sales.</p>
                                    <div className="button-group">
                                        <a className="btn-default btn-medium round btn-icon" target="_blank" href="https://calendly.com/venturemediagency/discovery-call">Schedule A Call Now <i className="icon"><FiArrowRight /></i></a>
                                        <a href="/contact"><Link className="btn-default btn-medium btn-border round btn-icon" to="/contact">Contact Us <i className="icon"><FiArrowRight /></i></Link></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2">
                            <div>
                <img src={`${process.env.PUBLIC_URL}/images/service/phonefbad.gif`} style={{width:"550px", height:"450px" ,borderRadius:"15px"}} alt="Blog Image" />
                {/* <img src={`${process.env.PUBLIC_URL}/images/portfolio/tiktokad.gif`} style={{zIndex:"2", position:"absolute", top:"10rem",right:"0rem",width:"250px", height:"450px"}} alt="Blog Image" /> */}

                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}
                
                {/* <Separator /> */}

                {/* Start About Area  */}
                <AboutOne />                            
                {/* End About Area  */}

                <Separator />                            
                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" >
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <ServiceFive 
                            serviceStyle = "gallery-style"
                            textAlign = "text-left"
                        />
                    </div>
                </div>
                {/* End Service Area  */}


                {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Call To Action Area  */}


                 {/* Start Team Area  */}
                 {/* <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Experts."
                                        title = "Our Workforce 💪"
                                        description = "We provide company and finance service for <br /> startups and company business."
                                    />
                            </div>
                        </div>
                        <TeamTwo column="col-lg-4 col-md-6 col-12" teamStyle="team-style-default style-two" />
                    </div>
                </div> */}
                {/* End Team Area  */}
                <Separator /> 
                {/* Start Mission Area   */}
                <Mission />                    
                {/* Start Mission Area  */}


                {/* <Separator />                                */}
                {/* Start Testimonial Area  */}
                {/* <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Client Feedback"
                                    title = "Our Awesome Client."
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <TestimonialThree teamStyle="" />
                    </div>
                </div> */}
                {/* End Testimonial Area  */}

                {/* <Separator />    */}
                {/* <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Latests News"
                                    title = "Our Latest News."
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {BlogListData.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                <FooterTwo />
                <FooterThree/>
            </main>
        </>
    )
}
export default BusinessConsulting2;
