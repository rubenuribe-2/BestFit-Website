//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine','ejs');

app.get('/',function(req,res){//what to do at root rout
    res.render('index');
});

app.listen(process.env.PORT ||3000,function(){//listen at port 3000
    console.log("server started on port 3000");
})
