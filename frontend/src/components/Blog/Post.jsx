import { Link } from 'react-router-dom'


function Post(props) {
    return (
        <>
            <div className="Post">
                <img src={props.picture} alt="" />
                <div className="items">
                    <div className="info">
                        <span className="sp1">
                            {props.username}
                        </span>
                        <span className="sp2">{props.date}</span>
                    </div>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>

                <Link to={"/blogs/" + props.postID} >
                    <b style={{color:'#151875'}}>See More<span style={{color:'red'}}>●</span></b>
                </Link>
                <br />
                <br />
            </div>
        </>
    );
}

export default Post;