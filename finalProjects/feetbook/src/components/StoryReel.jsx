import React from 'react'
import'../css/StoryReel.css'
import Story from './Story'

function StoryReel() {
  return (
    <div className='storyReel'>
    <Story 
    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/1920px-KeizersgrachtReguliersgrachtAmsterdam.jpg"   
    profileSrc= "https://www.anumuseum.org.il/wp-content/uploads/Menasseh_ben_Israel-1200.jpg"
    title = "Menasse ben Israel "/>
    </div>
  )
}

export default StoryReel