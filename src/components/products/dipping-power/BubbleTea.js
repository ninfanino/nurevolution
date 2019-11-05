import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const BubbleTea = () => {
    const collections = {
        rows: 4,
        cols: 3,
        names : [
            '123a strawberry blend',
            '123b rose milk',
            '124a crystal pearl',
            '124b can i have a sip?',
            '125a thai iced',
            '125b mangolicious',
            '126a matcha please!',
            '126b green tea slush',
            '127a order up!',
            '127b bubblicious',
            '128a drink me!',
            '128b extra boba please!',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/bubble-tea/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/bubble-tea/banner.jpg"} alt="collection" />
                

                <div className="collectionGrid bubbletea">
                    <div className="izq">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/bubble-tea/logo.jpg"} alt="bubble-tea" />
                            Hold your favorite <b>cup of bubble tea</b> up with a <b>bubblelicious</b> set of nails inspired by your best-loved all year <b>round refresher.</b>
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/bubble-tea/img.jpg"} alt="bubble-tea" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BubbleTea