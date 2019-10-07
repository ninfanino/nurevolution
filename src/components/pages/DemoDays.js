import React from 'react'
import Header from '../general/Header';
import Footer from '../general/Footer';

const Home = () => (
    <div>
        <Header/>
        <img className="img-slidder" src="/images/banner-demodays.jpg" alt="Demo Days" />
        <div className="container">
            <p>
                For NURevolution is very important to created a strong bonding with our custumers, so we constantly offer free Demo Days Seminars, where you can learn how to apply our products, the beneffits and what makes NURevolution the best brand on the product nail and beauty industry.
            </p>
        </div>
        <Footer/>
    </div>
)

export default Home