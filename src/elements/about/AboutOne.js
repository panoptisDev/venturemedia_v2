import React from 'react';
import Typed from 'react-typed';

const AboutOne = () => {
    return (
        <div className="rwt-about-area rn-section-gap" >
            <div className="container "style={{paddingTop:"10rem"}}>
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/service/growthexp.gif" alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="section-title">
                                <h2 className="title">Our Philosophy <br /> {" "}
                                    <Typed className="theme-gradient"
                                        strings={[
                                            "Make",
                                            "It",
                                            "Count",
                                        ]}
                                        typeSpeed={80}
                                        backSpeed={5}
                                        backDelay={1000}
                                        loop
                                    />
                                </h2>
                                <p>Our only objective is to build the foundations on which we can increase your influence and show an interest in your activity by your target audience.
<br></br>
Depending on your message and positioning, we will support you to boost your numbers: Followers, Reach, Conversions, Prospects and Influence.</p>

                                <div className="read-more-btn mt--40">
                                    <a className="btn-default" href="https://calendly.com/venturemediagency/discovery-call"><span>Schedule A Call Now</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutOne
