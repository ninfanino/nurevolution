import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const Lollipop = () => {
    const collections = {
        rows: 4,
        cols: 3,
        names : [
            '129a whirly swirly',
            '129b juicy',
            '130a sugar rush',
            '130b sweet tooth',
            '131a sucker for you',
            '131b oh lolli lolli',
            '131b lick-lick me',
            '132a sweet spot',
            '132b bon bon',
            '131b dulce',
            '132a sweet but spycho',
            '132b lick the wrapper',
            
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/lollipop/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/lollipop/banner.jpg"} alt="collection" />
                

                <div className="collectionGrid">
                    <div className="der">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/lollipop/logo.jpg"} alt="lollipop" />
                            Hit your sweet spot with this irresisitbly fun Lollipop Collection Inspired by colors of the rainbow
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/lollipop/img.jpg"} alt="lollipop" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Lollipop