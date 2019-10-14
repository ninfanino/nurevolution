import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const RedSoul = () => {
    const collections = {
        rows: 4,
        cols: 3,
        names : [
            '111a devil in red',
            '111b fanciful',
            '112a',
            '112b l-o-v-e',
            '113a xoxo',
            '113b mwah!',
            '114a lust',
            '114b seductive',
            '115a me+you',
            '115b heart throb',
            '116a one-of-a-kind',
            '116b soulmate',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/red-soul/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/red-soul/banner.jpg"} alt="collection" />
                
                <div className="collectionGrid">
                    <div className="izq">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/red-soul/logo.jpg"} alt="red-soul" />
                            Empower yourself & let your inner Red Soul awaken with love, passion & desire.
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/red-soul/img.jpg"} alt="red-soul" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RedSoul