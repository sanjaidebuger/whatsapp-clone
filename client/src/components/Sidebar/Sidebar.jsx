import React from 'react';
import "./Sidebar.css";
import {Avatar , IconButton} from "@mui/material";
import {useStateValue} from '../ContextApi/StateProvider';
import {Chat, DonutLarge, MoreVert} from '@mui/icons-material';

const Sidebar = () => {
  const [{user}] = useStateValue();

 return (
    <div className='sidebar'>
        <div className='sidebar__header'>
           <Avatar 
           src={user.photoURL}
           />
           <div className='sidebar__headerRight'>
            <IconButton>
              <DonutLarge />
            </IconButton>
            <IconButton>
              <Chat />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
           </div>
        </div>
    </div>
  )
}

export default Sidebar;