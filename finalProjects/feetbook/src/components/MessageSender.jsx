import { Avatar } from '@mui/material'
import React from 'react'
import '../css/MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


function MessageSender() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='messageSender'>
        <div className='messageSender__top'>
            <Avatar />
            <form>
                <input type="text" 
                    className='messageSender__input'
                    placeholder={`What's on your mind?`} />
                <input type="text"
                    placeholder='Image URL (Optional)' />
                <button onClick={handleSubmit} type = 'submit'>
                    Hidden Submit
                </button>
            </form>
        </div>
        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <VideocamIcon style={{ color: "red"}} />
                <h3>Live Video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibraryIcon style={{color: "green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender__option">
                <InsertEmoticonIcon style={{color: "orange"}} />
                <h3>Feeling/Activity</h3>
            </div>

        </div>
    </div>
  )
}   

export default MessageSender