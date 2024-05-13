import { useState, useContext } from "react";
import Heading from "../common/Heading";
import CreateNewBlog from "./CreateNewBlog.jsx";
import Post from "./Post.jsx";
import Picture from "../../assets/imgs/Posts/girl.png";
import plusImage from "../../assets/icons/addImage.png"
import { context } from "../../state";
import "./style.scss";


function Blog(props) {
  const state = useContext(context);

  const [form, setForm] = useState({
    image: Picture,
    title: "",
    description: "",
    date: new Date().toLocaleDateString(),
    author: "Surf Auxion"
  })

  return (
    <div className="blog-wrapper">
      <Heading title={"Blog Page"} page={"Blog page"} />
      <div className="btn-div">
        <button
          onClick={(e) => { state.dispatch({ type: "setActivatedCreatePage" }) }}
          className={(state.activatedCreatePage ? "green" : 'gray') + " swticher"}
        >
          Create new blog
        </button>
        <button
          onClick={(e) => { state.dispatch({ type: "setActivatedCreatePage" }) }}
          className={(state.activatedCreatePage ? "gray" : 'green') + " swticher"}
        >
          Show blogs
        </button>
      </div>


      {state.activatedCreatePage ? (
        <div className="Blog-items-crt">
          <CreateNewBlog form={form} setForm={setForm} />
          <Post
            picture={form.image}
            title={form.title}
            text={form.description}
            username={form.author}
            date={new Date().toLocaleDateString()}
          />
        </div>
      ) : (
        <Post
          picture={Picture}
          title={"Mauris at orci non vulputate diam tincidunt nec."}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
          }
          username={"Surf Auxion"}
          date={"Aug 09 2020"}
        />
      )}
    </div>
  );
}

export default Blog;
