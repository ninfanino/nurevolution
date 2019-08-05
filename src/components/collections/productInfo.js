import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductInfo = (props) => {
    const { line } = props
    const collection =  {
            'gel': [
                { 
                    name:'Collections NU-01 Trio',
                    photo: 'collectionsNU-01trio.jpg'
                },
                { 
                    name:'Collections NU-02 Superbase',
                    photo: 'collectionsNU-02superbase.jpg'
                },
                { 
                    name:'Collections NU-03 Supertop',
                    photo: 'collectionsNU-03supertop.jpg'
                },
                { 
                    name:'Collections NU-04 Matte Top Gel',
                    photo: 'collectionsNU-04mattetopgel.jpg'
                },
                { 
                    name:'Collections NU-05 Magic Foil Gel',
                    photo: 'collectionsNU-05magicfoilgel.jpg'
                },
                { 
                    name:'Collections NU-06 Whiteout',
                    photo: 'collectionsNU-06whiteout.jpg'
                },
                { 
                    name:'Collections NU-07 Blackout',
                    photo: 'collectionsNU-07blackout.jpg'
                },
                { 
                    name:'Collections NU-08 Ombre Gel',
                    photo: 'collectionsNU-08ombregel.jpg'
                },
                { 
                    name:'Collections NU-09 Tie Dye',
                    photo: 'collectionsNU-09tiedye.jpg'
                }
            ],
            'dipping-power' : [
                { 
                    name:'Collections NUdippingpwder-00 Diamond',
                    photo: 'collectionsNUdippingpwder-00diamond.jpg'
                },
                { 
                    name:'Collections NUdippingpwder-01 Trio',
                    photo: 'collectionsNUdippingpwder-01trio.jpg'
                },
                { 
                    name:'Collections NUdippingpwder-02 Pure Chrome',
                    photo: 'collectionsNUdippingpwder-02purechrome.jpg'
                },
                { 
                    name:'Collections NUdippingpwder-03 High Voltage',
                    photo: 'collectionsNUdippingpwder-03highvoltage.jpg'
                },
                { 
                    name:'Collections NUdippingpwder-05 Nudy Nude',
                    photo: 'collectionsNUdippingpwder-05nudynude.jpg'
                },
                { 
                    name:'Collections NUdippingpwder06 Pearl',
                    photo: 'collectionsNUdippingpwder-06pearl.jpg'
                },
                { 
                    name:'Collections NUdippingpwder-07 Holo Chrome',
                    photo: 'collectionsNUdippingpwder-07holochrome.jpg'
                },
                { 
                    name:'Collections NUdippingpwder-08 Temperature',
                    photo: 'collectionsNUdippingpwder-08Temperature.jpg'
                },
                { 
                    name:'Collections NUdippingpwder-09 Solar',
                    photo: 'collectionsNUdippingpwder-09solar.jpg'
                },
                { 
                    name:'Collections NUdippingpwder-10 Jolly',
                    photo: 'collectionsNUdippingpwder-10jolly.jpg'
                },
                { 
                    name:'Collections NUdippingpwder-11 opal',
                    photo: 'collectionsNUdippingpwder-11opal.jpg'
                },
                { 
                    name:'Collections NUdippingpwder-12 Starlet',
                    photo: 'collectionsNUdippingpwder-12starlet.jpg'
                }
            ],
            'bare-soak' : [
                { 
                    name:'Collections NUbaresoak-01 Baresoak',
                    photo: 'collectionsNUbaresoak-01baresoak.jpg'
                },
                { 
                    name:'Collections NUbaresoak-02 Massage Ointment',
                    photo: 'collectionsNUbaresoak-02massageointment.jpg'
                }
            ]
        }
    
    let itemsCollection = collection[line].map((item, index) => {
        return (
            <div className="collectionGridItem" key={index}>
                <NavLink to={"/product/" + line + "/" + index}>
                    <img src={"/images/product-lines/" + line + "/" + item['photo'] } className="imgProductGrid" alt="Product Line" />
                    <div className="collectionGridName">
                        { item['name'] }
                    </div>
                </NavLink>
            </div>
        )
    })
    
    return(
        <div className="promos">
            <img className="img-slidder" src={"/images/product-lines/" + line + "/mainimage.jpg"} alt="NuRevolution" />

            <div className="container">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>

                <iframe className="inner" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/Xs6hnsPAAEY?playlist=Xs6hnsPAAEY&amp;iv_load_policy=3&amp;enablejsapi=1&amp;disablekb=1&amp;autoplay=0&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;wmode=transparent&amp;origin=https%3A%2F%2Fwww.nurevolutioninc.com&amp;widgetid=3" id="widget4" ></iframe>
                
                <div className="collectionGrid">
                    {itemsCollection}
                </div>

                <div className="btnsContainer">
                    <div className="btnRound">Tutorials</div>

                    <div className="btnRound">Marketing Material</div>
                </div>
            </div>

            
        </div>
    )
}

export default ProductInfo