function Product(props) {
    return (
        <>
            <div className="product">
                <img src={props.picture} alt="" />
                <p className="first">{props.title}</p>
                <p className="text">{props.text}</p>
            </div>
        </>
    );
}

export default Product;