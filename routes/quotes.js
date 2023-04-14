var express = require('express');
const quotes_controlers= require('../controllers/quotes');
var router = express.Router();
/* GET quotes */
router.get('/', quotes_controlers.quotes_view_all_Page );
module.exports = router;
