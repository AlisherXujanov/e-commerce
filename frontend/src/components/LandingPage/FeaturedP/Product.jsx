/* eslint-disable react/prop-types */
import Vector from '../../../assets/imgs/FeaturedP/Vector.png'
import Group from '../../../assets/imgs/FeaturedP/Group28.png'
import Search from '../../../assets/imgs/FeaturedP/Search.png'
import './style.scss'
function Product(props) {
    return (
        <>
            <div className="product-item">
                <div className='trImg'>
                    <img src={Group} alt="" />
                    <img src={Vector} alt="" />
                    <img src={Search} alt="" />
                </div>
                <img className='ProductImg'src={props.picture} alt="Chair" />
                <button>Veiw Details</button>
                <div className="container">
                    <h3>{props.title}</h3>
                    <div className="colors">
                        <div className="green"></div>
                        <div className="red"></div>
                        <div className="blue"></div>
                    </div>
                    <p className="code">{props.code}</p>
                    <p className="cost">{props.cost}</p>
                </div>
            </div>
        </>
    );
}

export default Product;