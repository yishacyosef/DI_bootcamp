import React from 'react';
import '../css/Sidebar.css'
import SidebarRow from './SidebarRow';

function Sidebar() {
    return(
        <div className='sidebar'>
            <SidebarRow title= 'Pages' />
            <SidebarRow title= 'Friends' />
            <SidebarRow title= 'Messenger' />

        </div>
    )
}

export default Sidebar;
