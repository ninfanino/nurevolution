import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const MagicalMagnetic = (props) => {
    const collections = {
        rows: 4,
        cols: 2,
        names : [
            'MM 11 charmed',
            'MM 12 mystic',
            'MM 13 moonglow',
            'MM 14 sorcery',
            'MM 15 divine',
            'MM 16 bewitched',
            'MM 17 illusion',
            'MM 18 dazed',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/magical-magnetic/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/magical-magnetic/banner.jpg"} alt="collection" />
                <div className="iframe-container">
                    <iframe className="inner" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/ViGlqDJN96A" title="Twinkle Collection"></iframe>
                </div> 

                <div className="collectionGrid">
                    <div className="der">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/magical-magnetic/logo.jpg"} alt="Magical Magnetic" />
                            Create a mystical light-catching Magical Magnetic effects that shifts colors under the change of light attracting all the attention
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/magical-magnetic/img.jpg"} alt="Magical Magnetic" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MagicalMagnetic