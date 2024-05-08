/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Heading from "../common/Heading"
import CreateNewBlog from './CreateNewBlog.jsx'
import Post from "./Post.jsx"
import Picture from '../../assets/imgs/Posts/girl.png'
import './style.scss'
import Example from './Example.jsx'
function Blog(props) {
    const [activatedCreatePage, setActivatedCreatePage] = useState(false)




    
    const [valueFromA, setValueFromA] = useState('');

    const handleValueChange = (newValue) => {
        setValueFromA(newValue);
    };

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
                        <div className="all-blog-content">
                            <CreateNewBlog onChange={handleValueChange}/>
                            <Example receivedValue={valueFromA}/>
                        </div>

                    )
                    :
                    (
                        // <div className="all-blog-content">
                        //     <p>No blogs yet ...</p>
                        // </div>
                        <Post picture={Picture} title={'Mauris at orci non vulputate diam tincidunt nec.'}
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