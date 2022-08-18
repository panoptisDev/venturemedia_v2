import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const SectionTitle = ({subtitle, title, description, textAlign, radiusRounded}) => {
    return (
        <div className={`section-title ${textAlign}`}>
                                        <h1 className="title theme-gradient h2" dangerouslySetInnerHTML={{__html: "What we offer"}}></h1>

            <ScrollAnimation 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                <h4 className={`subtitle ${radiusRounded}`}><span className="theme-gradient" dangerouslySetInnerHTML={{__html: "Our Services"}}></span></h4>
            </ScrollAnimation>
            
            <ScrollAnimation 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                {/* <h2 className="title w-600 mb--20" dangerouslySetInnerHTML={{__html: title}}></h2> */}
            </ScrollAnimation>

            <ScrollAnimation 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                <p className="description b1" dangerouslySetInnerHTML={{__html: "Because we believe clients have different needs.</br> we tailor offers for every case so you don't have to spend a huge amount without direct returns"}}></p>
            </ScrollAnimation>
        </div>
    )
}
export default SectionTitle;