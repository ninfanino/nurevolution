import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const Pearl = () => {
    const collections = {
        rows: 3,
        cols: 2,
        names : [
            '43h lustrous',
            '44h hidden treasure',
            '45h pearly mint',
            '46h eyris pearl',
            '47h silk purple',
            '48h luminous',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/pearl/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/pearl/banner.jpg"} alt="collection" />
                <div className="iframe-container">
                    <iframe className="inner" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/ViGlqDJN96A" title="Twinkle Collection"></iframe>
                </div> 

                <div className="collectionGrid">
                    <div className="izq">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/pearl/logo.jpg"} alt="pearl" />
                            Drench yourself with this 3 in 1 Pearl Hologram collection made for Glitter, Acrylic, Dip, and Hologram buff application.
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/pearl/img.jpg"} alt="pearl" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Pearl