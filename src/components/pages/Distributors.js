import React from 'react'
import Header from '../general/Header';
import Footer from '../general/Footer';
import './distributors.css';
import DistributorsData from './DistributorsData';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Distributors extends React.Component {
    componentDidMount() {
        var mymap = L.map('map').setView([51.505, -0.09], 1.5);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11'
        }).addTo(mymap);

        var mapIcon = L.icon({
            iconUrl: './images/placeholder.png',
            iconSize:     [30, 30], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
        });

	    L.marker([29.7048933,-95.5691263], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>US Maxim Nail Supply</b><br />10600 Bellaire Blvd.<br/>Houston TX 77072<br/>United States <br/> <b>Phone:</b>(832) 617-8666");
            
        L.marker([30.3775002,-97.6883422], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>Austin Nail Supply</b><br />10901 N Lamar Blvd<br/>Ste C302<br/>Austin TX 78753<br/>United States<br/><b>Phone:</b> (512) 835-7553");
        
        L.marker([39.1339383,-94.5841572], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>Allure Nail Supply</b><br />29 W 14th Ave <br/>Kansas City MO 64116<br/>United States <br/><b>Phone: </b> (816) 231-2288");
        
        L.marker([39.1465422,-94.5817403], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>B & T Nail Supply</b><br />2425 Burlington<br/>North Kansas City Missouri 64116<br/>United States<br/><b>Phone: </b>(816) 283-8395");
        
        L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>Nail Supply Depot</b><br />6577 N. Oak Trafficway<br/>Gladstone MO 64118<br/>United States<br/><b>Phone:</b> (816) 982-9730");

        L.marker([38.556415,-90.312745], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>Affton Nail Supply</b>8805 Gravois Rd<br/>Affton MO 63123<br/>United States<br/><b>Phone:</b> (314) 405-8000");
        
        L.marker([38.5941817,-90.2437517], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>L Beauty Supply</b>3444 Gravois Ave<br/>Saint Louis MO 63118<br/>United States<br/><b>Phone:</b> (314) 776-6800");

        L.marker([31.8356401,-106.5503844], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>Beauty Supply Living Furniture</b>6910 N. Mesa Street<br/>#B<br/>El Paso TX 79912<br/>United States<br/><b>Phone:</b> (773) 275-1110");

        L.marker([33.8984497,-84.2827776], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>NailMall Atlanta</b>5338 Buford Highway<br/>Doraville Georgia 30040<br/>United States<br/><b>Phone:</b> (678) 547-0098");

        L.marker([27.8376832,-82.7024398], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>Pro Beauty Supply</b>7230 49th Street North<br/>Pinellas Park FL 33781<br/>United States<br/><b>Phone:</b> (727) 544-8470");

        L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>Sunny Beauty Supply</b>1226 E Colonial Dr.<br/>Orlando FL 32803<br/>United States<br/><b>Phone:</b> (407) 898-8910");

        L.marker([28.5527603,-81.3581832], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>NailMall Orlando</b>2000 East Colonial Drive<br/>Orlando Florida 32803<br/>United States<br/><b>Phone:</b> (407) 898-1595");

        L.marker([39.6978804,-104.8477502], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>Jasmine Nails Supply</b>12303 E Mississippi Ave<br/>#129<br/>Aurora CO 80013<br/>United States<br/><b>Phone: </b>(303) 367-8877");

        L.marker([41.97036,-87.6611617], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>Lee Nail Supply</b>4855 N Broadway St<br/>Chicago IL 60640<br/>United States<br/><b>Phone: </b>(773) 275-8091 or (855) 275-8091");

        L.marker([41.9723325,-87.661304], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>Lynamy Nail & Beauty Supply</b>4925 N Broadway St<br/>Ste F<br/>Chicago IL 60640<br/>United States<br/><b>Phone: </b>(773) 275-1110 or (877) 279-1112");

        L.marker([33.5967115,-112.2245574], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>AZ Nail Supply</b>7582 W Cactus Rd<br/>B-2<br/>Peoria AZ 85381<br/>United States<br/><b>Phone: </b>(623) 979-9800");

        L.marker([45.1116976,-93.3051852], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>Hong Cong Nails Supply</b>8574 Edinburgh Centre Dr<br/>Brooklyn Park MN 55443<br/>United States<br/><b>Phone: </b> (763) 316-6856");

        L.marker([42.5178589,-83.0891987], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>Lucky 9 Nail Supply</b>30671 Dequindre Rd<br/>Madison Heights MI 48071<br/>United States<br/><b>Phone: </b>");

        L.marker([36.8440291,-76.1561579], {icon: mapIcon}).addTo(mymap)
            .bindPopup("<b>A & N Nail Supply</b>5045 Virginia Beach Blvd<br/># 102<br/>Virginia Beach VA 23462<br/>United States<br/><b>Phone: </b>(757) 490-9555");

            L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("");

            L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("");

            L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("");

            L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("");

            L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("");

            L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("");

            L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("");

            L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("");

            L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("");

            L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("");

            L.marker([39.2126447,-94.5756337], {icon: mapIcon}).addTo(mymap)
            .bindPopup("");
    };

    

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