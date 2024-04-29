import Product from "./Product"
import './style.scss';
import Chair from '../../../assets/imgs/FeaturedP/image1166.png'

function LatestP(props) {
    return (
        <>
            <section className="Latest-section">
                <Product newPrice={'$42.00'} picture={Chair} oldPrice={'$65.00'} />
                <Product newPrice={'$42.00'} picture={Chair} oldPrice={'$65.00'} />
                <Product newPrice={'$42.00'} picture={Chair} oldPrice={'$65.00'} />
            </section>;
        </>
    );
}

export default LatestP;