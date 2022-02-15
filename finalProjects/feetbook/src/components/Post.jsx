import { Avatar } from '@mui/material';
import React from 'react';
import '../css/Post.css'

function Post({profilePic, image, username, timestamp, message }) 
    {
  return (
    <div className='post'>
        <div className="post__top">
            <Avatar src= {profilePic}
            className= 'post__avatar' />
            <div className="post_topInfo">
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}
                </p>
            </div>
        </div>
        <div className="post__bottom">
            <p>{message}</p>
        </div>
        <div className="post__image">
            <img src={image} alt="" />  
        </div>
        <div className="post__options">
            <div className="option">
                <thumbUpIcon />
                <p>Like</p>
            </div>
        </div>
    </div>
  )
}

export default Post