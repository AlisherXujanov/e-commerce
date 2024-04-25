import Product from "./Product";
import './style.scss';
function LatestP() {
    return (
        <>
            <section className="Latest-section">
                    <Product/>
                    <Product/>
                    <Product/>
            </section>;
        </>
    );
}

export default LatestP;