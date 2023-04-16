export const initialState = {
    questions:[{questionText:"Question", questionType:"radio", options:[{optionText: "Option 1"}], open:true, required:false}],
    questionType:"radio",
    doc_name:"Untitled form ",
    doc_desc:" add the description"
}

export const actionTypes = {
    SET_QUESTIONS:"SET QUESTIONS",
    CHANGE_TYPE:"CHANGE TYPE",
    SET_DOC_NAME:"SET DOC NAME",
    SET_DOC_DESC:"SET DOC DESC"
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_QUESTIONS:
            return{...state, questions:action.questions,};
        case actionTypes.CHANGE_TYPE:
            return{...state, questions:action.questionType,};
        case actionTypes.SET_DOC_NAME:
            return{...state, questions:action.doc_name,};
        case actionTypes.SET_DOC_DESC:
            return{...state, questions:action.doc_desc,};
        default:
            return state;
    }
}

export default reducer;