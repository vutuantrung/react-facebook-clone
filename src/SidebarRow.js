import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';

function SidebarRow({ src, Icon, title }) {
    // Note 1: we can pass a component as parameter from props,
    // but naming convention is we need to capital the first letter of the parameter
    return (
        <div className='sidebarRow'>
            {src && <Avatar src='src' />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
