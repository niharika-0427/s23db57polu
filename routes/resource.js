var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var quotes_controller = require('../controllers/quotes');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// quotes ROUTES ///
// POST request for creating a quotes.
router.post('/quotes', quotes_controller.quotes_create_post);
// DELETE request to delete quotes.
router.delete('/quotes/:id', quotes_controller.quotes_delete);
// PUT request to update quotes.
router.put('/quotes/:id', quotes_controller.quotes_update_put);
// GET request for one quotes.
router.get('/quotes/:id', quotes_controller.quotes_detail);
// GET request for list of all quotes items.
router.get('/quotes', quotes_controller.quotes_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"costumes", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
    };