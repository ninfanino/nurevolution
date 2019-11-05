import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const HoloChrome = () => {
    const collections = {
        rows: 7,
        cols: 6,
        names : [
            'LG-01',
            'LG-02',
            'LG-03',
            'LG-04',
            'LG-05',
            'LG-06',
            'LG-07',
            'LG-19',
            'LG-20',
            'LG-21',
            'LG-22',
            'LG-23',
            'LG-24',
            'LG-25',
            'LG-37',
            'LG-38',
            'LG-39',
            'LG-40',
            'LG-41',
            'LG-42',
            'LG-43',
            'LG-55',
            'LG-56',
            'LG-57',
            'LG-58',
            'LG-59',
            'LG-60',
            'LG-61',
            'LG-73',
            'LG-74',
            'LG-75',
            'LG-76',
            'LG-77',
            'LG-78',
            'LG-79',
            'LG-91',
            'LG-92',
            'LG-93',
            'LG-94',
            'LG-95',
            'LG-96',
            'LG-97',
        ]
    }

    const collections2 = {
        rows: 14,
        cols: 9,
        names : [
            'LG-08',
            'LG-09',
            'LG-10',
            'LG-11',
            'LG-12',
            'LG-13',
            'LG-14',
            'LG-15',
            'LG-16',
            'LG-17',
            'LG-18',
            'LG-26',
            'LG-27',
            'LG-28',
            'LG-29',
            'LG-30',
            'LG-31',
            'LG-32',
            'LG-33',
            'LG-34',
            'LG-35',
            'LG-36',
            'LG-44',
            'LG-45',
            'LG-46',
            'LG-47',
            'LG-48',
            'LG-49',
            'LG-50',
            'LG-51',
            'LG-52',
            'LG-53',
            'LG-54',
            'LG-62',
            'LG-63',
            'LG-64',
            'LG-65',
            'LG-66',
            'LG-67',
            'LG-68',
            'LG-69',
            'LG-70',
            'LG-71',
            'LG-72',
            'LG-80',
            'LG-81',
            'LG-82',
            'LG-83',
            'LG-84',
            'LG-85',
            'LG-86',
            'LG-87',
            'LG-88',
            'LG-89',
            'LG-90',
            'LG-98',
            'LG-99',
            'LG-100',
        ]
    }

    let itemsCollection = [];
    let k2 = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/loose-glitter/" + i + ".jpg"} alt="collection" />);
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/loose-glitter/" + i + "b.jpg"} alt="collection" />);
        for(let j = 1; j <= collections['cols']; j++) {
            itemsCollection.push(<div className="itemName">{ collections2['names'][k2] }</div>);
            k2++;
        }
    }

    let itemsCollection2 = [];
    let k = 0;
    for(let i2 = 8; i2 <= collections2['rows']; i2++) {
        itemsCollection2.push(<img src={"/images/product-lines/dipping-power/loose-glitter/" + i2 + ".jpg"} alt="collection" />);
        itemsCollection2.push(<img src={"/images/product-lines/dipping-power/loose-glitter/" + i2 + "b.jpg"} alt="collection" />);
            
        if(i2 < 14) {
            itemsCollection2.push(<img src={"/images/product-lines/dipping-power/loose-glitter/" + i2 + "c.jpg"} alt="collection" />);
        } else {
            itemsCollection2.push(<div className="clearfix"></div>);
        }
        for(let j2 = 1; j2 <= collections2['cols']; j2++) {
            itemsCollection2.push(<div className="itemName">{ collections2['names'][k] }</div>);
            k++;
        }
    }

    return(
        <div>
            <Header/>
            <div className="promos">
                <img className="img-slidder" src={"/images/product-lines/dipping-power/loose-glitter/banner.jpg"} alt="collection" />
                
                <div className="collectionGrid looseGlitter expand">
                    <div className="izq">
                        <div className="info">
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/loose-glitter/img.jpg"} alt="loose-glitter" />
                        </div>
                    </div>
                </div>

                <div className="collectionGrid looseGlitter expand">
                    <div className="central">
                        
                            <div className="rowItems">
                                { itemsCollection2 }
                            </div>
                       
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HoloChrome