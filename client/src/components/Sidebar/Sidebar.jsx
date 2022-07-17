import React from 'react';
import "./Sidebar.css";
import {Avatar} from "@mui/material";
import {useStateValue} from '../ContextApi/StateProvider';

const Sidebar = () => {
  const [{user}] = useStateValue();

 return (
    <div className='sidebar'>
        <div className='sidebar__header'>
           <Avatar 
           src={user.photoURL}
           />
        </div>
    </div>
  )
}

export default Sidebar;