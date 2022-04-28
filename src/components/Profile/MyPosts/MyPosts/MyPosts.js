import React from "react";
import Post from "../Post/Post";

const MyPosts = () => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
                New post
            </div>
            <div>
              <Post message="Hi my dear friend" likeCount="10" />
            </div>
            <div>
              <Post message="Hello, how are you?"  likeCount={15}/>
            </div>

        </div>
    )
}

export default MyPosts;
