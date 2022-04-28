import React from "react";
import post from './Post.module.css'

const Post = (props) => {
    return(
        <div className={post.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEpglmS71ZNWrUh3t9Y_bCfMvo4d3VNc9Yg&usqp=CAU'/>
            <div>
                {props.message}
            </div>
            <span>
                like {props.likeCount}
            </span>
        </div>
    )
}

export default Post;
