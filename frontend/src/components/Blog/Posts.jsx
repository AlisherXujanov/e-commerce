import { useEffect, useContext } from 'react'
import { context, BASE_URL } from '../../state'
import Post from './Post'


function Posts(props) {
    const state = useContext(context)

    useEffect(() => {
        // payload ==>  anything  =>  Aziz
        fetch(BASE_URL + "/photos").then(res => res.json())
            .then(data => {
                state.dispatch({ type: 'setPhotos', payload: data })
            })
        fetch(BASE_URL + "/users").then(res => res.json())
            .then(data => {
                state.dispatch({ type: 'setUsers', payload: data })
            })
    }, [])

    return (
        <main className="all-posts-wrapper">
            {
                state.photos.slice(0, 10).map(photo => {
                    return (
                        <Post
                            key={photo.id}
                            postID={photo.id}
                            picture={photo.thumbnailUrl}
                            title={photo.title}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."}
                            username={state.users.find(user => user.id === photo.id).name}
                            date={"Aug 09 2020"}
                            showMore={true}
                            blogTextSize={true}

                        />
                    )
                })
            }

        </main>
    );
}

export default Posts;