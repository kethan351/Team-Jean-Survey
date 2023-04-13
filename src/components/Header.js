import React from 'react'
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu"
import {IconButton} from "@material-ui/core"
import formImage from "../images/Form-Button_25.png"
import SearchIcon from "@material-ui/icons/Search"
import AppsIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"
import avatar from "../images/avatar.png"

/**
 * This function creates the header seciton of the home page
 * This includes the menu icon, the form image, the search bar and the avatar
 * @returns Header component
 */
function Header(){
    return(
        <div className="header">
            <div className="header_info">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={formImage} alt="form" style={{height:"40px",width:"40px"}} className="form_image"/>
            <div className="info">
                <h3>JEAN Survey</h3>
            </div>

            </div>
            <div className="header_search">
                <IconButton><SearchIcon /></IconButton>
                <input type="text" name="search" placeholder="Search"/>

            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar src={avatar} />
                </IconButton>

            </div>

        </div>
    )

}

export default Header;