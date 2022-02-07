import React from 'react';
import '../css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <FacebookRoundedIcon color ="primary" sx={{fontSize: 40}}/>
            <div className="header__input"></div>
            <SearchIcon/>
            <input type="text" />
        </div>
        <div className="header__middle">
            <div className="header__option"></div>
                <HomeIcon fontSize="large"/>
            <div className="header__option"></div>
                <FlagIcon fontSize="large"/>
            <div className="header__option"></div>
                <SubscriptionsOutlinedIcon fontSize="large"/>
            <div className="header__option"></div>
                <StorefrontOutlinedIcon fontSize="large"/>
            <div className="header__option"></div>
                <SupervisedUserCircleIcon fontSize="large"/>  
        </div>
        <div className="header__right">
            <div className="header__info"></div>
                <Avatar/>
                <h4>yishac</h4>
        

        <IconButton>
            <AddIcon/>
        </IconButton>
        <IconButton>
            <ForumIcon/>
        </IconButton>
        <IconButton>
            <NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
            <ExpandMoreIcon/>
        </IconButton>
        </div>
    </div>
  )
}

export default Header;
