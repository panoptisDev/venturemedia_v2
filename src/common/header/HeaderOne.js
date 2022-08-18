import {useState, useRef} from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import Darkmode from "./Darkmode";
import useStickyHeader from "./useStickyHeader";


const HeaderOne = ({btnStyle, HeaderSTyle}) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }
    const ref = useRef();
    let [check, setCheck] = useState(true);
    const sticky = useStickyHeader( 50 );
    const headerClasses = `header-default ${(sticky && check) ? 'sticky' : ''}`
    const { clientHeight } = ref;
    
    const checkChange = (value) => {
      setCheck(value);
    };

    return (
        <>
        <header ref={ref}  > 
        <div className="container position-relative" style={{display:"flex",paddingTop:"20px ",justifyContent:"center"}}>
                    <div className="" style={{paddingTop:"20px !important"}}>
                    <div >
                        <div  >
                            <Logo 
                                image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                                image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                            />
                            {/* <nav className="mainmenu-nav d-none d-lg-block">
                                <Nav />
                            </nav> */}
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 col-8">
                        <div className="header-right">
                            
                            <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                <div className="hamberger">
                                    <span className="hamberger-button" onClick={onCanvasHandler}><FiMenu /></span>
                                </div>
                            </div>
                            <Darkmode />
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
        <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler}  />
    </>
    )
}
export default HeaderOne;