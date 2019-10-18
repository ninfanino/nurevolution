import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const Starlet = () => {
    const collections = {
        rows: 4,
        cols: 3,
        names : [
            'S-1 walk of fame',
            'S-2 spotlight',
            'S-3 glamour',
            'S-4 star is born',
            'S-5 gossip',
            'S-6 showstopper',
            'S-7 it\'s prada',
            'S-8 sunset boulevard',
            'S-9 hold my poodle!',
            'S-10 squeeze me?',
            'S-11 iconic',
            'S-12 hollywood',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/starlet/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/starlet/banner.jpg"} alt="collection" />
                <div className="iframe-container">
                    <iframe className="inner" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/z0MIrZ7hzMs" title="Starlet Collection"></iframe>
                </div> 

                <div className="collectionGrid">
                    <div className="izq">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/starlet/logo.jpg"} alt="starlet" />
                            Step Onto The Scene With These <b>Dazzling Colors</b> Made For A <b>Star Like You!</b>  These powders can be used as <b>Acrylic</b> to form, or <b>Dip</b> into the <b>perfectly elegant colors</b> and watch your <b>nails sparkle!</b>
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/starlet/img.jpg"} alt="starlet" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Starlet