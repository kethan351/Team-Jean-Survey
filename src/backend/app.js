//console.log("helloworld")
//install latest version of nodejs
//cd into backend folder and put node app.js into terminal to see if it will print to console
//npm init into terminal, confirm defaults

const fs = require('fs')
const express = require("express")

const app = express()

var cors = require('cors')              // CORS --> Cross Origin Resource Sharing
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const Excel = require('exceljs');

app.post(`/add_questions/:doc_id`, (req,res)=>{
    var docs_data = req.body;
    var name = req.params.doc_id
   // console.log(docs_data)
    
    var d = new Date();
    let workbook = new Excel.Workbook();
    var data = req.body.answer_data;
    let worksheet = workbook.addWorksheet(`${name}`);

  //  let data = JSON.stringify(docs_data);
    //fs.writeFileSync(`files/${name}.json`, data);

   worksheet.getRow(1).font = {bold:true}
   data.forEach((e,index)=>
   {
    const rowIndex =index+2;
    worksheet.addRow({
        d, ...e
    })
   })
   workbook.xlsx.writeFile(`${name}.xlsx`)
   
})

app.post(`/student_response/:doc_id`, (req,res)=>{
    var docs_data = req.body;
    var name = req.params.doc_id
    //console.log(docs_data)
   // var d = new Date();
   

    //let data = JSON.stringify(docs_data);
   // fs.writeFileSync(`files/${name}.json`, data);

   let workbook = new Excel.Workbook();
   var data = req.body.answer_data;
   let worksheet = workbook.addWorksheet(`${name}`);
worksheet.columns =[{header:"Time Stamp", key:"datetime"},...docs_data.column]
worksheet.columns.forEach(column =>{
    column.width = column.header.length< 12 ? 12:column.header.length
})
   worksheet.getRow(1).font = {bold:true}
   data.forEach((e,index)=>
   {
    const rowIndex =index+2;
    worksheet.addRow({
        d, ...e
    })
   })
   workbook.xlsx.writeFile(`${name}.xlsx`)
})

app.get("data/:doc_id", (req,res)=>{
    var docId = req.params.doc_id;
    fs.readFile(`files/${docId}.json`, (err, data)=>{
        if (err) throw err;
        let ques_data = JSON.parse(data);
        console.log(req.params.doc_id)
        res.send(ques_data);
    });
})

const path = require('path');

app.get("/get_all_filenames", (req,res)=>{
    const directoryPath = path.join(__dirname, '/files');
    fs.readdir(directoryPath, function (err, files){
        if (err){
            return console.log('unable to scan directory: ' + err);
        }
        res.send(files);
    });
});




app.listen(9000, ()=>{console.log('express server is running at port number 9000')})
