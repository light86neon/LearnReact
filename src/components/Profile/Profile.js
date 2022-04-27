import React from "react";
import content from './Profile.module.css';
import MyPosts from "./MyPosts/Post/MyPosts";

const Profile = () => {
    return(
        <div className={content.content}>
            <div className={content.mainPic}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9Xr2iHqlOILkHtKxd5ASBTrJJwT0eHd2PA&usqp=CAU'/>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;
