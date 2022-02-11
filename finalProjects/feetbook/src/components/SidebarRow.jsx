import React from 'react'
import '../css/SidebarRow.css'

function SidebarRow({ src, icon, title }) {
  return (
    <div className='sidebarRow'>
      <p>{title}</p>
    </div>
  )
}

export default SidebarRow