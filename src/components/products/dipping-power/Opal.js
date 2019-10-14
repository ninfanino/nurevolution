import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const Opal = () => {
    const collections = {
        rows: 4,
        cols: 3,
        names : [
            'OP-01 light nudity',
            'OP-02 sheer violet',
            'OP-03 ocean',
            'OP-04 champagne shower',
            'OP-05 boo\'d up',
            'OP-06 so i cry',
            'OP-07 frozen mango',
            'OP-08 mermaid\'s are real',
            'OP-09 rose',
            'OP-10 smooth talker',
            'OP-11 pastel',
            'OP-12 mellow',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/opal/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/opal/banner.jpg"} alt="collection" />
                <div className="container">
                    <video className="inner" controls>
                        <source src={"/images/product-lines/dipping-power/opal/video.mov"} type="video/mp4" />          
                    </video>
                </div> 

                <div className="collectionGrid">
                    <div className="der">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/opal/logo.jpg"} alt="Opal" />
                            Crack open the sheer beauty of opals with this collection designes to be used as dip or acrylic and let your shimmering dreams shine!
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/opal/img.jpg"} alt="Opal" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Opal