import plusImage from "../../assets/icons/addImage.png"
import './style.scss'
import { useState } from 'react'
import { context } from '../../state'
import { useContext } from 'react'

/* eslint-disable no-unused-vars */
function CreateNewBlog(props) {
    const state = useContext(context)

    const [form, setForm] = useState({
        image: plusImage,
        title: "",
        description: "",
        date: new Date().toLocaleDateString(),
        author: "Surf Auxion"
    })
    //form.description ====52
    //you should give function updateForm in onChange ===54

    function updateForm(e) {
        if (e.target.name === "image") {
            const reader = new FileReader()
            const file = e.target.files[0]
            reader.readAsDataURL(file)
            reader.onload = () => {
                setForm({ ...form, image: reader.result })
                state.dispatch({ type: 'setImage', value: reader.result })
            }
        } else {
            setForm({ ...form, [e.target.name]: e.target.value })
        }
    }
0
    function submit(e) {
        e.preventDefault()
        console.log("submit")
    }

console.log(state.image)



    return (
        <div className="new-blog-wrapper">
            <form onSubmit={submit}>
                {/* <img src={state.image} alt="" /> */}
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Title"
                        onChange={(e) => { state.dispatch({ type: "saveText", value: e.target.value }) }}
                        name="title" value={state.titleText}
                    />
                    <small className="help-text">Title of your blog</small>
                    <p className="error"></p>
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <textarea id='description' placeholder="Description"
                        name="description" onChange={(e) => { state.dispatch({ type: 'setDescription', value: e.target.value }) }}
                        value={state.descriptionText}
                    ></textarea>
                    <small className="help-text">Description of your blog</small>
                    <p className="error"></p>
                </div>
                <div className="form-control">
                    {/* <img src={form.image} alt="" width={30} height={30} />
                    <img src={state.image} alt="" width={30} height={30} /> */}
                    <div className='blog-img-input-container'>
                        <input id='blog-img-input' type="file" placeholder='Insert your image'
                            name="image" onChange={updateForm}
                        />
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