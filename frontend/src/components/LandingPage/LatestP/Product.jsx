import './style.scss'
import Vector from '../../../assets/imgs/FeaturedP/Vector.png'
import Group from '../../../assets/imgs/FeaturedP/Group28.png'
import Search from '../../../assets/imgs/FeaturedP/Search.png'
import ImageChair from '../../../assets/imgs/LatestP/image1166.png'
function Products() {
    return (
        <>
            <div className='Product-items'>
                <div className='trImg'>
                    <img src={Group} alt="" />
                    <img src={Vector} alt="" />
                    <img src={Search} alt="" />
                </div>
                <img src={ImageChair} className='ProductImg' alt="" />
                <div className='Container'>
                    <button>Comfort Handy Craft</button>
                    <p>$42.00<span style={{ color: 'red', fontSize: '12px' }}>$65.00</span></p>
                </div>
            </div>
        </>
    );
}

export default Products;