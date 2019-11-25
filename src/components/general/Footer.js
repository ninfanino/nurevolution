import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => (
    <div className="Footer">
        <div className="colFooter">
            <div className="titleFooter">DISTRIBUTORS</div>
            <ul className="menuFooter">
                <li><NavLink to="/distributors">Find a distributor</NavLink></li>
                <li>Salons</li>
                <li>Become a Distributor</li>
            </ul>
        </div>

        <div className="colFooter">
            <div className="titleFooter">CUSTOMER SERVICE</div>
            <ul className="menuFooter">
                <li>Product Lines</li>
                <li>Events</li>
                <li><a href="https://cp.sync.com/dl/fec55b400/k2ungk66-9rpf5i56-pv5bb3vq-6rr7c89f" target="_blank" rel="noopener noreferrer">Marketing Materials</a></li>
                <li><a href="https://cp.sync.com/dl/e21e28fe0/s3s5edwh-83t74426-sen6cu7f-np6iiv55" target="_blank" rel="noopener noreferrer">MSDS</a></li>
            </ul>
        </div>

        <div className="colFooter">
            <div className="titleFooter">ABOUT US</div>
            <ul className="menuFooter">
                <li><NavLink to="/our-company">Our Company</NavLink></li>
                <li>Our Teams</li>
                <li><NavLink to="/educators">NuRevolution Educators</NavLink></li>
                <li>Contact</li>
                <li>FAQ</li>
            </ul>

            <div className="socialMedia">
                <img src="/images/fb.png" alt="Facebook" />
                <img src="/images/in.png" alt="Instagram" />
            </div>
        </div>

        <div className="colFooterLast">
            <img src="/images/logo-footer.png" alt="Facebook" />
            <div className="footerInfo">
                Office: <strong>888-663-5519</strong> Fax: <strong>281-677-2099</strong> <br/>
                <strong>22522</strong> Franz Road. Building <strong>#10</strong> <br/>
                Katy, <strong>TX 77449</strong>
            </div>
        </div>
    </div>
)

export default Footer