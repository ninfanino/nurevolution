import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const SolarGlitter = () => {
    const collections = {
        rows: 4,
        cols: 3,
        names : [
            'SL1 aruba',
            'SL2 ibiza',
            'sl3 bora bora',
            'sl4 bali',
            'sl5 santorini',
            'sl6 wanderlust',
            'sl7 havana',
            'sl8 tahiti',
            'sl9 barbados',
            'sl10 mykonos',
            'sl11 maldives',
            'sl12 fiji',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/solar-glitter/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/solar-glitter/banner.jpg"} alt="collection" />
                <div className="container">
                    <video className="inner" controls>
                        <source src={"/images/product-lines/dipping-power/solar-glitter/video.mov"} type="video/mp4" />          
                    </video>
                </div> 

                <div className="collectionGrid">
                    <div className="der">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/solar-glitter/logo.jpg"} alt="solar-glitter" />
                            Add some sunshine to you finger tips with 12 different Solar Glitter color.<br/>
                            Each color will transform under sunlight giving you a dazzling intriguing look.
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/solar-glitter/img.jpg"} alt="solar-glitter" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SolarGlitter