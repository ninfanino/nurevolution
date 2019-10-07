import React from 'react'

const Footer = () => (
    <div className="Footer">
        <div className="colFooter">
            <div className="titleFooter">DISTRIBUTORS</div>
            <ul className="menuFooter">
                <li>Find a distributor</li>
                <li>Salons</li>
                <li>Become a Distributor</li>
            </ul>
        </div>

        <div className="colFooter">
            <div className="titleFooter">CUSTOMER SERVICE</div>
            <ul className="menuFooter">
                <li>Product Lines</li>
                <li>Events</li>
                <li>Marketing Materials</li>
                <li>MSDS</li>
            </ul>
        </div>

        <div className="colFooter">
            <div className="titleFooter">ABOUT US</div>
            <ul className="menuFooter">
                <li>Our Company</li>
                <li>Our Teams</li>
                <li>NuRevolution Educators</li>
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