import plusImage from "../../assets/icons/addImage.png"
import './style.scss'
import { context, KeyboardSymbols } from '../../state'
import { useContext } from 'react'



function CreateNewBlog(props) {
    const state = useContext(context)

    // ----------------- This is the old way of handling state -----------------
    // This comes from props from now on
    // const [form, setForm] = useState({
    //     image: plusImage,
    //     title: "",
    //     description: "",
    //     date: new Date().toLocaleDateString(),
    //     author: "Surf Auxion"
    // })
    // --------------------------------------------------------------------------

    function updateForm(e) {
        const fieldName = e.target.name
        if (fieldName === "image") {
            const reader = new FileReader()
            const file = e.target.files[0]
            reader.readAsDataURL(file)
            reader.onload = () => {
                props.setForm({ ...props.form, image: reader.result })
                state.dispatch({ type: 'setImage', value: reader.result })
            }
        } else {
            let val = e.target.value
            let lastLetter = val.charAt(val.length - 1)
            if (lastLetter != "" && KeyboardSymbols.includes(lastLetter)) {
                props.setForm({ 
                    ...props.form,
                    errors: {...props.form.errors, [fieldName]: true} 
                })
                setTimeout(() => {
                    props.setForm({ 
                        ...props.form,
                        errors: {...props.form.errors, [fieldName]: false} 
                    })
                }, 2000)
            } else {
                props.setForm({ 
                    ...props.form, 
                    [fieldName]: val, 
                    errors: {...props.form.errors, [fieldName]: false} })
            }
        }
    }

    function submit(e) {
        e.preventDefault()
        console.log("submit")
    }


    return (
        <div className="new-blog-wrapper">
            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Title"
                        onChange={updateForm}
                        name="title" value={props.form.title}
                    />
                    {props.form.errors.title
                        ?
                        <p className="error">Title can not contain special characters</p>
                        :
                        <small className="help-text">Title of your blog</small>
                    }
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <textarea id='description' placeholder="Description"
                        name="description" onChange={updateForm}
                        value={props.form.description}
                    ></textarea>
                    {props.form.errors.description == true
                        ?
                        <p className="error">Description can not contain special characters</p>
                        :
                        <small className="help-text">Description of your blog</small>
                    }
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