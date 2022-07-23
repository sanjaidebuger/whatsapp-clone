import React ,{useEffect, useState} from 'react'
import "./SidebarChat.css";
import { Avatar } from "@mui/material";


const SidebarChat = ({addNewChat}) => {

const [seed, setSeed] = useState("");

useEffect(() => {
  setSeed(Math.floor(Math.random() * 5000));
}, []);
 
    return !addNewChat ? (
      <div className='sidebarChat'>
        <Avatar 
        src='https://avatars.dicebear.com/api/human/${seed}.svg'
        />
        <div className="sidebarChat__info">
            <h2>whatsapp clone</h2>
        </div>
      </div>
    ):(
      <div className='sidebarChat'>
       <h2>Add New Chat</h2>  
      </div>
    );
}

export default SidebarChat;