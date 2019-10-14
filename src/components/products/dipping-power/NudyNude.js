import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const NudyNude = () => {
    const collections = {
        rows: 4,
        cols: 3,
        names : [
            'NN-1 naked',
            'NN-2 sext',
            'NN-3 crush',
            'NN-4 girlfriend',
            'NN-5 flawless',
            'NN-6 scandalous',
            'NN-7 seduction',
            'NN-8 cheeky',
            'NN-9 desire',
            'NN-10 midnight affair',
            'NN-11 temptation',
            'NN-12 promiscous',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/nudy-nude/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/nudy-nude/banner.jpg"} alt="collection" />
                <div className="container">
                    <video className="inner" controls>
                        <source src={"/images/product-lines/dipping-power/nudy-nude/video.mov"} type="video/mp4" />          
                    </video>
                </div> 

                <div className="collectionGrid">
                    <div className="izq">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/nudy-nude/logo.jpg"} alt="Nudy Nude" />
                            Strip down into your favorite nudes with this collection specially formulated to suit any of your nude fantasies. <br/>
                            Our 2 in 1 power may be used as dip & acrylic to achieve any solid or Ombré goals.
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/nudy-nude/img.jpg"} alt="Nudy Nude" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NudyNude