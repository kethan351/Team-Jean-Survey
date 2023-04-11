// Testing converting survey data into CSV file for SQL use

import React from "react";
import { createObjectCsvWriter } from "csv-writer";
import fs from 'fs';

interface QuestionAnswer {
    question: string;
    type: string;
    answer: string[];
}

interface Survey {
    name: string;
    owner: string;
    time: number; //time to complete
    question: QuestionAnswer[];
}

const questions: QuestionAnswer[] = [
    {
        question: "Is this a test?",
        type: "M", //multiple choice?
        answer: ["Yes", "No"],
    },
    {
        question: "Are you sure?",
        type: "S", //short answer
        answer: [""],
    },
    {
        question: "Is this true?",
        type: "T", //short answer
        answer: ["T", "F"], //could also make just multiple choice with only two choices
    },
];

const surveyTest: Survey = {
        name: "Test Survey",
        owner: "JEAN",
        time: 10,
        question: questions
    };

    const csvData = surveyTest.map(item => {
        return `${item.name}, ${item.owner}, ${item.time}, ${item.question}`;
    }).join('\n');