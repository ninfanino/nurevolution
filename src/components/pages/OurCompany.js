import React from 'react'
import Header from '../general/Header';
import Footer from '../general/Footer';
import './educators.css';
import SlidderCompany from '../company/slidderCompany';

const OurCompany = () => {
    let items = [];
    for(let i = 1; i <= 24; i++) {
        items.push(<div className="companyGridItem"><div className="imgCompanyGrid"><img src={"/images/colaboradores/"+i+".jpg"} alt="Colaborator" /></div></div>);
    }
    return (
    <React.Fragment>
        <Header/>
        
        <div className="container">
            <div className="twoSections">
                <div className="first-twoSections">
                    <div className="title text-uppercase">We are on a<br/>mision!</div>
                    <p>
                    NuRevolution is here to revolutionize the way professional nail, hand & feet beauty industry build their products.<br/>
                    Among the world\'92s leading professional nail care companies, we exceed industry standards by offering only the highest quality products as we work closely with our distributors and customers to create the latest trend.
                    </p>
                </div>
                <div className="second-twoSections">
                    <img src="/images/company.jpg" alt="Our mission"/>
                </div>
            </div>

            <div className="oneSection">
                <div className="first-oneSection">
                    <div className="title">Why choose us</div>
                    <p>
                    We have over 20 plus years of professional experience in the nail, hand & feet beauty industry.<br/>
                    </p>
                </div>
            </div>

            <div className="twoSections">
                <div className="first-twoSections">
                    <p>
                    We only manufacture the most successful and revolutionary products such as Vegan Spa System, Vegan Lacquer, Matching Gel and Dipping Powder
                    </p>
                </div>
                <div className="second-twoSections">
                    <div className="btnOrange">
                        Get in Touch
                    </div>
                </div>
            </div>

            <div className="oneSection">
                <div className="first-oneSection">
                    <SlidderCompany/>
                </div>
            </div>

            <div className="oneSection">
                <div className="first-oneSection">
                    <div className="title">
                        Know the work
                    </div>
                    <div className="title">
                        of our collaborators
                    </div>
                </div>
            </div>
        </div>

        <div className="companyGrid">
            {items}
        </div>

        <Footer/>
    </React.Fragment>
    )
}

export default OurCompany