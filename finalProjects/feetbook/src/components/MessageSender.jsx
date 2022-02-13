import { Avatar } from '@mui/material'
import React from 'react'
import '../css/MessageSender.css'

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
                    placeholder={`What's on your mind`} />
                <input type="text"
                    placeholder='Image URL (Optional)' />
                <button onClick={handleSubmit} type = 'submit'>
                    Hidden Submit
                </button>
            </form>
        </div>
        <div className="messageSender__bottom">

        </div>
    </div>
  )
}   

export default MessageSender