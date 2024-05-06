import vec1 from '../../assets/icons/Vector3.png'
import vec2 from '../../assets/icons/Vector3.png'
function Post(props) {
    return (
        <>
            <div className="Post">
                <img src={props.Picture} alt="" />
                <div className="items">
                    <div className="info"><span className="sp1"><img src='' alt="" />{props.username}</span><span className="sp2">{props.date}</span></div>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    );
}

export default Post;