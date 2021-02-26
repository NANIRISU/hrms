import React from 'react';
import Input from '../input/Input';
import {FiSearch} from 'react-icons/fi';
import {IoSendOutline}from 'react-icons/io5';
import {IoNotificationsOutline} from 'react-icons/io5';
import Avatar from '../avatar/Avatar';

const Header =({pageHeader})=>{
    return (
    <header className="header"> 
      <div className="page-header">
         <h1>{pageHeader}</h1>
      </div>
     <div style={{display:"flex",justifyContent:"space-between",width:"50%"}}>
     <div className="action-container">
        <Input placeholder="Search...." icon={<FiSearch />} classes={{inputComponentClass:"hover-action"}} />
        <IoSendOutline className="action-icon"/>
        <IoNotificationsOutline className="action-icon"/>
      </div>
      <div className="profile-container">
          <label>saikrishna</label>
          <Avatar/>
      </div>
     </div>
    </header>
    )
}

export default Header;