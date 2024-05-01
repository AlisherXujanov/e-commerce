import Heading from "../common/Heading"
import './style.scss'
import { useState } from 'react'
import CreateNewBlog from './CreateNewBlog.jsx'

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
                        <div className="all-blog-content">
                            <p>No blogs yet ...</p>
                        </div>
                    )
            }
        </div>
    );
}

export default Blog;