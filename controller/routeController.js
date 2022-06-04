const router = require('express').Router();
const {home,about,contact}= require('./routerHandler')


router.get('/',home);
router.get('/about',about);
router.get('/contact',contact);






module.exports= router;