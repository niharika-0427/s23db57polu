var express = require('express');
const quotes_controlers= require('../controllers/quotes');
var router = express.Router();
/* GET quotes */
router.get('/', quotes_controlers.quotes_view_all_Page );
router.get('/detail', quotes_controlers.quotes_view_one_Page);
router.get('/create', quotes_controlers.quotes_create_Page);
router.get('/update', quotes_controlers.quotes_update_Page);
router.get('/delete', quotes_controlers.quotes_delete_Page);
module.exports = router;