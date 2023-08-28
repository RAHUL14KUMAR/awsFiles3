const express=require('express');
const router=require('./route');
const cors=require('cors');
const bodyParser=require('body-parser');

const app=express();
app.use(cors());

app.use('/',router);
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(8080,()=>{
    console.log(`server is running at http://localhost:8080`)
})