import "./style.scss"
function Example({ receivedValue }) {
    return (
        <>
            <div className="example">
                <img src="https://www.pinterest.com/pin/1618549862810075/" alt="" />
                <h1 className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, sed?</h1>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, velit. Nihil quos soluta corrupti repudiandae.</p>
                <div>
                    <p>Received value: {receivedValue}</p>
                </div>
            </div>
        </>
    );
}

export default Example;