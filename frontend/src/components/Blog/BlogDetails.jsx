import { useParams } from "react-router-dom";
import { context } from "../../state";
import { useContext } from "react";
import Post from "./Post";

function BlogDetails(props) {
    const state = useContext(context)
    const { id } = useParams()

    let photo = state.photos.find(photo => photo.id === parseInt(id))
    let user = state.photos.find(user => user.id === parseInt(id))

    return (
        <div className="single-blog-details-wrapper">
            <Post 
                postID={photo.id}
                picture={photo.thumbnailUrl}
                title={photo.title}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."}
                username={user.name}
                date={"Aug 09 2020"}
            />
        </div>
    );
}

export default BlogDetails;