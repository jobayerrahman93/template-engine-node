const express = require('express');
const  routeController  = require('./controller/routeController');
const app = express();
const port = process.env.PORT || 5000;



app.set('view engine', 'ejs');
app.use('/',routeController);



// app.get('/about',(req,res)=>{
//     res.render('./view/pages/about.ejs',{title:'about'});
// })
// app.get('/contact',(req,res)=>{
//     res.render('./view/pages/contact.ejs',{title:'contact'});
// })

app.get('*', (req,res)=>{
    res.send("Please use the correct route");
});


app.listen(port, () => {
    console.log(` listening on port ${port}`)
  })








