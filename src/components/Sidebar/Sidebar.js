import React from "react";
import "./Sidebar.css"
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/ core";
import ChatIcon from "amaterial-ui/icons/Chat"; 
import MoreVertIcon from "@material-ui/icons/ MoreVert";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton> /*search for buttons and add them as in the screenshot*/
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;