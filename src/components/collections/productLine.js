import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductLine = (props) => {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis gravida blandit. Proin molestie finibus felis, quis placerat erat volutpat nec. Praesent ultricies enim aliquam, ullamcorper ex id, convallis augue. In dui purus, gravida sit amet ante gravida, ultricies eleifend quam. Aenean rhoncus eros nunc, sit amet viverra sapien hendrerit cursus. Morbi et scelerisque sem, eget vulputate metus. Sed sem urna, porttitor id tortor nec, eleifend egestas neque.
                </p>

                <div className="title">Collections</div>
                <div className="collectionGrid">
                    {itemsCollection}
                </div>
            </div>

            
        </div>
    )
}

export default ProductLine