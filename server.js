const express = require('express');
const app = express();
port = process.env.PORT || 8080 ;

app.set('view engine' , 'ejs');
app.use('/' , express.static('public'))

app.get('/' , (req , res) =>{
    res.render('index')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/projects',(req,res)=>{
    res.render('projects')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.listen(port, ()=>{
    console.log(`port => ${port}`)
})