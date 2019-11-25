import React from 'react'
import Header from '../general/Header';
import Footer from '../general/Footer';
import './distributors.css';

const Distributors  = () => {
    const info = [
        {
            name: 'ABC Nail & SPA',
            address: '14841 Dillow St',
            city: 'Westminster, CA 92683',
            phone: '714-653-8885'
        }
    ];

    let itemsDistributors = [];
    console.log(typeof info)
    info.forEach((item, key) => {
        console.log(item);
        itemsDistributors.push(<tr key={key}><td>{item.name}, {item.address}</td><td>{item.phone}</td><td>{item.city}</td></tr>);
    });
        return (
            <React.Fragment>
                <Header/>
                
                <div className="container">
                    <div className="title">Distributors</div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper rhoncus nisl, quis feugiat mi accumsan a.
                    </p>
                </div>
                <div className="mapContainer">
                    Map
                </div>

                <div className="container">
                    <input className="inputFindDistributor" placeholder="Locate a distributor" />
                </div>

                <div className="container">
                    <div className="title text-left">Master Distributors</div>
                    <div className="gridDistributors">
                        <div className="itemDistributor">
                            <div className="imageStore">Store Logo</div>
                            <div className="storeName">Name and address</div>
                        </div>

                        <div className="itemDistributor">
                            <div className="imageStore">Store Logo</div>
                            <div className="storeName">Name and address</div>
                        </div>

                        <div className="itemDistributor">
                            <div className="imageStore">Store Logo</div>
                            <div className="storeName">Name and address</div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="title text-left">Distributors</div>
                    <table className="infoDistributors" cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Name and address</th>
                                <th>Phone numbers</th>
                                <th>City</th>
                            </tr>
                            { itemsDistributors }
                        </thead>
                    </table>
                </div>
                <Footer/>
            </React.Fragment>
        )
}

export default Distributors