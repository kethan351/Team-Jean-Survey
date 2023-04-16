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
import {DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import Button from '@material-ui/core/Button';
import { FcRightUp } from 'react-icons/fc';
import FilterNoneIcon from '@material-ui/icons/FilterNone'
import {BsTrash} from 'react-icons/bs';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleOutlineIcon  from '@material-ui/icons/AddCircleOutline';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import TextFieldsIcon  from '@material-ui/icons/TextFields';
function Question_form() {
    const [questions, setQuestions] = useState(
        [{
            questionText: "Question",
            questionType: "radio",
            options: [
                { optionText: "Option 1" },
            ],
            open: true,
            required: false
        }]
        
    )

    function changeQuestion(text, i) {
        var newQuestion = [...questions];
        newQuestion[i].questionText = text;
        setQuestions(newQuestion);
        console.log(newQuestion)
    }

        function changeOptionValue(text, i, j){
            var optionsQuestion = [...questions];
            optionsQuestion[i].options[j].optionText = text;
            setQuestions(optionsQuestion);
            console.log(optionsQuestion)
        }

        function addQuestionType(i, type){
            let qs = [...questions];
            console.log(type)
            qs[i].questionType = type;
            setQuestions(qs);
        }

        function addOption(i){
            var optionsOfQuestion = [...questions];
            optionsOfQuestion[i].options.push({optionText: "Option " + (optionsOfQuestion[i].options.length + 1)})
            setQuestions(optionsOfQuestion)
        }

        function removeOption(i, j){
            var RemoveOptionQuestion = [...questions];
            if(RemoveOptionQuestion[i].options.length > 1){
                RemoveOptionQuestion[i].options.splice(j, 1);
                setQuestions(RemoveOptionQuestion)
                console.log(i + "__" + j)
            }
        }

        function copyQuestion(i){
            expandCloseAll();
            let qs = [...questions];
            var newQuestion = {...qs[i]}
            setQuestions([...questions, newQuestion])
        }

        function deleteQuestion(i){
            let qs = [...questions];
            if(questions.length > 1){
                qs.splice(i, 1);
            }
            setQuestions(qs)
        }

        function requiredQuestion(i){
            var reqQuestion = [...questions];
            reqQuestion[i].required = !reqQuestion[i].required
            console.log(reqQuestion[i].required + " " + i)
            setQuestions(reqQuestion)
        }

        function addMoreQuestionField(){
            expandCloseAll();
            setQuestions([...questions, {questionText:"Question", questionType:"radio", options:[{optionText: "Option 1"}], open:true, required:false}]);
        }


        function onDragEnd(result){
            if (!result.destination){
                return;
            }
            var itemgg = [...questions];
            const itemF = reorder(itemgg, result.source.index, result.destination.index);
            setQuestions(itemF);
        }

        const reorder = (list, startIndex, endIndex) => {
            const result = Array.from(list);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);
            return result;
        };

        function expandCloseAll(){
            let qs = [...questions];
            for (let j = 0; j < qs.length; j++){
                qs[j].open = false;
            }
            setQuestions(qs);
        }

        function handleExpand(i){
            let qs = [...questions];
            for (let j = 0; j < qs.length; j++){
                if (i === j){
                    qs[i].open = true;
                }
                else{
                    qs[j].open = false;
                }
            }
            setQuestions(qs);
        }


    function questionsUI() {
        return questions.map((ques, i) => (
            <Draggable key={i} draggableId={i + "id"} index={i}>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div>
                            <div style={{marginBottom: "0px"}}>
                                <div style={{width:"100%", marginBottom:"0px"}}>
                                    <DragIndicatorIcon style={{transform:"rotate(-90deg)", color:"#DAE0E2", position:"relative", left:"300px"}} fontSize="small"/>
                                </div>

                                <div>
                                <Accordion expanded={questions[i].open} onChange={()=>{handleExpand(i)}} className={questions[i].open ? 'add_border' : ""}>
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
                                {questions[i].open?(
                                    <div className="question_boxes">

                                        <AccordionDetails className="add_question">
                                            <div className="add_question_top">
                                                <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e)=>(changeQuestion(e.target.value, i))}></input>
                                                <CropOriginalIcon style={{color:"#5f6368"}} />
                                                <Select className='select' style={{color:"#5f6368",fontSize:'13px'}}>
                                                    <MenuItem id="text" value="Text" onclick={()=>{addQuestionType(i,"text")}}> <SubjectIcon style={{marginRight:"10px", color:"#70757a"}} /> Paragraph</MenuItem>
                                                    <MenuItem id="checkbox" value="CheckBox" onclick={()=>{addQuestionType(i,"checkbox")}}> <CheckBoxIcon style={{marginRight:"10px", color:"#70757a"}} checked />Check Box</MenuItem>
                                                    <MenuItem id="radio" value="Radio" onclick={()=>{addQuestionType(i,"radio")}}><Radio style={{marginRight:"10px", color:"#70757a"}} checked /> Multiple Choice</MenuItem>
                                                </Select>
                                            </div>
                                            {ques.options.map((op, j) => 
                                                <div className="add_question_body" key={j}>
                                                    {(ques.questionType != "text") ?
                                                        <input type={ques.questionType} style={{ marginRight: "10px" }}/> :
                                                        <ShortTextIcon style={{ marginRight: "10px" }} />
                                                    }
                                                    <div>
                                                        <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} onChange={(e)=>{changeOptionValue(e.target.value, i, j)}}></input>
                                                    </div>
                                                    <CropOriginalIcon style={{color:"#5f6368"}}/>
                                                    <IconButton aria-label="delete">
                                                        <CloseIcon onClick={()=>{removeOption(i, j)}}/>
                                                    </IconButton>
                                                </div>
                                            )}

                                            <div className="add_question_body">
                                                <FormControlLabel disabled control={
                                                    (ques.questionType!="text") ?
                                                    <input type={ques.questionType} color="primary" inputProps={{ "aria-label": "secondary checkbox" }} style={{marginLeft:"10px", marginRight:"10px"}} disabled/> :
                                                    <ShortTextIcon style={{marginRight:"10px"}} />
                                                } label={
                                                    <div>
                                                        <input type="text" className="text_input" style={{fontSize:"13px", width:"60px"}} placeholder="Add other"></input>
                                                        <Button size="small" onClick={()=>{addOption(i)}} style={{textTransform: "none", color: "#4285f4", fontSize:"13px", fontWeight:"600"}}>Add Option</Button>
                                                    </div>
                                                } />
                                            </div>

                                            <div className="add_footer">
                                                <div className="add_question_botton_left">
                                                    <Button size="small" style={{textTransform:"none", color:"#4285f4", fontSize:"13px", fontWeight:"600"}}>
                                                        <FcRightUp style={{border:"2px solid #4285f4", padding:"2px", marginRight:"8px"}} /> Answer key</Button>
                                                </div>
                                                    
                                                    <div className="add_question_bottom">
                                                        <IconButton aria-label="copy" onClick={()=>{copyQuestion(i)}}>
                                                            <FilterNoneIcon/>
                                                        </IconButton>

                                                        <IconButton aria-label="delete" onClick={()=>{deleteQuestion(i)}}>
                                                            <BsTrash />
                                                        </IconButton>
                                                            <span style={{color:"#5f6368", fontSize:"13px"}}>Required </span> <Switch name="checkedA" color="primary" onClick={()=>{requiredQuestion(i)}} />
                                                        <IconButton>
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                            </div>
                                        </AccordionDetails>

                                        <div className="question_edit">
                                                    <AddCircleOutlineIcon onClick={addMoreQuestionField} className="edit"/>
                                                    <OndemandVideoIcon className="edit"/>
                                                    <CropOriginalIcon className="edit"/>
                                                    <TextFieldsIcon className="edit"/>
                                        </div>

                                    </div>):" "}
                                </Accordion>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
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

                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div {...provided.droppableProps} red={provided.innerRef}>
                    
                    {questionsUI()}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>

                </div>
            </div>
        </div>
    )

}
export default Question_form