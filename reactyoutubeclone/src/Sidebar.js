import React from 'react';
import SidebarRow from './SidebarRow';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="SideBar">
            <div>other element</div>

            <SidebarRow title="Home"/>
            <SidebarRow title="Comment" />
            <SidebarRow title="Reply"/>

        </div>
    )
}

export default Sidebar
