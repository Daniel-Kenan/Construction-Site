const express = require('express');
const app = express();
port = process.env.PORT || 8080 ;

app.set('view engine' , 'ejs');
app.use('/' , express.static('public'))

app.get('/' , (req , res) =>{
    res.render('index')
})

app.listen(port)