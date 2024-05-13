import { useState } from "react";
import Heading from "../common/Heading";
import CreateNewBlog from "./CreateNewBlog.jsx";
import Post from "./Post.jsx";
import Picture from "../../assets/imgs/Posts/girl.png";
import { context } from "../../state";
import { useContext } from "react";
const imagepic = 'https://i.pinimg.com/236x/b8/79/31/b87931530891195dfedcca2e1406ac5b.jpg'
import "./style.scss";
function Blog(props) {
  const state = useContext(context);
  // const [activatedCreatePage, setActivatedCreatePage] = useState(false)

  return (
    <div className="blog-wrapper">
      <Heading title={"Blog Page"} page={"Blog page"} />
      <div className="btn-div">
        <button
          onClick={(e) => {
            state.dispatch({ type: "setActivatedCreatePage" });
          }}
          // style={{ backgroundColor: state.activatedCreatePage ? 'green' : 'grey' }}
          className={(state.activatedCreatePage ? "green" : 'gray') + " swticher"}

        >
          Create new blog
        </button>
        <button
          onClick={(e) => {
            state.dispatch({ type: "setActivatedCreatePage" });
          }}
          className={(state.activatedCreatePage ? "gray" : 'green') + " swticher"}

        >
          Show blogs
        </button>
      </div>

      {/* <button
        onClick={(e) => {
          state.dispatch({ type: "setActivatedCreatePage" });
        }}
        className={(state.activatedCreatePage ? "green" : "red") + " swticher"}
      >
        {state.activatedCreatePage ? "Create new blog" : "Show blogs"}
      </button> */}
      {state.activatedCreatePage ? (
        <div className="Blog-items-crt">
          <CreateNewBlog />
          <Post
            picture={state.image ? state.image : 'https://i.pinimg.com/564x/09/62/a3/0962a30b004c0f94c7ca9d7066867927.jpg'}
            title={state.titleText}
            text={state.descriptionText}
            username={"Surf Auxion"}
            date={"Aug 09 2020"}
          />
        </div>
      ) : (
        // <div className="all-blog-content">
        //     <p>No blogs yet ...</p>
        // </div>
        <Post
          picture={imagepic}
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
