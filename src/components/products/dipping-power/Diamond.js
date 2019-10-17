import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const Diamond = (props) => {
    const collections = {
        rows: 2,
        cols: 3,
        names : [
            'D-01 Shine On \'Em',
            'D-02 Pure Diamond',
            'D-03 Girl\'s Best friend',
            'D-04 Ice ice baby',
            'D-05 Bling It on',
            'D-06 Bougee',
            'D-07 Forever and Ever',
            'D-08 Ilegally Pink',
            'D-09 Find Me!',
            'D-10 Girls Love Diamonds',
            'D-11 Ling Ling Loves',
            'D-12 Bling Bling',
            'D-13 Sparkling Glass',
            'D-14 Diamond Heart',
            'D-15 Chandelier',
            'D-16 Crystalized',
            'D-17 Unbreakable',
            'D-18 Forever'
        ]
    }

    let itemsCollection = [];
    let itemsCollection2 = [];
    let itemsCollection3 = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/diamond/" + i + ".jpg"} alt="collection" />);
        for(let j = 1; j <= collections['cols']; j++) {
            let name = collections['names'][k].split(' ');
            itemsCollection.push(<div className="itemName"><span>{ name[0] }</span> { name[1] }</div>);
            k++;
        }

    }
    
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection2.push(<img src={"/images/product-lines/dipping-power/diamond/silver" + i + ".jpg"} alt="collection" />);
        for(let j = 1; j <= collections['cols']; j++) {
            let name = collections['names'][k].split(' ');
            itemsCollection2.push(<div className="itemName"><span>{ name[0] }</span> { name[1] }</div>);
            k++;
        }
    }

    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection3.push(<img src={"/images/product-lines/dipping-power/diamond/rose" + i + ".jpg"} alt="collection" />);
        for(let j = 1; j <= collections['cols']; j++) {
            let name = collections['names'][k].split(' ');
            itemsCollection3.push(<div className="itemName"><span>{ name[0] }</span> { name[1] }</div>);
            k++;
        }
    }

    return(
        <div>
            <Header/>
            <div className="promos">
                <img className="img-slidder" src={"/images/product-lines/dipping-power/diamond/banner.jpg"} alt="collection" />
                <div className="iframe-container">
                    <iframe className="inner" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/yepdQY-cXKQ" title="Magical Magnetic"></iframe>
                </div> 

                <div className="collectionGrid diamondGrid">
                    <div className="der">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/diamond/logo.jpg"} alt="Magical Magnetic" />
                            <i><b>8 Lucky Winners</b> will find their <b>hidden treasure inside!</b></i>
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/diamond/img.jpg"} alt="Magical Magnetic" />
                        </div>
                    </div>
                </div>
                <div className="collectionGrid diamondGrid">
                    <div className="izq">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/diamond/logo.jpg"} alt="Magical Magnetic" />
                            <i><b>8 Lucky Winners</b> will find their <b>hidden treasure inside!</b></i>
                            <div className="rowItems">
                                { itemsCollection2 }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/diamond/silverimg.jpg"} alt="Magical Magnetic" />
                        </div>
                    </div>
                </div>

                <div className="collectionGrid diamondGrid">
                    <div className="der">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/diamond/logo.jpg"} alt="Magical Magnetic" />
                            <i><b>8 Lucky Winners</b> will find their <b>hidden treasure inside!</b></i>
                            <i>"Forget about the perfect pair of heels because you'll be sure to steal the show with this <b>Diamond collection</b></i>
                            <div className="rowItems">
                                { itemsCollection3 }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/diamond/roseimg.jpg"} alt="Magical Magnetic" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Diamond