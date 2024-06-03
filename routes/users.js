
var express = require('express');
var router = express.Router();
const userController = require('../controllers/UserController')
const jwt = require('jsonwebtoken')

router.post('/register', async function(req, res, next) {
  try {
    const {name, email, password, age, confirm_pass} = req.body;
    const user = await userController.register(name, email, password, age, confirm_pass)
    res.status(200).json({user})
  } catch (error) {
    console.log(error);
    res.status(414).json({error: error.message});
  }
});

router.post('/login', async function(req, res, next) {
  try {
    const {email, password} = req.body;
    const user = await userController.login(email, password)
   if(user){
    const access_token = jwt.sign({user}, 'mhong', { expiresIn: 1*60});
    const refresh_token = jwt.sign({user}, 'mhong', { expiresIn: 90 * 24 * 60 * 60}); // dùng để lấy lại access token
    res.status(200).json({user, access_token, refresh_token})
   }else{
    res.status(401).json({error: 'Sai email hoặc mật khẩu'})
   }
  } catch (error) {
    console.log(error);
    res.status(414).json({error: error.message});
  }
});

router.post('/refresh-token', async function(req, res, next) {
  try {
    let { refresh_token } = req.body;
    const data = jwt.verify(refresh_token, 'mhong')
    const access_token = jwt.sign({ user: data.user},'mhong', {expiresIn: 1*60});
    refresh_token = jwt.sign({user: data.user}, 'mhong', {expiresIn: 1*60});
    res.status(200).json({user: data.user, access_token, refresh_token})
  } catch (error) {
    console.log(error);
    res.status(414).json({error: error.message});
  }
});




module.exports = router;
