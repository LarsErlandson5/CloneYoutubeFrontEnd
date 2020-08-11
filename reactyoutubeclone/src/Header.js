import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import AddCommentIcon from '@material-ui/icons/AddComment';
import ReplyIcon from '@material-ui/icons/Reply';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
            </div>
            <div className="header__input">

                <input type="text" />
                <YoutubeSearchedForIcon />
            </div>
            <div className="video__player">

            </div>
            <div className="enter__comment">
                <AddCommentIcon />
                <ReplyIcon />
            </div>




        </div>
    )
}

export default Header;