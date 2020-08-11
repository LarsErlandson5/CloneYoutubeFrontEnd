import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import AddCommentIcon from '@material-ui/icons/AddComment';
import ReplyIcon from '@material-ui/icons/Reply';

function Header() {
    return (
        <div>
        <MenuIcon />    
        <input type="text"/>
        <YoutubeSearchedForIcon/>
        <AddCommentIcon/>
        <ReplyIcon/>
        </div>
    )
}

export default Header;