const express=require('express');
const  {getSignedUrl}  = require('./controller/imageController');

const router=express.Router();

router.route('/image-url')
.get(getSignedUrl)

module.exports=router