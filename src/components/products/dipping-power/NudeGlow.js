import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const NudeGlow = () => {
    const collections = {
        rows: 3,
        cols: 2,
        names : [
            'ng1 nude-tastic',
            'ng2 birthday suit',
            'ng3 naked',
            'ng4 incognito',
            'ng5 adore',
            'ng6 sensual',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/nude-glow/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/nude-glow/banner.jpg"} alt="collection" />
                <div className="container">
                    <video className="inner" controls>
                        <source src={"/images/product-lines/dipping-power/nude-glow/video.mov"} type="video/mp4" />          
                    </video>
                </div> 

                <div className="collectionGrid">
                    <div className="der">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/nude-glow/logo.jpg"} alt="nude-glow" />
                            Achieve a timeless day to night glow with our 6 Nude Glow shades.<br/>
                            Keeping you classy in the AM while also electrifying up your night.
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/nude-glow/img.jpg"} alt="nude-glow" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NudeGlow