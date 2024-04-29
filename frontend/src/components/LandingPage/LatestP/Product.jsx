/* eslint-disable react/prop-types */
import Group from '../../../assets/imgs/FeaturedP/Group28.png'
import Vector from '../../../assets/imgs/FeaturedP/Vector.png'
import Search from '../../../assets/imgs/FeaturedP/Search.png'

import './style.scss'

function Product(props) {
    return (
        <>
            <div className='Product-items'>
                <div className='trImg'>
                    <img src={Group} alt="" />
                    <img src={Vector} alt="" />
                    <img src={Search} alt="" />
                </div>
                <img src={props.picture} className='ProductImg' alt="" />
                <div className='Container'>
                    <button>Comfort Handy Craft</button>
                    <p>{props.newPrice}<span style={{ color: 'red', fontSize: '12px' }}>{props.oldPrice}</span></p>
                </div>
            </div>
        </>
    );
}

export default Product;