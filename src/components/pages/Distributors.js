import React from 'react'
import Header from '../general/Header';
import Footer from '../general/Footer';
import './distributors.css';
import DistributorsData from './DistributorsData';
import L from 'leaflet';

class Distributors extends React.Component {
    state = {
        markers: [
          { key: 'marker1', position: [51.5, -0.1], content: 'My first popup' },
          { key: 'marker2', position: [51.51, -0.1], content: 'My second popup' },
          { key: 'marker3', position: [51.49, -0.05], content: 'My third popup' },
        ],
    }

    componentDidMount() {
        this.map = L.map('map', {
        center: [49.8419, 24.0315],
        zoom: 16,
        layers: [
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }),
        ]
        });
    }

    render() {
        let itemsDistributors = [];
        DistributorsData.forEach((item, key) => {
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
                <div className="mapContainer" id="map">
                
                </div>

                <div className="container">
                    <input className="inputFindDistributor" placeholder="Locate a distributor" />
                </div>

                <div className="container">
                    <div className="title text-left">Master Distributors</div>
                    <div className="gridDistributors">
                        <div className="itemDistributor">
                            <div className="imageStore">
                                <img src="/images/australia.png" className="imgMasterDistributor" alt="Infitity Nails & Beauty Supplies" />
                            </div>
                        </div>

                        <div className="itemDistributor">
                            <div className="imageStore">
                                <img src="/images/canada.png" className="imgMasterDistributor" alt="Classique Beauty Supplies" />
                            </div>
                        </div>

                        <div className="itemDistributor">
                            <div className="imageStore">
                                <img src="/images/singapore.png" className="imgMasterDistributor" alt="P.N.C. Singapore Traders PTE LTD" />
                            </div>
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
                        </thead>
                        <tbody>
                            { itemsDistributors }
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Distributors