import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const HightVoltage = () => {
    const collections = {
        rows: 4,
        cols: 3,
        names : [
            'HV-01 unplugged',
                        'HV-02 tesla',
                        'HV-03 heart beat',
                        'HV-04 neon dreams',
                        'HV-05 transformer',
                        'HV-06 electric boom',
                        'HV-07 limewire',
                        'HV-08 kinetic energy',
                        'HV-09 heart acid wash',
                        'HV-10 neon shockwave',
                        'HV-11 sparked!',
                        'HV-12 amp!',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/high-voltage/" + i + ".jpg"} alt="collection" />);
        for(let j = 1; j <= collections['cols']; j++) {
            itemsCollection.push(<div className="itemName">{ collections['names'][k] }</div>);
            console.log(collections['names'][k]);
            k++;
        }
    }

    return(
        <div>
            <Header/>
            <div className="promos">
                <img className="img-slidder" src={"/images/product-lines/dipping-power/high-voltage/banner.jpg"} alt="collection" />
                <div className="iframe-container">
                    <iframe className="inner" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/tYbesdHEOlA" title="High Voltage Collection"></iframe>
                </div>  

                <div className="collectionGrid highVoltage">
                    <div className="der">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/high-voltage/logo.jpg"} alt="Magical Magnetic" />
                            Surge through the <b>High Voltage Collection</b> as you create your bold and neon designs by <b>dipping or sculpting</b> with these fine powders. These <b>brigh colors</b> are sure to turn heads and <b>catch a lot of bring attention!</b>
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/high-voltage/img.jpg"} alt="Magical Magnetic" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HightVoltage