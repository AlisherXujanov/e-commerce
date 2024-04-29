import Product from './Product';
import Delivery from '../../../assets/imgs/Shopex/free-delivery 1.png'
import Support from '../../../assets/imgs/Shopex/24-hours-support 1.png'
import Cashback from '../../../assets/imgs/Shopex/cashback 1.png'
import Quality from '../../../assets/imgs/Shopex/premium-quality 1.png'
import './style.scss'
function Shopex(props) {
    return (
        <section className="Shopex-products">
            <Product picture={Delivery} title={'24/7 Support'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'} />
            <Product picture={Cashback} title={'24/7 Support'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'} />
            <Product picture={Quality} title={'24/7 Support'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'} />
            <Product picture={Support} title={'24/7 Support'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'} />
        </section>
    );
}
export default Shopex