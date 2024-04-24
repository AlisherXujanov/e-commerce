/* eslint-disable react/prop-types */

function Product(props) {
    return (
        <>
            <div className="product-item">
                <img src={props.picture} alt="Chair" />
                <div className="container">
                    <h3>{props.title}</h3>
                    <div className="colors">
                        <span className="green"></span>
                        <span className="red"></span>
                        <span className="blue"></span>
                    </div>
                    <p className="code">{props.code}</p>
                    <p className="cost">{props.cost}</p>
                </div>
            </div>
        </>
    );
}

export default Product;