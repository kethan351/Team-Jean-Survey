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

//app.listen(9000, ()=>{console.log('express server is running at port number 9000')})

app.post(`/add_questions/:doc_id`, (req,res)=>{
    var docs_data = req.body;
    var name = req.params.doc_id
    console.log(docs_data)
    let data = JSON.stringify(docs_data);
    fs.writeFileSync(`files/${name}.json`, data);
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




