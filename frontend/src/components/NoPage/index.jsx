import './styles.scss'
import NotFoundImage from '../../assets/imgs/404.png'
import Brands from '../../assets/imgs/brands.png'
import Heading from "../common/Heading"

const NoPage = () => {
    const btnSize = { "width": '150px', "height": '40px' }
    return (
        <div className='no-page-wrapper'>
            <Heading title={"404 Not Found"} page={"404 Not Found"} />
            <img
                src={NotFoundImage} alt="Not Found"
                width={600} height={500}
            />
            <a style={btnSize} className='danger-btn' href="/">
                Back To Home
            </a>
            <img className='brands-img' src={Brands} alt="Not Found" />
        </div>
    )
};

export default NoPage;