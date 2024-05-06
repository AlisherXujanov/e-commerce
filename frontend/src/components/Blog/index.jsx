import Heading from "../common/Heading"
import './style.scss'
import { useState } from 'react'
import CreateNewBlog from './CreateNewBlog.jsx'
import Post from "./Post.jsx"
import Picture from '../../assets/imgs/Posts/girl.png'
/* eslint-disable no-unused-vars */
function Blog(props) {
    const [activatedCreatePage, setActivatedCreatePage] = useState(false)


    return (
        <div className="blog-wrapper">
            <Heading title={"Blog Page"} page={"Blog page"} />

            <button
                onClick={(e) => { setActivatedCreatePage(!activatedCreatePage) }}
                className={(activatedCreatePage ? "green" : "red") + " swticher"}
            >
                {activatedCreatePage ? "Create new blog" : "Show blogs"}
            </button>


            {
                activatedCreatePage
                    ?
                    (
                        <CreateNewBlog />
                    )
                    :
                    (
                        // <div className="all-blog-content">
                        //     <p>No blogs yet ...</p>
                        // </div>
                        <Post Picture={Picture} title={'Mauris at orci non vulputate diam tincidunt nec.'}
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.'}
                            username={'Surf Auxion'}
                            date={'Aug 09 2020'}
                        />

                    )
            }
        </div>
    );
}


export default Blog;