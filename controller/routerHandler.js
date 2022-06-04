
exports.home = (req,res)=>{
    res.render('../view/pages/index.ejs',{title:'home'})
}

exports.about = (req,res)=>{

    res.render('../view/pages/about.ejs', {title:'about'})

}
exports.contact = (req,res)=>{

    res.render('../view/pages/contact.ejs', {title:'contact'})

}