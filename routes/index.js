const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('index', {title: "Web Topup", author: "jarss88"})
})

router.get('/order', (req, res, next)=>{
    res.render('mobilelegends', {title: "Topup Mobile Legends"})
    res.send('ini order');
})

router.get('/promo', (req, res, next) => {
    res.render('promo')
    // res.send('ini promo');
    // console.log(promo)
})

router.get('/checkusername/mobilelegends', (req, res, next)=>{
    res.render('usernameMl', {title: "Cek Username Mobile Legends"})
    res.send('check username')
})


module.exports = router;
