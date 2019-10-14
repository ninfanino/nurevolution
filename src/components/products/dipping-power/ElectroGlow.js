import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const ElectoGlow = () => {
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
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/electro-glow/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/electro-glow/banner.jpg"} alt="collection" />
                <div className="iframe-container">
                    <iframe className="inner" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/ViGlqDJN96A" title="Twinkle Collection"></iframe>
                </div> 

                <div className="collectionGrid">
                    <div className="der">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/electro-glow/logo.jpg"} alt="electro-glow" />
                            Let your creativity glow & electrify your style with the high-voltage Neon Collection.
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/electro-glow/img.jpg"} alt="electro-glow" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ElectoGlow