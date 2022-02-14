import React from 'react'
import "../css/Feed.css"
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post/>
        <Post/>
        <Post/>
        
    </div>
  )
}

export default Feed;