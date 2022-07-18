import React from 'react';
import "./Sidebar.css";
import {Avatar , IconButton} from "@mui/material";
import {useStateValue} from '../ContextApi/StateProvider';
import 

const Sidebar = () => {
  const [{user}] = useStateValue();

 return (
    <div className='sidebar'>
        <div className='sidebar__header'>
           <Avatar 
           src={user.photoURL}
           />
           <div className='sidebar__header'>
            <IconButton>
              <DonutLarge />
            </IconButton>
           </div>
        </div>
    </div>
  )
}

export default Sidebar;