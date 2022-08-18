import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOne from '../accordion/AccordionOne';

const mission = () => {
    return (
        <div className="rn-company-mission-are rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-6">
                        <div className="mission-title">
                            <h2 className="title">We are<br /> {" "}
                                <Typed className="theme-gradient"
                                    strings={[
                                        "Excellent Collaborators",
                                        "Customer centric",
                                        "Creative and Innovative",
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={5}
                                    backDelay={1000}
                                    loop
                                />
                            </h2>
                            <p>We have accompanied, guided and collaborated with several companies and brands to help them better communicate with their audiences.<br></br> We believe in your products and services and manage your brand image as if it were our own.<br></br>

We have moved from the era of mass communication to that of ultra-targeted communication.<br></br> This cannot be done without the help of real professionals who will be able to assist you in achieving your various objectives and achieving unlimited growth thanks to digital tools.</p>

                            {/* <div className="read-more-btn mt--50">
                                <Link className="btn-default btn-icon" to="#">Learn More <i className="icon"><FiArrowRight /></i></Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <AccordionOne customStyle="" />
                    </div>
                </div>
            </div>                        
        </div>
    )
}
export default mission;
