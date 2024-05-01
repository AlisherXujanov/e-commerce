import './style.scss'

/* eslint-disable no-unused-vars */
function CreateNewBlog(props) {

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
                    <button type="submit" className="violet">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CreateNewBlog;