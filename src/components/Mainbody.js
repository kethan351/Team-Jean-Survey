import React, {useState} from 'react';
import StorageIcon from '@material-ui/icons/Storage';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import {IconButton} from '@material-ui/core';
import "./Mainbody.css";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FormButton from "../images/Form-Button.png";
//import doc_image from "../images/t-shirt.png" //this is in one of the videos but I don't think its relevent

import "./Mainbody.css"
import axios from "axios";
import {useHistory} from "react-router-dom";

/**
 * This function creates the main body section of the home page
 * This includes the "Recent Forms" text, the "Owned by anyone" text, the folder icon and the storage icon
 * @returns Mainbody component
 */
function Mainbody(){
    const history = useHistory();

    function navigate_to(docname){
        var fname = docname.split(".");
        history.push("/form/" + fname[0])
    }

    const [files,setFiles]=useState([]);
    async function filenames(){
        var request = await axios.get("https://localhost:9000/get_all_filenames")
        let filenames = request.data;
        setFiles(filenames)
    }
    filenames()

    return(
        <div className="mainbody">
            <div className="mainbody_top">
                <div className="mainbody_top_left" style={{fontSize:"16px", fontWeight:"500", color:"#878787"}}>
                    Recent Forms
                </div>
                <div className="mainbody_top_right">
                <div className="mainbody_top_center" style={{fontSize: "14px", marginRight: "125px",fontWeight:"500", color:"#878787"}}>Owned by anyone <ArrowDropDownIcon/></div>
                    <IconButton>
                        <StorageIcon style={{fontSize:"16px", color:"black"}} />
                    </IconButton>
                    <IconButton>
                        <FolderOpenIcon style={{fontSize:"16px", color:"black"}} />
                    </IconButton>

                </div>

            </div>
            <div className="mainbody_docs">
            {
                files.map((ele)=>( //made changes here - Ethan 13/14
                    <div className="doc_card" onClick={()=>{
                        navigate_to(ele)
                    }}>
                    <img src={FormButton} className="doc_image" alt="form icon"/>
                    <div className="doc_card_content">
                        <h5>Sample Survey</h5>
                        <div className="doc_content" style={{fontSize:"12px", color:"gray"}}>
                            <div className="content_left">
                                <StorageIcon style={{ color:"white", fontSize:"12px", backgroundColor:"gray", borderRadius:"2px"}}/>
                            </div>
                            <MoreVertIcon style={{fontSize:"16px", color:"gray"}}/>

                        </div>
                    </div>
                </div>
                ))
            }

            </div>

        </div>
    )
}

export default Mainbody;
