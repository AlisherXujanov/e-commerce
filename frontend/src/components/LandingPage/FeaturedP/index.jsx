import Chair from "../../../assets/imgs/FeaturedP/chair.png"
import Product from "./Product"
import "./style.scss"

function FeaturedP() {
    return (
        <>

            <section className="featured-products">
                <Product title={"Contilever Chair"} picture={Chair} code={"Code - Y523201"} cost={"$42.00"} />
                <Product title={"Contilever Chair"} picture={Chair} code={"Code - Y523201"} cost={"$42.00"} />
                <Product title={"Contilever Chair"} picture={Chair} code={"Code - Y523201"} cost={"$42.00"} />
                <Product title={"Contilever Chair"} picture={Chair} code={"Code - Y523201"} cost={"$42.00"} />
            </section>
        </>
    )
}

export default FeaturedP;