import React from "react"
import { NavLink } from "react-router-dom";

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';


const SlidderCompany = () => {
    
    const CarouselUI = ({ position, handleClick, children }) => (
        <div className="slidder">
            <div className="content-slidder">
                {children}
                <div className="arrow a-left" onClick={handleClick} data-position={position - 1}>{'<'}</div>
                <div className="arrow a-right" onClick={handleClick} data-position={position + 1}>{'>'}</div>
                <div style={{clear:'both'}}></div>
            </div>
        </div>
      );
      const Carousel = makeCarousel(CarouselUI);

    return (
        <Carousel defaultWait={100000} maxTurns={300}>
            <Slide right>
                <NavLink to="/promo">
                    <div>
                        <img className="img-slidder" src="/images/slidder1.jpg" alt="NuRevolution" />
                        
                    </div>
                </NavLink>
            </Slide>
            <Slide right>
                <NavLink to="/promo">
                    <div>
                        <img className="img-slidder" src="/images/slidder2.jpg" alt="NuRevolution" />
                        
                    </div>
                </NavLink>
            </Slide>
            <Slide right>
                <NavLink to="/promo">
                    <div>
                        <img className="img-slidder" src="/images/slidder3.jpg" alt="NuRevolution" />
                        
                    </div>
                </NavLink>
            </Slide>
            <Slide right>
                <NavLink to="/promo">
                    <div>
                        <img className="img-slidder" src="/images/slidder4.jpg" alt="NuRevolution" />
                        
                    </div>
                </NavLink>
            </Slide>
        </Carousel>
    )
}



export default SlidderCompany
