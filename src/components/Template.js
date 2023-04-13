import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton} from '@material-ui/core';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import "./Template.css";
import plusButton from "../images/plus-sign.png";

/**
 * This function creates the upper template section of the home page
 * This includes the "Start New Survey" text, the scrolling icons and the "Create Survey" card
 * @returns Template component
 */
function Template(){
    return(
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <span style={{fontSize:"20px", color:"#878787"}}>Start New Survey</span>
                </div>
                <div className="template_right">
                    <div className="gallery_button">
                        <UnfoldMoreIcon />
                    </div>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                
            </div>
            <div className="template_body">
                <div classname="card">
                    <img src={plusButton} alt="plus" className="card_image"/>
                    <p className="card_title">Create Survey</p>
                </div>


            </div>
            
        </div>
    )
}   

export default Template;