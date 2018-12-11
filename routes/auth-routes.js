const router = require('express').Router();

// auth login
router.get('/login',(req,res)=>{

    res.render('login');
});

// auth  Google
router.get('/google',(req,res)=>{

    });