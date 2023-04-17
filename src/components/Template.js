import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import "./Template.css";
import plusButton from "../images/plus-sign.png";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";
import axios from 'axios';

/**
 * This function creates the upper template section of the home page
 * This includes the "Start New Survey" text, the scrolling icons and the "Create Survey" card
 * @returns Template component
 */

function Template() {
    let history = useHistory();
    function create_form() {
        var create_form_id = uuid();
        console.log(create_form_id)

        var question_list = [{
            questionText: "Question",
            questionType: "radio",
            options: [
                { optionText: "Option 1" },
            ],
            open: true,
            required: false
        }]

        axios.post(`https://localhost:9000/add_questions/${create_form_id}`, {
            "document_name": "untitled_form",
            "doc_desc": "add description",
            "questions": question_list,
        })
        history.push("/form" + create_form_id)
        window.location.reload(false);
    }

    const handleCardClick = () => {
        const id = uuid();
        history.push(`/form/${id}`);
        window.location.reload(false);
    }


    return (
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <span style={{ fontSize: "20px", color: "#878787" }}>Start New Survey</span>
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
                <div classname="card" onClick={handleCardClick}>

                    <img src={plusButton} alt="plus" className="card_image" />
                    <p className="card_title">Create Survey</p>
                </div>
           



            </div>

        </div>
    )
}

export default Template;
