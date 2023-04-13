import React from 'react';
import "./Formheader.css";
import preview from "../images/eye.png";
import form_image from "../images/Form-Button_25.png";
import {IconButton} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import avatarimage from "../images/avatar.png";

/**
 * This function creates the header for the survey
 * The header has the text box for the survey title, as well as the preview and avatar buttons
 * @returns Formheader component
 */
function Formheader(){
    return(
        <div className="form_header">
            <div className="form_header_left">
                <img src={form_image} alt="form_logo" style={{height:"45px", width:"40px"}}/>
                <input type="text" placeholder="Untitled Form" className="form_name"></input>
            </div>
            <div className="form_header_right">
                <IconButton>
                    <img src={preview} alt="preview_icon" style={{height:"45px", width:"45px"}}/>
                </IconButton>
                <IconButton>
                    <Avatar style={{height:"45px", width:"45px"}} src={avatarimage}/>
                </IconButton>
            </div>
            
        </div>
    )
}

export default Formheader;