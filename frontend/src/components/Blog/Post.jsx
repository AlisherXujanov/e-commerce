/* eslint-disable react/prop-types */
import vec1 from '../../assets/icons/Vector3.png'
import vec2 from '../../assets/icons/Vector3.png'
import { context } from "../../state";
import { useContext } from "react";
function Post(props) {
    const state = useContext(context);

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
            </div>
        </>
    );
}

export default Post;