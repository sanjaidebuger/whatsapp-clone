import React ,{useEffect ,useState} from 'react';
import {Avatar ,IconButton} from "@mui/material"; 
import {SearchOutlined} from "@mui/icons-material";
import "./Chat.css";

function Chat() {
  const [seed, setSeed] = useState("");

useEffect(() => {
   setSeed(Math.floor(Math.random() * 5000));
}, []);
return (
    <div className='chat'>
      <div className='chat__header'>
      <Avatar 
        src='https://avatars.dicebear.com/api/human/${seed}.svg'/>
      <div className='chat__headerInfo'>
        <h3>React Developer</h3>
        <p>Last Updated at {new Date().toString().slice(0, 25)}</p>
      </div>
      <div className='chat__headerRight'>
        <IconButton>
         <SearchOutlined />  
        </IconButton>     
      </div>
      </div>
    </div>
  )
}

export default Chat;