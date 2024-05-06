import plusImage from "../../assets/icons/addImage.png"
import './style.scss'
import { useState } from 'react'

/* eslint-disable no-unused-vars */
function CreateNewBlog(props) {
    const [form, setForm] = useState({
        image: "",
        title: "",
        description: "",
        date: new Date().toLocaleDateString(),
        author: "Surf Auxion"
    })

    function submit(e) {
        e.preventDefault()
        console.log("submit")
    }

    return (
        <div className="new-blog-wrapper">
            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Title" />
                    <small className="help-text">Title of your blog</small>
                    <p className="error"></p>
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <textarea id='description' placeholder="Description"></textarea>
                    <small className="help-text">Description of your blog</small>
                    <p className="error"></p>
                </div>
                <div className="form-control">
                    <div className='blog-img-input-container'>
                        <input id='blog-img-input' type="file" placeholder='Insert your image' />
                        <img src={plusImage} alt="Add image" />
                        <p>Insert your image here</p>
                    </div>
                    <small className="help-text">Image of your blog</small>
                    <p className="error"></p>
                </div>

                <div className="form-control">
                    <button type="submit" className="violet">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CreateNewBlog;