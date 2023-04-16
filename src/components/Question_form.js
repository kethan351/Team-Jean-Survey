import React, { useState, useEffect } from 'react';

import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Radio from '@material-ui/core/Radio'
import ShortTextIcon from '@material-ui/icons/ShortText'
import {IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import SubjectIcon from '@material-ui/icons/Subject'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import {
    Container, Grid, FormControlLabel,
    InputLabel, MenuItem
} from "@material-ui/core";
import "./Question_form.js";
import "./Question_form.css";

function Question_form() {
    const [questions, setQuestions] = useState(
        [{
            questionText: "Question 1?",
            questionType: "radio",
            options: [
                { optionText: "Option1" },
                { optionText: "Option2" },
                { optionText: "Option3" },
                { optionText: "Option4" }
            ],
            open: true,
            required: false
        }]
        
    )

    function questionsUI() {
        return questions.map((ques, i) => (
            <Accordion expanded={ques.open} >
                <AccordionSummary
                    aria-controls="panella-content"
                    id="panella-header"
                    elevation={1} style={{ width: '100%' }}>

                    {(questions[i].open) ? (
                        <div className="saved_questions">

                            <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: ".1px", lineHeight: '24px', paddingBottom: '8px' }}>{i + 1}, {questions[i].questionText}</Typography>

                            {ques.options.map((op, j) => (
                                <div key={j}>
                                    <div style={{ display: 'flex', }}>
                                        <FormControlLabel style={{ marginLeft: "5px", marginBottom: "5px" }} diabeled control={<input type={ques.questionType} color="primary" style={{ marginRight: '3px,' }} required={ques.type} />}
                                            label={<Typography style={{ fontFamily: 'sans-serif', fontSize: '13px', fontWeight: "400", letterSpacing: ".1px", lineHeight: '24px' }}> {ques.options[j].optionText}</Typography>} />
                                    </div>

                                </div>
                            ))}
                        </div>
                    ) : ""}
                </AccordionSummary>
                <div className="question_boxes">

                    <AccordionDetails className="add_question">
                        <div className="add_question_top">
                            <input type="text" className="question" placeholder="Question" value={ques.questionText}></input>
                            <CropOriginalIcon style={{color:"#5f6368"}} />
                            <Select className='select' style={{color:"#5f6368",fontSize:'13px'}}>
                                <MenuItem id="text" value="Text"> <SubjectIcon style={{marginRight:"10px", color:"#70757a"}}/> Paragraph</MenuItem>
                                <MenuItem id="checkbox" value="CheckBox"> <CheckBoxIcon style={{marginRight:"10px", color:"#70757a"}} checked/>Check Box</MenuItem>
                                <MenuItem id="radio" value="Radio" ><Radio style={{marginRight:"10px", color:"#70757a"}} checked/> Multiple Choice</MenuItem>
                            </Select>
                        </div>
                        {ques.options.map((op, j) =>
                            <div className="add_question_body" key={j}>
                                {(ques.questionType != "text") ?
                                    <input type={ques.questionType} style={{ marginRight: "10px" }}/> :
                                    <ShortTextIcon style={{ marginRight: "10px" }} />
                                }
                                <div>
                                    <input type="text" clasName="text_input" placeholder="option" value={ques.options[j].optionText}></input>
                                </div>
                                <CropOriginalIcon style={{color:"#5f6368"}}/>
                                <IconButton aria-label="delete">
                                    <CloseIcon />
                                </IconButton>
                            </div>
                        )}
                    </AccordionDetails>

                </div>
            </Accordion>
        ))
    }
    return (
        <div>
            <div className="question_form">
                <br></br>
                <div className="section">
                    <div className="question_title_section">
                        <div className="question_form_top">
                            <input type="text" className="question_form_top_name" style={{ color: "black" }} placeholder="Untitled document"></input>
                            <input type="text" className="question_form_top_desc" style={{ color: "black" }} placeholder="Form description"></input>
                        </div>
                    </div>
                    {questionsUI()}
                </div>
            </div>
        </div>
    )

}
export default Question_form