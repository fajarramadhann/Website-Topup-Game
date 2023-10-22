const express = require('express');
const router = express.Router();
const app = express();

app.get('/home', (req, res, next)=>{
    // res.render('home', {title: "Web Topup", author: "jarss88"})
    let users = ["fajar", "greesel"]
    res.send(users)
    res.write(users)
})
module.exports = router;
